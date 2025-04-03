import { websitePath } from "@/paths";
import Link from "next/link";

export const SomethingWentWrong = () => {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold">Something Went Wrong</h1>
        <p className="text-muted-foreground text-sm">
          We encountered an error while processing your request. Please try again later.
        </p>
        <Link href={{pathname:websitePath()}} className="w-full">
          Go to Home
        </Link>
      </div>
    );
  };