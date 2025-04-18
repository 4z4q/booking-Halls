import { Skeleton } from "@/components/ui/skeleton";
import { Diamond, Flame, Compass } from "lucide-react";

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
              <Skeleton className="h-10 flex-grow text-white "  />
              <Skeleton className="h-10 w-full md:w-[180px] text-white" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Packages section skeleton */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Diamond className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl font-bold">Packages</h2>
          </div>
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
                      {Array(5)
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

        {/* Popular services section skeleton */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Flame className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl font-bold">Popular Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`service-skeleton-${index}`}
                  className="flex flex-col h-full border rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <Skeleton className="h-48 w-full rounded-none" />
                    <div className="absolute top-3 left-3">
                      <Skeleton className="h-6 w-20 rounded-full" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Skeleton className="h-5 w-2/3" />
                      <div className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-1" />
                        <Skeleton className="h-4 w-8" />
                      </div>
                    </div>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-6 w-1/4 mt-4 mb-4" />
                    <Skeleton className="h-10 w-full mt-auto" />
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Service types navigation skeleton */}
        <section>
          <div className="flex items-center mb-8">
            <Compass className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl font-bold">Browse by Service Type</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={`type-skeleton-${index}`}
                  className="border rounded-lg"
                >
                  <div className="flex flex-col items-center justify-center p-6">
                    <Skeleton className="h-6 w-6 rounded-full mb-3" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
