import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { websitePath } from "@/paths";

export const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {
  return (
    <form
      className={cn(
        "flex flex-col gap-6 max-w-md mx-auto p-6 rounded-lg bg-background",
        className
      )}
      {...props}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <Link
          href={{ pathname: websitePath() }}
          className="flex items-center gap-2 font-medium text-2xl"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="h-6 w-6" />
          </div>
          <span className="text-primary">Cortex Boom Inc.</span>
        </Link>
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email address to receive an OTP for password recovery.
        </p>
      </div>

      {/* Input Section */}
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@domain.com"
            required
            className="h-12 px-4"
          />
        </div>
        <Button type="submit" className="w-full h-12">
          Send OTP
        </Button>
      </div>

      {/* Footer Section */}
      <div className="text-center text-sm text-muted-foreground">
        Remembered your password?{" "}
        <Link
          href={{ pathname: "/login" }}
          className="text-primary underline underline-offset-4 hover:text-primary/90"
        >
          Log in
        </Link>
      </div>
    </form>
  );
};