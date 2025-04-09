import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "اتصل بنا - TechReview",
  description: "تواصل مع فريق TechReview للاستفسارات والدعم",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-screen relative left-1/2 right-1/2 mx-[-50vw] bg-gradient-to-b from-purple-600 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative py-16 md:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            تواصل معنا
          </h1>
          <p className="text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتك وتقديم الدعم اللازم لك
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className=" py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-xl border p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-right">
                معلومات الاتصال
              </h2>

              <div className="space-y-6">
                <div className="flex items-center md:justify-between justify-start  ">
                  <div className="text-right">
                    <p className="font-medium">رقم الهاتف</p>
                    <p className="text-muted-foreground " dir="ltr">
                      +967 780 842 038
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-purple-100  items-center md:flex hidden  justify-center mr-4">
                    <Phone className="h-5 w-5  text-purple-600" />
                  </div>
                </div>

                <div className="flex items-center  md:justify-between justify-start ">
                  <div className="text-right">
                    <p className="font-medium">البريد الإلكتروني</p>
                    <p className="text-muted-foreground ">
                      info@techreview.com
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-blue-100  items-center md:flex hidden justify-center m4-4">
                    <Mail className="h-5 w-5  text-blue-600" />
                  </div>
                </div>

                <div className="flex items-center md:justify-between justify-start ">
                  <div className="text-right">
                    <p className="font-medium">العنوان</p>
                    <p className="text-muted-foreground">
                      شارع الملك فهد، الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                  <div className="h-10 min-w-10 rounded-full bg-green-100  items-center md:flex hidden  justify-center m4-4">
                    <MapPin className="h-5 w-5  text-green-600" />
                  </div>
                </div>

                <div className="flex items-center md:justify-between justify-start ">
                  <div className="text-right">
                    <p className="font-medium">ساعات العمل</p>
                    <p className="text-muted-foreground">
                      الأحد - الخميس: 9 صباحًا - 5 مساءً
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-amber-100  items-center md:flex hidden justify-center m4-4">
                    <Clock className="h-5 w-5  text-amber-600" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="aspect-[4/3] w-full rounded-lg bg-muted overflow-hidden">
                  {/* This would be a map in a real application */}
                  <div className="h-full w-full flex items-center justify-center bg-gray-100 text-muted-foreground">
                    خريطة الموقع
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Tabs */}
          <div className="md:col-span-2">
            <Tabs defaultValue="contact" className="w-full" dir="rtl">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="contact">اتصل بنا</TabsTrigger>
                <TabsTrigger value="support">الدعم والمساعدة</TabsTrigger>
              </TabsList>

              <TabsContent value="contact" className="space-y-8">
                <div className="bg-card rounded-xl border p-4 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-right">
                    أرسل لنا رسالة
                  </h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-right block">
                          الاسم
                        </Label>
                        <Input
                          id="name"
                          placeholder="أدخل اسمك"
                          className="text-right"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-right block">
                          البريد الإلكتروني
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="أدخل بريدك الإلكتروني"
                          className="text-right"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-right block">
                        الموضوع
                      </Label>
                      <Input
                        id="subject"
                        placeholder="أدخل موضوع الرسالة"
                        className="text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-right block">
                        الرسالة
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="اكتب رسالتك هنا..."
                        className="min-h-[150px] text-right"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      >
                        إرسال الرسالة
                      </Button>
                    </div>
                  </form>
                </div>

 
              </TabsContent>

              <TabsContent value="support" className="space-y-8">
                <div className="bg-card rounded-xl border p-8 shadow-sm">
                  <div className="flex items-center justify-start mb-6">
                    <h2 className="text-2xl font-bold">الأسئلة الشائعة</h2>
                    <HelpCircle className="h-6 w-6 mr-2 text-purple-600" />
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="text-right">
                      <AccordionTrigger>كيف يمكنني حجز خدمة؟</AccordionTrigger>
                      <AccordionContent>
                        يمكنك حجز خدمة من خلال تصفح الخدمات المتاحة، واختيار
                        الخدمة المناسبة، ثم النقر على زر احجز الآن. ستحتاج إلى
                        إنشاء حساب أو تسجيل الدخول إذا كان لديك حساب بالفعل، ثم
                        اتباع خطوات الحجز.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="text-right">
                      <AccordionTrigger>ما هي سياسة الإلغاء؟</AccordionTrigger>
                      <AccordionContent>
                        يمكنك إلغاء الحجز قبل 48 ساعة من موعد المناسبة واسترداد
                        كامل المبلغ. أما الإلغاء قبل 24 ساعة فيتم استرداد 50% من
                        المبلغ. لا يمكن استرداد المبلغ في حالة الإلغاء قبل أقل
                        من 24 ساعة من موعد المناسبة.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="text-right">
                      <AccordionTrigger>
                        كيف يمكنني التواصل مع مزود الخدمة؟
                      </AccordionTrigger>
                      <AccordionContent>
                        بعد حجز الخدمة، ستتمكن من التواصل مع مزود الخدمة من خلال
                        نظام المراسلة الداخلي في المنصة. يمكنك أيضًا الاطلاع على
                        معلومات الاتصال الخاصة بمزود الخدمة في صفحة تفاصيل
                        الحجز.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="text-right">
                      <AccordionTrigger>
                        هل يمكنني تعديل الحجز بعد تأكيده؟
                      </AccordionTrigger>
                      <AccordionContent>
                        نعم، يمكنك تعديل الحجز قبل 72 ساعة من موعد المناسبة.
                        للقيام بذلك، يرجى الانتقال إلى صفحة حجوزاتي والنقر على
                        زر تعديل الحجز. يرجى ملاحظة أن بعض التعديلات قد تخضع
                        لرسوم إضافية حسب سياسة مزود الخدمة.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="text-right">
                      <AccordionTrigger>
                        كيف يمكنني تقييم الخدمة؟
                      </AccordionTrigger>
                      <AccordionContent>
                        بعد انتهاء المناسبة، ستتلقى إشعارًا يدعوك لتقييم الخدمة.
                        يمكنك أيضًا الانتقال إلى صفحة حجوزاتي السابقة والنقر على
                        زر تقييم بجوار الخدمة التي ترغب في تقييمها.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="bg-card rounded-xl border p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-right">
                    طلب دعم فني
                  </h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="support-name"
                          className="text-right block"
                        >
                          الاسم
                        </Label>
                        <Input
                          id="support-name"
                          placeholder="أدخل اسمك"
                          className="text-right"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="support-email"
                          className="text-right block"
                        >
                          البريد الإلكتروني
                        </Label>
                        <Input
                          id="support-email"
                          type="email"
                          placeholder="أدخل بريدك الإلكتروني"
                          className="text-right"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="support-type"
                        className="text-right block"
                      >
                        نوع المشكلة
                      </Label>
                      <select
                        id="support-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-right"
                      >
                        <option value="">اختر نوع المشكلة</option>
                        <option value="booking">مشكلة في الحجز</option>
                        <option value="payment">مشكلة في الدفع</option>
                        <option value="account">مشكلة في الحساب</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="support-message"
                        className="text-right block"
                      >
                        وصف المشكلة
                      </Label>
                      <Textarea
                        id="support-message"
                        placeholder="اشرح المشكلة التي تواجهها بالتفصيل..."
                        className="min-h-[150px] text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="support-file"
                        className="text-right block"
                      >
                        إرفاق ملف (اختياري)
                      </Label>
                      <Input
                        id="support-file"
                        type="file"
                        className="text-right"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      >
                        إرسال طلب الدعم
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="bg-muted rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4 text-right">
                    طرق أخرى للتواصل
                  </h3>

                  <div className="space-y-4 text-right">
                    <p className="text-muted-foreground">
                      يمكنك أيضًا التواصل معنا عبر وسائل التواصل الاجتماعي أو من
                      خلال خدمة الدردشة المباشرة المتاحة من الساعة 9 صباحًا حتى
                      9 مساءً.
                    </p>

                    <div className="flex justify-end space-x-4">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-facebook"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-instagram"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
