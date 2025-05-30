import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default NavLink;
