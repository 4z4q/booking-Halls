import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>

        {/* Filters and Search */}
        <div className="mb-8 grid gap-6 md:grid-cols-[280px_1fr]">
          {/* Filters Section */}
          <div className="hidden space-y-6 md:block">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Halls List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-8 w-32" />
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-sm">
                  <Skeleton className="h-40 w-full mb-4" />
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-5 w-32 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 py-4">
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} className="h-8 w-8 rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
