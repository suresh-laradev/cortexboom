import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} method="POST">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email to receive an OTP.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button type="submit" className="w-full">
          Send OTP
        </Button>
      </div>
    </form>
  );
};