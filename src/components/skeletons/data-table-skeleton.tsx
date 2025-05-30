import { Skeleton } from "@/components/ui/skeleton";

export function DataTableSkeleton() {
  return (
    <div className="w-full flex flex-col gap-4 px-4 lg:px-6">
      {/* Skeleton for Table Header */}
      <div className="overflow-hidden rounded-lg border">
        <div className="bg-muted sticky top-0 z-10">
          <div className="flex items-center gap-4 px-4 py-2">
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-4 w-24 rounded-md" />
            ))}
          </div>
        </div>

        {/* Skeleton for Table Rows */}
        <div className="flex flex-col gap-2 px-4 py-2">
          {[...Array(10)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center gap-4 border-b py-2"
            >
              <Skeleton className="h-4 w-8 rounded-md" />
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-4 w-12 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Skeleton for Pagination */}
      <div className="flex items-center justify-between px-4">
        <Skeleton className="h-4 w-32 rounded-md" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
    </div>
  );
}
