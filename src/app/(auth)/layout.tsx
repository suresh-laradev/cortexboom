import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth Page",
  description: "Cortex Boom Auth Page",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main>{children}</main>;
};

export default AuthLayout;
