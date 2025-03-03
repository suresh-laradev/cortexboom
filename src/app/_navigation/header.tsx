"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <section className="flex gap-4 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/my-tasks"}>My Tasks</Link>
        <Link href={"/my-tasks/settings"}>Settings</Link>
      </section>
      <ThemeToggle />
    </nav>
  );
};

export default Header;
