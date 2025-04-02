"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Skeleton
      className={
        "p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 bg-sky-900/10"
      }
    />
  );
};

export default Loading;
