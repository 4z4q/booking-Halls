import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetailsLoading() {
  return (
    <div className="min-h-screen" dir="rtl">
      <div className="container py-6 md:py-8">
        {/* Back Button */}
        <Skeleton className="h-6 w-24 mb-6" />

        {/* Service Header */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div>
            <Skeleton className="h-10 w-3/4 mb-2" />
            <Skeleton className="h-5 w-1/2 mb-4" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-6 w-px" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
          <div className="flex justify-end items-start space-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-28 rounded-md" />
          </div>
        </div>

        {/* Main Image and Gallery */}
        <div className="mb-8">
          <Skeleton className="aspect-[2/1] w-full rounded-xl" />
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                className="w-20 h-20 rounded-md flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Content Tabs and Sidebar */}
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div>
            <div className="flex gap-2 mb-6">
              {["التفاصيل", "المميزات", "التقييمات"].map((tab) => (
                <Skeleton key={tab} className="h-10 w-24 rounded-md" />
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <Skeleton className="h-8 w-48 mb-3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Price and Booking (Desktop) */}
          <div className="hidden md:block">
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
