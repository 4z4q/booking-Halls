import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutLoading() {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-white text-center border m-10 rounded-md relative">
      <div className="mb-10 mt-10 flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-8 w-60 " />
          <Skeleton className="h-6 w-40 " />
        </div>
        <Skeleton className="h-8 w-20 " />
      </div>

      <div className=" space-y-4">
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
        <Skeleton className="h-14 w-full rounded-md" />
      </div>

      <div className="mt-10">
        <Skeleton className="h-12 w-40 mx-auto rounded-md" />
      </div>
    </div>
  );
}
