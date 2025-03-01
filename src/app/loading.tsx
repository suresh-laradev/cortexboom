import { Skeleton } from "@/components/ui/skeleton";

const LoaderSkeleton = () => {
  return (
    <div className="flex gap-4 p-4 flex-wrap">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="size-56 rounded-sm bg-sky-900/10" />
      ))}
    </div>
  );
};

export default LoaderSkeleton;
