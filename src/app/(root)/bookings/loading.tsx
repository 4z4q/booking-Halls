import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with search skeleton */}
      <div className="bg-muted w-full">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />

            {/* Search and filter skeleton */}
            <div className="flex flex-col md:flex-row gap-4">
              <Skeleton className="h-10 flex-grow text-white " />
              <Skeleton className="h-10 w-full md:w-[180px] text-white" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Packages section skeleton */}
        <section className="mb-16">
          <div className="flex items-center mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`package-skeleton-${index}`}
                  className="flex flex-col h-full border rounded-lg overflow-hidden"
                >
                  <Skeleton className="h-48 w-full rounded-none" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-6 w-1/3 mb-4" />
                    <div className="space-y-2 mb-6">
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={`feature-skeleton-${i}`}
                            className="flex items-center"
                          >
                            <Skeleton className="h-4 w-4 mr-2" />
                            <Skeleton className="h-4 flex-grow" />
                          </div>
                        ))}
                    </div>
                    <Skeleton className="h-10 w-full mt-auto" />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
