"use client";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allowedCategories } from "@/constants/services-data";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useMemo } from "react";
export default function Home() {
  // Get the Arabic category name
  const getCategoryNameInArabic = (category: string) => {
    switch (category) {
      case "halls":
        return "القاعات";
      case "decor":
        return "الديكور";
      case "artists":
        return "الفنانين";
      case "clothing":
        return "الأزياء";
      case "photography":
        return "التصوير";
      default:
        return category;
    }
  };

  // Get the category description
  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "halls":
        return "قاعات مناسبات فاخرة لجميع المناسبات";
      case "decor":
        return "خدمات تنسيق وديكور للمناسبات والحفلات";
      case "artists":
        return "فنانين وفرق موسيقية لإحياء المناسبات";
      case "clothing":
        return "أزياء وملابس للمناسبات الخاصة";
      case "photography":
        return "خدمات تصوير احترافية لتوثيق لحظاتك";
      default:
        return "";
    }
  };

  // Get the category image
  const getCategoryImage = (category: string) => {
    switch (category) {
      case "halls":
        return "/pexels-bertellifotografia-17023018.jpg";
      case "decor":
        return "/newOffers/pexels-leeloothefirst-5038739.jpg";
      case "artists":
        return "/pexels-suvan-chowdhury-37305-144429.jpg";
      case "clothing":
        return "/pexels-aftabmirza-25293843.jpg";
      case "photography":
        return "/newOffers/pexels-skylake-17169148.jpg";
      default:
        return "/placeholder.svg";
    }
  };

  const plugin = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: true }),
    []
  );

  return (
    <div className="min-h-screen bg-background container ">
      <main className="py-[16px]">
        {/* Hero Section */}
        <Carousel
          plugins={[plugin]}
          className="mb-12"
          onMouseEnter={plugin.stop}
          onMouseLeave={plugin.reset}
          dir="ltr"
        >
          <CarouselContent>
            {[
              {
                image: "/pexels-yusuf-rendecioglu-art-333084496-17871049.jpg",
                tag: "ماذا تنتظر !",
                title: "حقق حلم زفافك بكل سهولة!",
                description:
                  "احجز قاعة زفافك، اختر فنانك المفضل، واستعد ليومك المميز بكل التفاصيل.",
              },
              {
                image: "/pexels-bertellifotografia-17023018.jpg",
                tag: "لحجز القاعات",
                title: "اختر القاعة المثالية لحفل زفاف لا يُنسى",
                description:
                  "أماكن مذهلة، خدمات متكاملة، حفل يليق بك وبمن تحب.",
              },
              {
                image: "/pexels-suvan-chowdhury-37305-144429.jpg",
                tag: "لحجز الفنانين",
                title: "أضف لمسة فنية إلى حفلك مع أفضل الفنانين",
                description: "فنانين محترفين، أجواء ساحرة، حفلة لا تُنسى.",
              },
              {
                image: "/pexels-aftabmirza-25293843.jpg",
                tag: "لحجز ملابس العرس",
                title: "إطلالة الأحلام تبدأ من هنا",
                description: "اكتشف أرقى فساتين وأطقم الزفاف التي تليق بك.",
              },
              {
                image: "/pexels-kawerodriguess-16313529.jpg",
                tag: "لحجز مصور العرس",
                title: "توثيق لحظاتك بأدق التفاصيل",
                description: "مصورون محترفون يصنعون من كل لحظة ذكرى خالدة.",
              },
            ].map((item, index) => (
              <CarouselItem
                key={index}
                className="relative overflow-hidden rounded-[6px] w-[90%] sm:w-[320px] md:w-[400px] lg:w-[500px] h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] mx-auto"
                dir="rtl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <span className="mb-1 inline-block rounded bg-primary px-2 py-1 text-xs font-medium">
                    {item.tag}
                  </span>
                  <h2 className="mb-1 text-base sm:text-lg md:text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-200">
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Trending Reviews Section */}
        <section className="min-h-screen  mb-12" id="trending-reviews">
          <div className="px-0">
            {/* Page Header */}
            <div className="mb-12 text-center group">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                خدمات المناسبات
              </h1>
              <div className="relative inline-block">
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto pb-3">
                  اختر الخدمة، واحجز بكل سهولة وراحة
                </p>
                <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-20 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold"> التصنيفات</h2>
              <Link href={"/services"}>
                <Button variant="outline" className="gap-1">
                  جميع التصنيفات
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Categories Grid */}
            <div className="grid gap-8 sm:grid-cols-2  lg:grid-cols-3">
              {allowedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services/${cat.category}`}
                  className="block"
                >
                  <div className="group overflow-hidden rounded-[6px] border bg-card shadow-sm transition-all hover:shadow-md h-full">
                    <div className="relative aspect-[1] sm:aspect-[3/2]  overflow-hidden">
                      <Image
                        src={
                          getCategoryImage(cat.category) || "/placeholder.svg"
                        }
                        alt={getCategoryNameInArabic(cat.category)}
                        fill={true}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 p-6 text-white text-right w-full">
                        <h3 className="text-2xl font-bold mb-2">
                          {getCategoryNameInArabic(cat.category)}
                        </h3>
                        <p className="text-gray-200">
                          {getCategoryDescription(cat.category)}
                        </p>
                        <div className="mt-4">
                          <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm">
                            استعرض الخدمات
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
                              className="ml-1"
                            >
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's New Today Section */}
        <section className="mb-12">
          <div className="mb-12 text-center group">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              عروض اليوم حصرياً لك{" "}
            </h1>
            <div className="relative inline-block">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto pb-3">
                استفد من الخصومات المحدودة قبل انتهائها{" "}
              </p>
              <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-20 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">عروض اليوم</h2>
            <Button variant="outline" className="gap-1">
              جميع العروض
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="group overflow-hidden rounded-[6px] border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/pexels-solliefoto-313702.jpg"
                    alt="عرض فستان الزفاف"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
                      احجزي الآن
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    تألقي كالأميرة في يومك المميز!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    اكتشفي أرقى تصاميم فساتين الزفاف التي تجمع بين الأناقة
                    والفخامة، لتعيشي حلمك بكل تفاصيله. احجزي الآن لتجدي فستان
                    الأحلام!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:col-span-2">
              {[
                {
                  title: "قاعة زفاف فاخرة بديكور ملكي",
                  category: "حجوزات القاعات",
                  time: "قبل 3 ساعات",
                  img: "/newOffers/pexels-istenci-30815990.jpg",
                },
                {
                  title: "حجز الفنان المفضل لديك لإحياء حفلك",
                  category: "حجوزات الفنانين",
                  time: "قبل 5 ساعات",
                  img: "/pexels-suvan-chowdhury-37305-144429.jpg",
                },
                {
                  title: "أفضل تنسيقات الزهور لديكور زفافك",
                  category: "تنسيق الزهور",
                  time: "قبل 6 ساعات",
                  img: "/newOffers/pexels-leeloothefirst-5038739.jpg",
                },
                {
                  title: "توثيق لحظاتك بأفضل خدمات التصوير",
                  category: "التصوير الفوتوغرافي",
                  time: "قبل 8 ساعات",
                  img: "/newOffers/pexels-adeniuso-gomes-2148096772-30679836.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-lg border bg-card p-3 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-medium text-primary">
                      {item.category}
                    </span>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
