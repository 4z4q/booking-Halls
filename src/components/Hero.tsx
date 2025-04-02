import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background ">
      <main>
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-xl">
              <Image
                src={"/pexels-yusuf-rendecioglu-art-333084496-17871049.jpg"} //""https://placehold.co/600x400/png"}
                alt="Featured Article"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <span className="mb-2 inline-block rounded bg-purple-600 px-2 py-1 text-xs font-medium">
                  ماذا تنتظر !
                </span>
                <h2 className="mb-2 text-2xl font-bold">
                  حقق حلم زفافك بكل سهولة!
                </h2>
                <p className="text-sm text-gray-200">
                  احجز قاعة زفافك، اختر فنانك المفضل، واستعد ليومك المميز بكل
                  التفاصيل في مكان واحد.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={"/pexels-bertellifotografia-17023018.jpg"} //""https://placehold.co/300x400/png"}
                alt="Tech Article"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <span className="mb-1 inline-block rounded bg-blue-600 px-2 py-1 text-xs font-medium">
                  لحجز القاعات
                </span>
                <h3 className="text-sm font-bold">
                  اختر القاعة المثالية لحفل زفاف لا يُنسى
                </h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={"/pexels-suvan-chowdhury-37305-144429.jpg"} //""https://placehold.co/300x400/png"}
                alt="Tech Article"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <span className="mb-1 inline-block rounded bg-blue-600 px-2 py-1 text-xs font-medium">
                  لحجز الفنانين
                </span>
                <h3 className="text-sm font-bold">
                  أضف لمسة فنية إلى حفلك مع أفضل الفنانين
                </h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={"/pexels-aftabmirza-25293843.jpg"} //""https://placehold.co/300x400/png"}
                alt="Tech Article"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <span className="mb-1 inline-block rounded bg-blue-600 px-2 py-1 text-xs font-medium">
                  لحجز ملابس العرس
                </span>
                <h3 className="text-sm font-bold">
                  إطلالة الأحلام تبدأ من هنا – اكتشف أرقى فساتين وأطقم الزفاف
                </h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={"/pexels-kawerodriguess-16313529.jpg"} //"https://placehold.co/300x400/png"
                alt="Tech Article"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <span className="mb-1 inline-block rounded bg-blue-600 px-2 py-1 text-xs font-medium">
                  لحجز مصور العرس
                </span>
                <h3 className="text-sm font-bold">
                  اكتشف جميع التصاميم المميزة للحفلات الزفاف
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Reviews Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">أقسام الخدمات</h2>
            <Button variant="outline" className="gap-1">
              جميع الخدمات
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                title: "قاعات المناسبات",
                category: "قاعات",
                href: "/fetuers/halls",
                image: "/pexels-bertellifotografia-17023018.jpg",
              },
              {
                title: "فنانين الزفاف",
                category: "فنانين",
                href: "/fetuers/artists",
                image: "/pexels-suvan-chowdhury-37305-144429.jpg",
              },
              {
                title: "مصور العرس",
                category: "مصور",
                href: "/fetuers/photography",
                image: "/pexels-kawerodriguess-16313529.jpg",
              },
              {
                title: "ملابس العرس",
                category: "ملابس",
                href: "/fetuers/clothing",
                image: "/pexels-aftabmirza-25293843.jpg",
              },
            ].map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-purple-600 px-2 py-1 text-xs font-medium text-white">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    لا تضيع وقتك في البحث، نحن نجمع لك أفضل العروض في مكان واحد
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* What's New Today Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">عروض اليوم</h2>
            <Button variant="outline" className="gap-1">
              جميع العروض
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/pexels-solliefoto-313702.jpg"
                    alt="عرض فستان الزفاف"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
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
                    <span className="text-xs font-medium text-purple-600">
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

        {/* Tech & Gadgets Section */}
        {/* <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Tech & Gadgets</h2>
            <Button variant="outline" className="gap-1">
              View All
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Tabs defaultValue="tech" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="tech">Tech</TabsTrigger>
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="gadgets">Gadgets</TabsTrigger>
            </TabsList>
            <TabsContent value="tech" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    title: "The Future of Quantum Computing",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "5G Technology and Its Impact",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Blockchain Beyond Cryptocurrency",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "AR/VR Development in 2025",
                    image: "https://placehold.co/200x300/png",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Exploring the cutting-edge technologies shaping our
                        future
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="electronics" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    title: "OLED vs Mini-LED Displays",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Next-Gen Gaming Consoles",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Wireless Charging Evolution",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Smart Wearables in Healthcare",
                    image: "https://placehold.co/200x300/png",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        The latest in electronic innovations and consumer
                        technology
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gadgets" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  {
                    title: "Smart Home Gadgets Worth Buying",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Fitness Trackers Comparison",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Portable Power Stations Review",
                    image: "https://placehold.co/200x300/png",
                  },
                  {
                    title: "Innovative Kitchen Gadgets",
                    image: "https://placehold.co/200x300/png",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Cool gadgets that make everyday life easier and more
                        enjoyable
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section> */}
      </main>
    </div>
  );
}
