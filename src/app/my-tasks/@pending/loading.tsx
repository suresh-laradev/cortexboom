"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Skeleton className="size-96 border-2 rounded-lg p-4 bg-green-900/10" />
  );
};

export default Loading;
