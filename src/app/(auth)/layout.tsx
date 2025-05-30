import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login Page",
  description: "Cortex Boom Official Login Page",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
};

export default AuthLayout;
