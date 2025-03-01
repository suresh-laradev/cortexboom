"use client";

import { useQuery } from "@tanstack/react-query";
import { myTasks } from "@/app/actions/tasks";
import LoaderSkeleton from "./loading";

export default function Home() {
  const query = useQuery({ queryKey: ["myTasks"], queryFn: myTasks });
  if (query.isLoading) return <LoaderSkeleton />;
  if (query.isError) return <p>Error: {query.error?.message}</p>;
  return (
    <section className="flex items-start flex-wrap gap-4 py-4">
      {query.data?.map((task: string, index: number) => (
        <section
          key={index}
          className={
            "bg-sky-900 text-accent p-1.5 rounded-sm flex place-items-center place-content-center size-56"
          }
        >
          {task}
        </section>
      ))}
    </section>
  );
}
