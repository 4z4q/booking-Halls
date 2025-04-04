"use client";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ReviewForm from "@/components/review-form";
import ReviewList from "@/components/review-list";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Hall Details - TechReview",
//   description: "View details, availability, and reviews for event halls.",
// };

// This would typically come from a database
const hallData = {
  id: 1,
  name: "القاعة الكبرى",
  location: "وسط المدينة",
  address: "123 شارع الرئيسي، وسط المدينة، المدينة",
  price: 1200,
  capacity: 500,
  rating: 4.8,
  reviewCount: 124,
  amenities: [
    "واي فاي",
    "خدمة تقديم الطعام",
    "نظام صوتي",
    "منصة عرض",
    "إضاءة",
    "موقف سيارات",
    "أمن",
    "تكييف هواء",
  ],
  image: "/pexels-bertellifotografia-17023018.jpg",
  gallery: [
    "/pexels-bertellifotografia-17023018.jpg",
    "/pexels-bertellifotografia-17023018.jpg",
    "/pexels-bertellifotografia-17023018.jpg",
    "/pexels-bertellifotografia-17023018.jpg",
    // "https://placehold.co/300x400/png",
    // "https://placehold.co/300x400/png",
    // "https://placehold.co/300x400/png",
    // "https://placehold.co/300x400/png",
  ],
  description:
    "قاعة أنيقة مثالية للمناسبات الكبرى مثل الفعاليات الرسمية وحفلات الزفاف. يتميز هذا المكان الواسع بسقوف عالية، وثريات كريستالية، ومدخل فاخر سيبهر ضيوفك. المساحة متعددة الاستخدامات ويمكن تهيئتها لتناسب أنواع مختلفة من الفعاليات، من الحفلات الرسمية إلى المؤتمرات التقنية.",
  availability: [
    { date: "2025-04-15", slots: ["صباح", "مساء"] },
    { date: "2025-04-16", slots: ["صباح", "ظهيرة", "مساء"] },
    { date: "2025-04-17", slots: ["ظهيرة"] },
    { date: "2025-04-18", slots: ["صباح", "مساء"] },
    { date: "2025-04-19", slots: ["طوال اليوم"] },
  ],
  reviews: [
    {
      id: 1,
      user: {
        name: "سارة جونسون",
        image: "https://placehold.co/40x40/png",
        date: "15 مارس 2025",
      },
      rating: 5,
      title: "المكان المثالي لفعالية شركتنا",
      comment:
        "نظمنا حفل شركتنا السنوي هنا وكان رائعًا بكل المقاييس. الطاقم كان محترفًا ومتعاونًا، والمكان نظيف جدًا، وضيوفنا أُعجبوا بالأجواء الراقية. النظام الصوتي كان ممتازًا، وخيارات الإضاءة ساعدت على تغيير الأجواء حسب فقرات الحفل.",
      helpful: 24,
      images: [
        "https://placehold.co/100x150/png",
        "https://placehold.co/100x150/png",
      ],
    },
    {
      id: 2,
      user: {
        name: "مايكل تشن",
        image: "https://placehold.co/40x40/png",
        date: "28 فبراير 2025",
      },
      rating: 4,
      title: "مساحة رائعة مع بعض المشاكل البسيطة في الطعام",
      comment:
        "المكان جميل وواسع جدًا. نظمنا مؤتمرًا تقنيًا هنا وكان إعداد الصوت والصورة ممتازًا. المشكلة الوحيدة كانت في خدمة تقديم الطعام الموصى بها – تأخروا قليلًا في تقديم الغداء. بخلاف ذلك، كل شيء كان رائعًا وسأقوم بالحجز هنا مرة أخرى.",
      helpful: 18,
      images: [],
    },
    {
      id: 3,
      user: {
        name: "إميلي رودريغيز",
        image: "https://placehold.co/40x40/png",
        date: "12 يناير 2025",
      },
      rating: 5,
      title: "قاعة زفاف الأحلام",
      comment:
        "أقمنا حفل زفافنا هنا وكانت تجربة لا تُنسى. المكان جميل بطبيعته ولم نحتج إلى الكثير من التزيين. الطاقم كان متعاونًا للغاية أثناء التحضير وخلال يوم الحفل. ضيوفنا لا يزالون يتحدثون عن جمال القاعة!",
      helpful: 32,
      images: ["https://placehold.co/100x150/png"],
    },
  ],
};

export default function HallDetailsPage() {
  // In a real app, you would fetch the hall data based on the ID
  // const { data: hall } = await getHallById(params.id)
  const hall = hallData;

  const router = useRouter();

  return (
    <div className="min-h-screen " dir="rtl">
      <div className="container py-8">
        {/* زر الرجوع */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="ml-2 h-4 w-4" />
          العودة إلى القاعات
        </button>

        {/* عنوان القاعة */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{hall.name}</h1>
            <div className="flex items-center mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4 ml-1" />
              <span>{hall.address}</span>
            </div>
            <div className="flex items-center mt-4 space-x-reverse space-x-4">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(hall.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="mr-2 font-medium">{hall.rating}</span>
                <span className="mr-1 text-muted-foreground">
                  ({hall.reviewCount} تقييم)
                </span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center">
                <Users className="h-5 w-5 ml-1 text-muted-foreground" />
                <span>حتى {hall.capacity} شخص</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end space-x-reverse space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">مشاركة</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">حفظ</span>
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <Calendar className="ml-2 h-4 w-4" /> احجز الآن
            </Button>
          </div>
        </div>

        {/* الصورة الرئيسية والمعرض */}
        <div className="grid gap-4 mb-8">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
            <Image
              src={hall.image || "/placeholder.svg"}
              alt={hall.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {hall.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${hall.name} - صورة ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* بطاقة السعر والحجز (جوال) */}
        <div className="md:hidden mb-8">
          <div className="rounded-xl border bg-card shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">${hall.price}</span>
                <span className="text-muted-foreground mr-1">/اليوم</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                <span>{hall.rating}</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <Calendar className="ml-2 h-4 w-4" /> التحقق من التوفر
            </Button>
          </div>
        </div>

        {/* التبويبات والمحتوى */}
        <div className="grid gap-8 md:grid-cols-[1fr_300px] ">
          <div>
            <Tabs defaultValue="details" dir="rtl">
              <TabsList className="mb-6">
                <TabsTrigger value="details">تفاصيل</TabsTrigger>
                <TabsTrigger value="amenities">المرافق</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">عن القاعة</h2>
                  <p className="text-muted-foreground">{hall.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">الموقع</h2>
                  <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                    <div className="h-full w-full flex items-center justify-center bg-gray-100 text-muted-foreground">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8431.3579078516!2d44.16660488292191!3d13.977003156278963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1741387238964!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                      ></iframe>{" "}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="amenities">
                <h2 className="text-xl font-semibold mb-4">المرافق والخدمات</h2>
                <div className="grid grid-cols-2 gap-4">
                  {hall.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ml-3">
                        {/* Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">تقييمات الزوار</h2>
                    <div className="flex items-center">
                      <div className="flex ml-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.round(hall.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{hall.rating}</span>
                      <span className="mr-1 text-muted-foreground">
                        ({hall.reviewCount} تقييم)
                      </span>
                    </div>
                  </div>

                  <ReviewForm />
                  <Separator />
                  <ReviewList reviews={hall.reviews} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* الشريط الجانبي للحجز */}
          <div className="hidden md:block">
            <div className="rounded-xl border bg-card shadow-sm p-6 sticky top-24">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">${hall.price}</span>
                <span className="text-muted-foreground mr-1">/اليوم</span>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(hall.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm">{hall.reviewCount} تقييم</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">السعة</span>
                  <span>{hall.capacity} شخص</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">الموقع</span>
                  <span>{hall.location}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">التوفر</span>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50"
                  >
                    متاح
                  </Badge>
                </div>
              </div>

              <Button className="w-full mb-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                <Calendar className="ml-2 h-4 w-4" /> احجز الآن
              </Button>

              <Button variant="outline" className="w-full">
                تواصل مع القاعة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
