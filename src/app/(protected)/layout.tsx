import type { Metadata } from "next";

import SideBar from "@/app/_navigation/sidebar";
import {
  SidebarInset,

} from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "Auth Page",
  description: "Cortex Boom Auth Page",
};

const ProtectedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SideBar> <SidebarInset>{children}</SidebarInset></SideBar>;
};

export default ProtectedLayout;
