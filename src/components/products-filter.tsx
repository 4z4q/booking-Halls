"use client";
import Image from "next/image";
import Link from "next/link";
import { parseAsInteger, useQueryState } from "nuqs";
import {
  MapPin,
  DollarSign,
  Users,
  Star,
  Calendar,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectFilter } from "@/components/filter-components/SelectFilter";
import { CheckboxFilter } from "@/components/filter-components/CheckboxFilter";
import { PriceRangeFilter } from "@/components/filter-components/PriceRangeFilter";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CAPACITIES, LOCATIONS } from "@/constants";
import { BookingModal } from "./booking-model";

interface FilterServices {
  id: number;
  name: string;
  location: string;
  price: number;
  type: string;
  image: string;
  description: string;
  capacity?: number;
  rating?: number;
}

interface Props {
  filteredServices: FilterServices[];
  category: string;
  arabicCategoryName: string;
}

function filterServices(
  services: FilterServices[],
  searchValue: string,
  location: string,
  price: number,
  capacity: string
): FilterServices[] {
  return services.filter((item) => {
    const matchName = searchValue
      ? item.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    const matchLocation = location
      ? item.location.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchPrice = price ? item.price <= price : true;

    const matchesCapacity = capacity
      ? (item.capacity ?? 0) <= parseInt(capacity)
      : true;

    return matchName && matchLocation && matchPrice && matchesCapacity;
  });
}

export const ProductsFilter = ({
  filteredServices,
  category,
  arabicCategoryName,
}: Props) => {
  const [searchValue, setSearchValue] = useQueryState("name", {
    defaultValue: "",
  });

  const [location, setLocation] = useQueryState("location", {
    defaultValue: "",
  });

  const [price, setPrice] = useQueryState(
    "price",
    parseAsInteger.withDefault(0)
  );

  const [capacity, setCapacity] = useQueryState("capacity", {
    defaultValue: "",
  });

  const handleResetFilters = () => {
    setSearchValue("");
    setLocation("");
    setPrice(0);
    setCapacity("");
  };

  const [sortBy, setSortBy] = useQueryState("sortBy", {
    defaultValue: "recommended",
  });

  const filtered = filterServices(
    filteredServices,
    searchValue,
    location,
    price,
    capacity
  );

  function sortServices(
    services: FilterServices[],
    sortBy: string
  ): FilterServices[] {
    const sorted = [...services]; // ما نعدل الأصل مباشرة
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "capacity":
        return sorted.sort((a, b) => (b.capacity ?? 0) - (a.capacity ?? 0));
      case "rating":
        return sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      default:
        return sorted;
    }
  }

  const results = sortServices(filtered, sortBy);

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-[280px_1fr]">
      {/* Mobile Filters */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              تصفية البحث
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="max-h-screen overflow-y-auto">
            <SheetHeader className="mt-4 pb-0">
              <SheetTitle>تصفية {arabicCategoryName}</SheetTitle>
              <SheetDescription>
                قم بتحديد خيارات البحث للعثور على الخيار المثالي.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 px-4">
              {/* Checkbox Filter */}
              <CheckboxFilter
                title="الموقع"
                options={LOCATIONS}
                prefix="mobile-location"
                onChange={setLocation}
                value={location}
              />
              {/* Price Filter */}
              <PriceRangeFilter price={price} setPrice={setPrice} />

              {/* Select Size Filter */}

              {category === "halls" && (
                <SelectFilter
                  title="سعة القاعة"
                  options={CAPACITIES}
                  setCapacity={setCapacity}
                />
              )}
              <Button className="w-full mb-6">تطبيق الفلاتر</Button>
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
            <Input
              placeholder="أبحث..."
              className="pl-8"
              onChange={(e) => setSearchValue(e.target.value || "")}
              value={searchValue || ""}
            />
          </div>
        </div>
        <CheckboxFilter
          title="الموقع"
          options={LOCATIONS}
          prefix="desktop-location"
          value={location}
          onChange={setLocation}
        />

        <PriceRangeFilter price={price} setPrice={setPrice} />

        {category === "halls" && (
          <SelectFilter
            title="سعة القاعة"
            options={CAPACITIES}
            setCapacity={setCapacity}
          />
        )}

        <Button className="w-full">تطبيق الفلاتر</Button>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center text-muted-foreground py-10 space-y-4">
          <p className="text-lg font-medium">😕 لم يتم العثور على نتائج</p>
          <p className="text-sm">
            جرب تعديل خيارات البحث أو إعادة تعيين الفلاتر
          </p>
          <Button variant="outline" onClick={handleResetFilters}>
            إعادة تعيين الفلاتر
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold">
                {arabicCategoryName} المتوفر
              </h2>
              <p className="text-sm text-muted-foreground">
                عرض {results.length} خدمة
              </p>
            </div>
            <Select
              defaultValue="recommended"
              dir="rtl"
              onValueChange={setSortBy}
              value={sortBy}
            >
              <SelectTrigger className="w-[200px]">
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
                {/* Remove capacity filter for all other categories */}
                {category === "halls" && (
                  <SelectItem value="capacity">السعة</SelectItem>
                )}
                <SelectItem value="rating">التقييم</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {results.map((hall) => (
              <Card
                key={hall.id}
                className="overflow-hidden transition-all hover:shadow-lg pt-0"
              >
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
                      <CardDescription className="mt-1 flex items-center">
                        {category === "halls" && (
                          <>
                            <MapPin className="mr-1 h-3 w-3" /> {hall.location}
                          </>
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex items-center rounded-md bg-primary/10 px-2 py-1">
                      <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs font-medium">{hall.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
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
                      {category === "halls" && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="ml-1 text-sm">{hall.capacity}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/services/${category}/${hall.id}`} key={hall.id}>
                    <Button variant="outline">رؤية باقي التفاصيل</Button>
                  </Link>
                  <BookingModal
                    serviceName={hall.name}
                    servicePrice={hall.price}
                    serviceLocation={hall.location}
                    serviceType={arabicCategoryName}
                  >
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      <Calendar className="mr-2 h-4 w-4" /> احجز الآن
                    </Button>
                  </BookingModal>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
