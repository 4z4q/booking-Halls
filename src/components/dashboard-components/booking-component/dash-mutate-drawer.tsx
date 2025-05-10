"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema, Payment } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { ar } from "date-fns/locale";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { statuses } from "./data";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow?: Payment;
}

export function DashBoardMutateDrawer({
  open,
  onOpenChange,
  currentRow,
}: Props) {
  const isUpdate = !!currentRow;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: currentRow ?? {
      customer: "",
      service: "",
      eventDate: new Date(),
      id: "",
      amount: 0,
      paymentMethod: "",
      status: "pending",
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    onOpenChange(false);
    form.reset();
  };

  const handleDialogToggle = (v: boolean) => {
    onOpenChange(v);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogToggle}>
      <DialogContent className="flex flex-col max-w-[350px] md:min-w-[700px]">
        <DialogHeader className="mt-4 text-right">
          <DialogTitle className=" text-right">
            {isUpdate ? "تعديل الدفع" : "إضافة دفعة جديدة"}
          </DialogTitle>
          <DialogDescription className=" text-right">
            {isUpdate
              ? "قم بتعديل بيانات الدفعة."
              : "أدخل تفاصيل الدفعة الجديدة."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            id="payment-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-6 px-4 overflow-auto"
          >
            {/* القسم الأول: بيانات العميل */}
            <div className="flex-1 space-y-5">
              <FormField
                control={form.control}
                name="customer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم العميل</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isUpdate}
                        placeholder="أدخل اسم العميل"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isUpdate}
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الخدمة</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isUpdate}
                        placeholder="اسم الخدمة"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>تاريخ المناسبة</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            disabled={isUpdate}
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-right font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="ml-2 h-4 w-4" />
                            {field.value
                              ? format(field.value, "PPP", { locale: ar })
                              : "اختر التاريخ"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* القسم الثاني: تفاصيل الدفع */}
            <div className="flex-1 space-y-5">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المبلغ</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isUpdate}
                        type="number"
                        placeholder="0.00"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>طريقة الدفع</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isUpdate}
                        placeholder="مثلاً: Stripe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>حالة الدفع</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="حالة الدفع" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>

        <DialogFooter className="gap-2 mt-4">
          <DialogClose asChild>
            <Button variant="outline">إغلاق</Button>
          </DialogClose>
          <Button
            form="payment-form"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "جارٍ الحفظ..." : "حفظ"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
