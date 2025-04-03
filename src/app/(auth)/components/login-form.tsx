import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { forgotPasswordPath, signupPath } from "@/paths";

export const LoginForm=({
  className,
  ...props
}: React.ComponentProps<"form">) =>{
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href={{pathname:forgotPasswordPath()}}
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.72 1.22 9.24 3.62l6.91-6.91C35.91 2.68 30.27 0 24 0 14.73 0 6.73 5.73 2.73 14.02l7.91 6.14C12.27 13.18 17.73 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.27 24c0-1.64-.27-3.18-.73-4.64H24v9.27h12.91c-1.09 3.64-4.09 6.64-7.91 7.91l6.14 7.91C41.27 40.91 46.27 33.18 46.27 24z"
            />
            <path
              fill="#4A90E2"
              d="M24 48c6.27 0 11.91-2.68 15.91-7.09l-6.14-7.91C30.73 34.82 27.27 36 24 36c-6.27 0-11.73-3.68-14.27-9.14l-7.91 6.14C6.73 42.27 14.73 48 24 48z"
            />
            <path
              fill="#FBBC05"
              d="M9.73 26.86C8.86 24.91 8.36 22.73 8.36 20.5s.5-4.41 1.36-6.36L1.82 8C.64 11.09 0 14.45 0 18c0 3.55.64 6.91 1.82 10l7.91-6.14z"
            />
          </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href={{ pathname: signupPath() }}
          className="underline underline-offset-4"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
