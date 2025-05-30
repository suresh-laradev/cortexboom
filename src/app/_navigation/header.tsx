"use client";
import ThemeToggle from "@/components/theme-toggle";
import {
  adminDashboardPath,
  creditsPath,
  productsPath,
  websitePath,
} from "@/paths";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <section className="flex gap-4 ">
        <Link href={{ pathname: websitePath() }}>home</Link>
        <Link href={{ pathname: adminDashboardPath() }}>dashboard</Link>
        <Link href={{ pathname: productsPath() }}>products</Link>
        <Link href={{ pathname: creditsPath() }}>credits</Link>
        <Link href={"/admin/dashboard/settings"}>settings</Link>
      </section>
      <ThemeToggle />
    </nav>
  );
};

export default Header;
