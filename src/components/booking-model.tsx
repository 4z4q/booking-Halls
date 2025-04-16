"use client";
import { useState } from "react";
import { format, addMonths, isBefore, isAfter } from "date-fns";
import { ar } from "date-fns/locale"; // Fixed import - removed 'se'
import { CalendarIcon, Clock, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface BookingModalProps {
  serviceName: string;
  serviceImage?: string;
  servicePrice: number;
  serviceLocation?: string;
  serviceType: string;
  children: React.ReactNode;
  onBookingComplete?: (bookingData: BookingData) => void;
}

interface BookingData {
  serviceId: string;
  date: Date | undefined;
  timeSlot: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests: string;
  paymentMethod: string;
}

const timeSlots = [
  "9:00 صباحاً",
  "10:00 صباحاً",
  "11:00 صباحاً",
  "12:00 ظهراً",
  "1:00 مساءً",
  "2:00 مساءً",
  "3:00 مساءً",
  "4:00 مساءً",
  "5:00 مساءً",
  "6:00 مساءً",
  "7:00 مساءً",
  "8:00 مساءً",
];

export function BookingModal({
  serviceName,
  servicePrice,
  serviceLocation,
  serviceType,
  children,
  onBookingComplete,
}: BookingModalProps) {
  // State for the multi-step booking process
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Booking data
  const [date, setDate] = useState<Date | undefined>(new Date()); // Keep consistent initial state
  const [timeSlot, setTimeSlot] = useState<string>("9:00 صباحاً"); // Fixed initial value to match array
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const bookingData: BookingData = {
        serviceId: "123", // This would come from props in a real app
        date,
        timeSlot,
        customerName,
        customerEmail,
        customerPhone,
        specialRequests,
        paymentMethod,
      };

      if (onBookingComplete) {
        onBookingComplete(bookingData);
      }

      setIsSubmitting(false);
      setStep(4); // Move to confirmation step
    }, 1500);
  };

  // Reset form when dialog closes
  const handleDialogChange = async (open: boolean) => {
    toast.info("يجب تسجيل الدخول قبل الحجز ", {
      action:{
        label:"تسجيل الدخول",
        onClick: () => redirect("/sign-in")
      }
    });

    // if (open) {
    //   const response = await fetch("/api/check-auth");
    //   if (!response.ok) {
    //     redirect("/sign-in");
    //   }
    // }

    // setIsOpen(open);

    if (!open) {
      // Reset form after a short delay to avoid visual glitches
      setTimeout(() => {
        setStep(1);
        setDate(new Date()); // Reset to new Date() to be consistent with initial state
        setTimeSlot("9:00 صباحاً"); // Reset to match initial state
        setCustomerName("");
        setCustomerEmail("");
        setCustomerPhone("");
        setSpecialRequests("");
        setPaymentMethod("credit-card");
      }, 300);
    }
  };

  const today = new Date();
  const maxDate = addMonths(today, 2); // Allow booking for the next two months

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    selectedDate.setHours(0, 0, 0, 0);
    // Set hours, minutes, seconds, and milliseconds to 0 because we only care about the date
    today.setHours(0, 0, 0, 0);

    if (isBefore(selectedDate, today)) {
      alert("لا يمكنك اختيار تاريخ في الماضي.");
      return;
    }

    if (isAfter(selectedDate, maxDate)) {
      alert("يمكنك الحجز خلال الشهرين القادمين فقط.");
      return;
    }

    if (selectedDate.getDay() === 5) {
      alert("يوم الجمعة غير متاح للحجز.");
      return;
    }

    setDate(selectedDate);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] ">
        {step === 1 && (
          <>
            <DialogHeader className="mt-3">
              <DialogTitle>اختر موعد الحجز</DialogTitle>
              <DialogDescription>
                حدد التاريخ والوقت المناسب لحجز {serviceName}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="date">التاريخ</Label>

                <div className="relative mb-4">
                  <input
                    type="date"
                    className="peer w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-700 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={date ? format(date, "yyyy-MM-dd") : ""}
                    onChange={handleDateChange}
                    min={format(today, "yyyy-MM-dd")}
                    max={format(maxDate, "yyyy-MM-dd")}
                  />
                  <i className="fas fa-calendar-alt absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-purple-500 pointer-events-none"></i>
                </div>
              </div>

              <div className="space-y-2">
                <Label>الوقت</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      type="button"
                      variant={timeSlot === slot ? "default" : "outline"}
                      className="text-center"
                      onClick={() => setTimeSlot(slot)}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="flex flex-row-reverse sm:justify-between">
              <Button onClick={() => setStep(2)} disabled={!date || !timeSlot}>
                التالي
              </Button>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                إلغاء
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 2 && (
          <>
            <DialogHeader className="mt-3">
              <DialogTitle className="text-right">معلومات الحجز</DialogTitle>
              <DialogDescription className="text-right">
                أدخل معلوماتك الشخصية لإتمام الحجز
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="example@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="05xxxxxxxx"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requests">طلبات خاصة (اختياري)</Label>
                <Textarea
                  id="special-requests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="أي طلبات أو ملاحظات خاصة"
                />
              </div>
            </div>

            <DialogFooter className="flex flex-row-reverse sm:justify-between">
              <Button
                onClick={() => setStep(3)}
                disabled={!customerName || !customerEmail || !customerPhone}
              >
                التالي
              </Button>
              <Button variant="outline" onClick={() => setStep(1)}>
                السابق
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 3 && (
          <>
            <DialogHeader className="mt-3">
              <DialogTitle className="text-right">تأكيد الحجز</DialogTitle>
              <DialogDescription className="text-right">
                راجع تفاصيل الحجز قبل التأكيد
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold text-lg">{serviceName}</div>
                  <div className="font-semibold text-lg">{servicePrice} ﷼</div>
                </div>

                <Separator className="my-2" />

                <div className="space-y-2 mt-4 ">
                  <div className="flex justify-between">
                    <div>التاريخ:</div>
                    <div className="flex items-center">
                      <span>
                        {date ? format(date, "yyyy/MM/dd", { locale: ar }) : ""}
                      </span>
                      <CalendarIcon className="h-4 w-4 mr-2" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>الوقت:</div>

                    <div className="flex items-center">
                      <span>{timeSlot}</span>
                      <Clock className="h-4 w-4 mr-2" />
                    </div>
                  </div>

                  {serviceLocation && (
                    <div className="flex justify-between">
                      <div>الموقع:</div>
                      <div>{serviceLocation}</div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <div>نوع الخدمة:</div>
                    <div>{serviceType}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>طريقة الدفع</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center justify-end space-x-2 space-x-reverse">
                    <Label htmlFor="credit-card" className="font-normal mr-1">
                      بطاقة ائتمان
                    </Label>
                    <RadioGroupItem value="credit-card" id="credit-card" />
                  </div>
                  <div className="flex items-center justify-end space-x-2 space-x-reverse">
                    <Label htmlFor="apple-pay" className="font-normal mr-1">
                      Apple Pay
                    </Label>
                    <RadioGroupItem value="apple-pay" id="apple-pay" />
                  </div>
                  <div className="flex items-center justify-end space-x-2 space-x-reverse">
                    <Label htmlFor="cash" className="font-normal mr-1">
                      الدفع عند الحضور
                    </Label>
                    <RadioGroupItem value="cash" id="cash" />
                  </div>
                </RadioGroup>
              </div>
            </div>

            <DialogFooter className="flex flex-row-reverse sm:justify-between">
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    جاري التأكيد...
                  </>
                ) : (
                  "تأكيد الحجز"
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => setStep(2)}
                disabled={isSubmitting}
              >
                السابق
              </Button>
            </DialogFooter>
          </>
        )}

        {step === 4 && (
          <>
            <DialogHeader className="mt-3">
              <DialogTitle className="text-center">
                تم تأكيد الحجز بنجاح!
              </DialogTitle>
            </DialogHeader>

            <div className="py-6 flex flex-col items-center justify-center">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>

              <p className="text-center mb-4">
                تم تأكيد حجزك بنجاح. سيتم إرسال تفاصيل الحجز إلى بريدك
                الإلكتروني.
              </p>

              <div className="rounded-lg border p-4 w-full">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">
                    {date ? format(date, "yyyy/MM/dd", { locale: ar }) : ""}
                  </div>
                  <div>رقم الحجز: #123456</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>{timeSlot}</div>
                  <div>{serviceName}</div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button onClick={() => setIsOpen(false)} className="w-full">
                إغلاق
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
