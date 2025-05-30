import { ForgotPasswordForm } from "@/app/(auth)/components/forgot-password-form";
import { websitePath } from "@/paths";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="relative min-h-svh">
      {/* Background Image */}
      <Image
        src="/auth.png"
        alt="Authentication background"
        fill
        priority
        className="object-cover dark:brightness-[0.2] dark:grayscale"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-svh flex-col">
        {/* Logo Section - Fixed at top */}
        <div className="p-6 md:p-10">
          <Link
            href={{ pathname: websitePath() }}
            className="mx-auto flex w-fit items-center gap-2 font-medium"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Cortex Boom Inc.
          </Link>
        </div>

        {/* Form Section - Centered */}
        <div className="flex flex-1 items-center justify-center px-6 md:px-10">
          <div className="w-full max-w-sm backdrop-blur-sm bg-white/30 dark:bg-black/30 p-6 rounded-lg">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
