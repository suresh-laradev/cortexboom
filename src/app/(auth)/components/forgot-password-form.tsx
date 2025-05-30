import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {
  return (
    // <Card>
    //   <CardHeader className="text-center">
    //     <CardTitle className="text-2xl">Forgot Password</CardTitle>
    //     <CardDescription>
    //       Enter your email address to receive an OTP for password recovery.
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent>
    <form
      className={cn(
        "flex flex-col gap-6 max-w-md mx-auto rounded-lg",
        className
      )}
      {...props}
    >
      {/* Input Section */}
      <div className="grid gap-6">
        <div className="grid gap-6">
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
    </form>
    //   </CardContent>
    // </Card>
  );
};
