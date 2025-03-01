import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="flex gap-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/my-tasks"}>My Tasks</Link>
      <Link href={"/my-tasks/settings"}>Settings</Link>
    </nav>
  );
};

export default Header;
