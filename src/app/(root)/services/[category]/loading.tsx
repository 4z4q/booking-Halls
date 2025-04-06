import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="container py-8">
      {/* Page Header Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-10 w-1/3 mb-2" />
        <Skeleton className="h-5 w-1/2" />
      </div>

      {/* Services Grid Skeleton */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <Skeleton className="aspect-video w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
              </div>
              <div className="mt-4">
                <Skeleton className="h-10 w-1/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
