import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  dashboardPath,
  loginPath,
  productsPath,

  signupPath,
  websitePath,
} from "@/paths";
import Link from "next/link";
import Footer from "@/app/_navigation/footer";

const LandingPage = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2 border-b">
        {/* Left Section: Navigation Links */}
        <section className="flex gap-4">
          <NavLink href={websitePath()}>home</NavLink>
          <NavLink href={dashboardPath()}>dashboard</NavLink>
          <NavLink href={productsPath()}>products</NavLink>
        </section>
        <section className="flex gap-4">
        <Button variant="default" size="sm" asChild><Link href={{ pathname: loginPath() }}>signin</Link></Button>
        <Button variant="default" size="sm" asChild><Link href={{ pathname: signupPath() }}>signup</Link></Button>
          <ThemeToggle />
        </section>
      </nav>
      <h1>A Landing Page</h1>
      <Footer />
    </div>
  );
};

export default LandingPage;



// Reusable component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={{ pathname: href }} className="hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1 transition-colors duration-200">
    {children}
  </Link>
);