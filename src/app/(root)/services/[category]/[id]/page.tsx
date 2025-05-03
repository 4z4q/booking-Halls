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
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/constants/services-data";

import { BookingModal } from "@/components/booking-components/booking-model";
import { CarouselSize } from "@/components/image-carousel";
import { getCategoryNameInArabic } from "@/utils/utils";

export async function generateMetadata({
  params,
}: {
  params: { category: string; id: string };
}) {
  // Extract both parameters
  const { category, id } = await params;

  // Find the specific service by ID and category
  const service = servicesData.find(
    (service) => service.id === Number(id) && service.type === category
  );

  // If no service matches both the category and ID, show 404
  if (!service) {
    notFound();
  }

  // Get the Arabic category name

  const arabicCategoryName = getCategoryNameInArabic(category);

  return {
    title: `${service.name} | ${arabicCategoryName} - خدمات المناسبات`,
    description: `تعرف على تفاصيل خدمة ${service.name} ضمن تصنيف ${arabicCategoryName} لمناسبتك الخاصة.`,
  };
}
export default async function filterFeaturedDetailsPage({
  params,
}: {
  params: { id: string; category: string };
}) {
  // Extract both parameters
  const { category, id } = await params;

  // Find the specific service by ID and category
  const service = servicesData.find(
    (service) => service.id === Number(id) && service.type === category
  );

  // If no service matches both the category and ID, show 404
  if (!service) {
    notFound();
  }

  // Get the Arabic category name

  const arabicCategoryName = getCategoryNameInArabic(category);

  return (
    <div className="min-h-screen" dir="rtl">
      <div className="container py-6 md:py-8">
        {/* Back Button */}

        <Link
          href={`/services/${category}`}
          className="inline-flex items-center mb-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="ml-2 h-4 w-4" />
          {arabicCategoryName} العودة إلى 
        </Link>

        {/* عنوان القاعة */}
        <div className="flex flex-col justify-between gap-6 mb-8 md:flex-row md:items-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              {service.name}
            </h1>
            <div className="flex items-center mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4 ml-1" />
              <span>{service.address}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(service.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="mr-1 text-muted-foreground">
                  ({service.reviewCount} تقييم)
                </span>
              </div>

              {category === "halls" && service?.capacity && (
                <>
                  <Separator orientation="vertical" className="h-6" />
                  <div className="flex items-center">
                    <span>حتى {service.capacity} شخص</span>
                    <Users className="h-5 w-5 mr-1 text-muted-foreground" />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-2 flex-row-reverse justify-start">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">مشاركة</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">حفظ</span>
            </Button>
            <BookingModal
              serviceName={service.name}
              servicePrice={service.price}
              serviceLocation={service.location}
              serviceType={arabicCategoryName}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                <Calendar className="mr-2 h-4 w-4" /> احجز الآن
              </Button>
            </BookingModal>
          </div>
        </div>

        {/* الصورة الرئيسية والمعرض */}
        <CarouselSize gallery={service?.gallery as string[]} />

        {/* بطاقة السعر والحجز (جوال) */}
        <div className="mb-8 md:hidden">
          <div className="p-4 border rounded-xl bg-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">${service.price}</span>
                <span className="mr-1 text-muted-foreground">/اليوم</span>
              </div>
              <div className="flex items-center">
                <Star className="ml-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>{service.rating}</span>
              </div>
            </div>
            <Button className="w-full  bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <Calendar className="ml-2 h-4 w-4" /> التحقق من التوفر
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div>
            <Tabs defaultValue="details" dir="rtl">
              <TabsList className="mb-6">
                <TabsTrigger value="details">تفاصيل</TabsTrigger>
                <TabsTrigger value="amenities">المرافق</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                    عن {service.name}
                  </h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-semibold">الموقع</h2>
                  <div className="overflow-hidden rounded-lg aspect-[16/9] bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8431.3579078516!2d44.16660488292191!3d13.977003156278963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1741387238964!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      className="border-0"
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="amenities">
                <h2 className="mb-4 text-xl font-semibold">المرافق والخدمات</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.amenities?.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 ml-3 rounded-full bg-primary/10">
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
                <div className="space-y-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-xl font-semibold">تقييمات الزوار</h2>
                    <div className="flex flex-col ">
                      <div className="flex ml-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.round(service.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="mr-1 text-muted-foreground">
                        ({service.reviewCount} تقييم)
                      </span>
                    </div>
                  </div>

                  <ReviewForm />
                  <Separator />
                  <ReviewList reviews={service.reviews} />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* الشريط الجانبي للحجز */}
          <div className="hidden md:block">
            <div className="sticky p-6 border rounded-xl top-24 bg-card">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">${service.price}</span>
                <span className="mr-1 text-muted-foreground">/اليوم</span>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(service.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm">{service.reviewCount} تقييم</span>
              </div>

              <div className="mb-6 space-y-3">
                {category === "halls" && service?.capacity && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">السعة</span>
                    <span>{service.capacity} شخص</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">الموقع</span>
                  <span>{service.location}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">التوفر</span>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    متاح
                  </Badge>
                </div>
              </div>

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
