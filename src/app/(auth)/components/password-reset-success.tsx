import { loginPath } from "@/paths";
import Link from "next/link";

export const PasswordResetSuccess = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold">Password Reset Successfully</h1>
      <p className="text-muted-foreground text-sm">
        Your password has been reset successfully. You can now log in with your
        new password.
      </p>
      <Link href={{ pathname: loginPath() }} className="w-full">
        Go to Login
      </Link>
    </div>
  );
};
