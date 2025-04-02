import { Skeleton } from "@/components/ui/skeleton";

const LoaderSkeleton = () => {
  return (
    <div className="flex gap-4 p-4 flex-wrap">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          className="p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 bg-sky-900/50"
        />
      ))}
    </div>
  );
};

export default LoaderSkeleton;
