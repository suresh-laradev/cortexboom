import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const OtpForm = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {
  return (
    <form
      className={cn("flex flex-col gap-6 items-center", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Verify OTP</h1>
        <p className="text-muted-foreground text-sm">
          Enter the OTP sent to your email.
        </p>
      </div>
      <div className="grid gap-6 w-fit">
        <div className="grid gap-3">
          <Label htmlFor="otp" className="text-center">
            OTP
          </Label>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button type="submit" className="w-full">
          Verify OTP
        </Button>
      </div>
    </form>
  );
};
