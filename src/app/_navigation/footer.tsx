"use client";

import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adminDashboardPath, productsPath, websitePath } from "@/paths";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 dark:bg-gray-900 py-12 px-6 text-sm text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-2">GoldBot</h4>
          <p className="text-muted-foreground">
            Trade smarter with our intelligent XAUUSD bots.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Links</h4>
          <ul className="space-y-1">
            <li>
              <Link
                className="hover:text-yellow-500 hover:underline transition duration-200"
                href={websitePath()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-500 hover:underline transition duration-200"
                href={productsPath()}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-500 hover:underline transition duration-200"
                href={adminDashboardPath()}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Subscribe</h4>
          <form className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="you@example.com"
              className="bg-white dark:bg-gray-800"
            />
            <Button className="w-full">Subscribe</Button>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </form>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        © 2025 GoldBot. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
