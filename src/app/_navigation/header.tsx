"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { creditsPath, dashboardPath, productsPath, websitePath } from "@/paths";
const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <section className="flex gap-4 ">
        <Link href={{ pathname: websitePath() }}>home</Link>
        <Link href={{ pathname: dashboardPath() }}>dashboard</Link>
        <Link href={{ pathname: productsPath() }}>products</Link>
        <Link href={{ pathname: creditsPath() }}>credits</Link>
        <Link href={"/dashboard/settings"}>settings</Link>
      </section>
      <ThemeToggle />
    </nav>
  );
};

export default Header;
