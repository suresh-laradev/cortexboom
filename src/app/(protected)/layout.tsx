import type { Metadata } from "next";

import Header from "@/app/_navigation/header";
import Footer from "@/app/_navigation/footer";

export const metadata: Metadata = {
  title: "Auth Page",
  description: "Cortex Boom Auth Page",
};

const ProtectedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={"p-4"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
