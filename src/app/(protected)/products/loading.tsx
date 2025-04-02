"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="flex items-start flex-wrap gap-4 py-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton
          key={index}
          className={
            "p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 bg-sky-900/10"
          }
        />
      ))}
    </section>
  );
};

export default Loading;
