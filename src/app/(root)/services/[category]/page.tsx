import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Star,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allowedCategories, services } from "@/constants/services-data";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;

  // Format the category name for display (capitalize first letter)
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${formattedCategory} - خدمات المناسبات`,
    description: `تصفح خدمات ${formattedCategory} لمناسباتك الخاصة`,
  };
}

export default async function HallsPage({
  params,
}: {
  params: { category: string };
}) {
  // Extract the category parameter
  const { category } = await params;

  // Check if this is a valid category
  const isValidCategory = allowedCategories.some(
    (cat) => cat.category === category
  );

  if (!isValidCategory) {
    notFound();
  }

  // Filter services by the category
  const filteredServices = services.filter(
    (service) => service.type === category
  );

  // If no services match the category, show 404
  if (filteredServices.length === 0) {
    notFound();
  }

  // Format the category name for display (capitalize first letter)
  // const formattedCategory =
  //   category.charAt(0).toUpperCase() + category.slice(1);

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

  const arabicCategoryName = getCategoryNameInArabic(category);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4   md:py-8">
        {/* Page Header */}
        <div className="mb-8 text-right">
          <h1 className="text-3xl font-bold tracking-tight">
            {arabicCategoryName}
          </h1>
          <p className="mt-2 text-muted-foreground">
            اختر من بين أفضل خدمات {arabicCategoryName} لمناسبتك الخاصة
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 grid gap-6 md:grid-cols-[280px_1fr]">
          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  تصفية البحث
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className=" max-h-screen overflow-y-auto"
              >
                <SheetHeader className="pb-0 mt-4">
                  <SheetTitle>تصفية القاعات</SheetTitle>
                  <SheetDescription>
                    قم بتحديد خيارات البحث للعثور على القاعة المثالية لمناسبتك.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6 px-4">
                  {/* فلاتر البحث للجوال */}
                  <div className="space-y-4">
                    <h3 className="font-medium">الموقع</h3>
                    <div className="space-y-2">
                      {[
                        "وسط المدينة",
                        "الحي التجاري",
                        "ضفاف النهر",
                        "المنطقة المالية",
                        "مركز المدينة",
                        "مدينة التكنولوجيا",
                      ].map((location) => (
                        <div
                          key={location}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`location-mobile-${location}`} />
                          <Label
                            className="pr-[5px]"
                            htmlFor={`location-mobile-${location}`}
                          >
                            {location}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">نطاق الأسعار</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          0 ريال
                        </span>
                        <span className="text-sm text-muted-foreground">
                          2000 ريال
                        </span>
                      </div>
                      <Slider defaultValue={[0, 2000]} max={2000} step={100} />
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          placeholder="الحد الأدنى"
                          className="h-8"
                        />
                        <span className="text-muted-foreground">-</span>
                        <Input
                          type="number"
                          placeholder="الحد الأعلى"
                          className="h-8"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">سعة القاعة</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر السعة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50">حتى 50 شخصًا</SelectItem>
                        <SelectItem value="100">حتى 100 شخص</SelectItem>
                        <SelectItem value="200">حتى 200 شخص</SelectItem>
                        <SelectItem value="500">حتى 500 شخص</SelectItem>
                        <SelectItem value="1000">أكثر من 500 شخص</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">المرافق</h3>
                    <div className="space-y-2">
                      {[
                        "إنترنت مجاني",
                        "بوفيه مفتوح",
                        "نظام صوتي",
                        "جهاز عرض (بروجيكتور)",
                        "مواقف سيارات",
                        "خدمة الضيافة",
                      ].map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`amenity-mobile-${amenity}`} />
                          <Label
                            className="pr-[5px]"
                            htmlFor={`amenity-mobile-${amenity}`}
                          >
                            {amenity}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">تطبيق الفلاتر</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filters */}
          <div className="hidden space-y-6 md:block">
            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-medium">البحث</h3>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="أبحث..." className="pl-8" />
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-medium">الموقع</h3>
              <div className="space-y-2">
                {[
                  "وسط المدينة",
                  "المنطقة التجارية",
                  "حي النخيل",
                  "الحي المالي",
                  "حي الورود",
                  "المدينة التقنية",
                ].map((location) => (
                  <div key={location} className="flex items-center space-x-2 ">
                    <Checkbox id={`location-${location}`} />
                    <Label
                      className=" pr-[5px]"
                      htmlFor={`location-${location}`}
                    >
                      {location}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-medium">تفضيلات الاسعار</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">$0</span>
                  <span className="text-sm text-muted-foreground">$2000</span>
                </div>
                <Slider defaultValue={[0, 2000]} max={2000} step={100} />
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="من" className="h-8" />
                  <span className="text-muted-foreground">-</span>
                  <Input type="number" placeholder="الئ" className="h-8" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-medium">سعة القاعة</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر السعة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">حتى 50 شخصًا</SelectItem>
                  <SelectItem value="100">حتى 100 شخص</SelectItem>
                  <SelectItem value="200">حتى 200 شخص</SelectItem>
                  <SelectItem value="500">حتى 500 شخص</SelectItem>
                  <SelectItem value="1000">أكثر من 500 شخص</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-4 font-medium">المرافق</h3>
              <div className="space-y-2">
                {[
                  "إنترنت مجاني",
                  "بوفيه مفتوح",
                  "نظام صوتي",
                  "جهاز عرض (بروجيكتور)",
                  "مواقف سيارات",
                  "خدمة الضيافة",
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox id={`amenity-${amenity}`} />
                    <Label className=" pr-[5px]" htmlFor={`amenity-${amenity}`}>
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">تطبيق الفلاتر</Button>
          </div>

          {/* Halls List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {arabicCategoryName} المتوفر
                </h2>
                <p className="text-sm text-muted-foreground">
                  عرض {filteredServices.length} قاعة
                </p>
              </div>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="ترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">الموصى بها</SelectItem>
                  <SelectItem value="price-low">
                    السعر: من الأقل إلى الأعلى
                  </SelectItem>
                  <SelectItem value="price-high">
                    السعر: من الأعلى إلى الأقل
                  </SelectItem>
                  <SelectItem value="capacity">السعة</SelectItem>
                  <SelectItem value="rating">التقييم</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {filteredServices.map((hall) => (
                <Link href={`/services/${category}/${hall.id}`} key={hall.id}>
                  <Card key={hall.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={hall.image || "/placeholder.svg"}
                        alt={hall.name}
                        width={500}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{hall.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            {category.toLowerCase() === "halls" && (
                              <>
                                <MapPin className="mr-1 h-3 w-3" />{" "}
                                {hall.location}
                              </>
                            )}
                          </CardDescription>
                        </div>
                        <div className="flex items-center rounded-md bg-primary/10 px-2 py-1">
                          <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                          <span className="text-xs font-medium">
                            {hall.rating}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {hall.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold">${hall.price}</span>
                            <span className="text-xs text-muted-foreground">
                              /في اليوم
                            </span>
                          </div>
                          {category.toLowerCase() === "halls" && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-muted-foreground" />

                              <span className="ml-1 text-sm">
                                {hall.capacity}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">رؤية المزيد</Button>
                      <Button>
                        <Calendar className="mr-2 h-4 w-4" /> أحجز الان
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 py-4">
              <Button variant="outline" size="icon" disabled className="ml-2">
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
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8" disabled>
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                4
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                5
              </Button>
              <Button variant="outline" size="icon">
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
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
