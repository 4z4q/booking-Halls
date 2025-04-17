"use client";
import { useRef, useState } from "react";
import { SearchFilter } from "../../../components/services-components/search-filter";
import { PackageCard } from "../../../components/services-components/package-card";
import { ServiceCard } from "../../../components/services-components/service-card";
import { ServiceTypeLink } from "../../../components/services-components/service-type-link";
import {
  Diamond,
  Flame,
  Compass,
  Building,
  Music,
  Camera,
  Utensils,
  Car,
  Palette,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const packages = [
    {
      id: 1,
      title: "باقة الرفاهية",
      description: "خدمات شاملة مميزة لتجربة لا تُنسى في مناسبتك",
      price: "5,000 دولار",
      features: [
        "قاعة فاخرة",
        "خدمات طعام ممتازة",
        "تصوير احترافي",
        "فرقة موسيقية حية",
        "مواصلات فاخرة",
      ],
      popular: true,
      image: "/image/pexels-mahmoud-sobhy-2151362009-31635051.jpg",
    },
    {
      id: 2,
      title: "الباقة العادية",
      description: "خدمات عالية الجودة بأسعار معقولة لمناسبتك الخاصة",
      price: "2,500 دولار",
      features: [
        "قاعة جميلة",
        "خدمات طعام جيدة",
        "خدمات التصوير",
        "خدمات دي جي",
        "مواصلات",
      ],
      popular: false,
      image: "/image/pexels-mahmoud-sobhy-2151362009-31635051.jpg",
    },
    {
      id: 3,
      title: "الباقة الاقتصادية",
      description: "خدمات أساسية تجعل مناسبتك مميزة دون تكاليف باهظة",
      price: "1,200 دولار",
      features: [
        "تأجير قاعة",
        "خدمات طعام أساسية",
        "تصوير (4 ساعات)",
        "تأجير نظام صوتي",
        "تركيب ديكور",
      ],
      popular: false,
      image: "/image/pexels-mahmoud-sobhy-2151362009-31635051.jpg",
    },
  ];

  const popularServices = [
    {
      id: 1,
      title: "القاعة الكبرى",
      category: "venue",
      description: "قاعة أنيقة تتسع لـ 300 ضيف",
      rating: 4.9,
      price: "2,000 دولار",
      image:
        "/image/bait-al-nokhada-for-tents-fabric-shades-fDKTYGcM9WM-unsplash.jpg",
    },
    {
      id: 2,
      title: "فرقة مبدعي الألحان",
      category: "artist",
      description: "فرقة موسيقية متخصصة في الجاز والأغاني المعاصرة",
      rating: 4.8,
      price: "1,200 دولار",
      image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    },
    {
      id: 3,
      title: "التقاط اللحظات",
      category: "photographer",
      description: "فريق تصوير حائز على جوائز للمناسبات الخاصة",
      rating: 4.9,
      price: "800 دولار",
      image: "/newOffers/pexels-skylake-17169148.jpg",
    },
    {
      id: 4,
      title: "قاعة عربية",
      category: "venue",
      description: "موقع خارجي جميل بإطلالة خلابة على البحر",
      rating: 4.7,
      price: "1,800 دولار",
      image: "/image/pedro-domingos-j9JLxuhiYbY-unsplash.jpg",
    },
    {
      id: 5,
      title: "دي جي بيتس",
      category: "artist",
      description: "دي جي محترف مع مكتبة موسيقية واسعة",
      rating: 4.6,
      price: "600 دولار",
      image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    },
    {
      id: 6,
      title: "قصص مرئية",
      category: "photographer",
      description: "خدمات تصوير سينمائي وفيديو",
      rating: 4.8,
      price: "1,100 دولار",
      image: "/newOffers/pexels-skylake-17169148.jpg",
    },
  ];

  const serviceTypes = [
    {
      id: 1,
      title: "القاعات",
      icon: <Building className="h-6 w-6" />,
      link: "/services/halls",
    },
    {
      id: 2,
      title: "الفنانين والفرق",
      icon: <Music className="h-6 w-6" />,
      link: "/services/artists",
    },
    {
      id: 3,
      title: "المصورين",
      icon: <Camera className="h-6 w-6" />,
      link: "/services/photography",
    },
    {
      id: 4,
      title: " الملابس",
      icon: <Utensils className="h-6 w-6" />,
      link: "/services/clothing",
    },
    {
      id: 5,
      title: "المواصلات",
      icon: <Car className="h-6 w-6" />,
      link: "/services/transportation",
    },
    {
      id: 6,
      title: "الديكور",
      icon: <Palette className="h-6 w-6" />,
      link: "/services/decor",
    },
  ];

  const filteredServices = popularServices.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || service.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="min-h-screen bg-background">
      {/* قسم البطل مع البحث */}
      <div className="bg-muted w-full">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              ابحث عن الخدمات المثالية
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              اكتشف واحجز أفضل الخدمات المصنفة لمناسبتك الخاصة
            </p>

            {/* مكون البحث والتصفية */}
            <SearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        </div>
      </div>

      {/* قسم الباقات */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">الباقات</h2>
            <Diamond className="h-6 w-6 text-primary mr-2" />
          </div>

          {/* Carousel للجوال فقط */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              dir="ltr"
            >
              <CarouselContent>
                {packages.map((pkg) => (
                  <CarouselItem key={pkg.id} className="basis-[100%]">
                    <PackageCard package={pkg} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden  md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </section>

        {/* قسم الخدمات الشائعة */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">الخدمات الشائعة</h2>
            <Flame className="h-6 w-6 text-primary mr-2" />
          </div>
          {filteredServices.length > 0 ? (
            <>
              <div className="md:hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  dir="ltr"
                >
                  <CarouselContent className="">
                    {filteredServices.map((service) => (
                      <CarouselItem key={service.id} className=" ">
                        <ServiceCard service={service} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="right-[-16px]" />
                  <CarouselPrevious className="left-[-16px]" />
                </Carousel>
              </div>

              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                لم يتم العثور على خدمات تطابق معاييرك.
              </p>
            </div>
          )}
        </section>

        {/* تصفح حسب نوع الخدمة */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">تصفح حسب نوع الخدمة</h2>
            <Compass className="h-6 w-6 text-primary mr-2" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {serviceTypes.map((type) => (
              <ServiceTypeLink key={type.id} serviceType={type} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
