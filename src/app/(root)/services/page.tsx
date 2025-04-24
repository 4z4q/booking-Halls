"use client";
import { useMemo, useState } from "react";
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
  Palette,
  Shirt,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { services } from "@/constants/services-data";

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
      icon: <Shirt className="h-6 w-6" />,
      link: "/services/transportation",
    },
    {
      id: 6,
      title: "الديكور",
      icon: <Palette className="h-6 w-6" />,
      link: "/services/decor",
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || service.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const plugin = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: true }),
    []
  );

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
              plugins={[plugin]}
              onMouseEnter={plugin.stop}
              onMouseLeave={plugin.reset}
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
      </main>

      {/* قسم الخدمات الشائعة */}
      <div className="w-full bg-muted py-12">
        <section className="container mx-auto px-4">
          {/* العنوان والأيقونة */}
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold">الخدمات الشائعة</h2>
            <Flame className="h-6 w-6 text-primary" />
          </div>

          {filteredServices.length > 0 ? (
            <div className="relative">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
                plugins={[plugin]}
                onMouseEnter={plugin.stop}
                onMouseLeave={plugin.reset}
                dir="ltr"
              >
                <CarouselContent className="flex px-0 sm:px-2">
                  {filteredServices.map((service) => (
                    <CarouselItem
                      key={service.id}
                      className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <ServiceCard
                        service={{ ...service, category: service.type }}
                        id={service.id}
                        category={service.type}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                لم يتم العثور على خدمات تطابق معاييرك.
              </p>
            </div>
          )}
        </section>
      </div>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
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
