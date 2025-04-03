"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aboutUsPath, contactUsPath, privacyPolicyPath, termsOfServicePath } from "@/paths";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About CortexBoom</h3>
          <p className="text-sm">
            CortexBoom is your go-to platform for innovative solutions and
            cutting-edge technology. Join us on our journey to transform the
            future.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href={{pathname:aboutUsPath()}} className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href={{pathname:contactUsPath()}} className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href={{pathname:privacyPolicyPath()}} className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={{pathname:termsOfServicePath()}} className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Now</h3>
          <form className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
            />
            <Button type="submit" variant={"default"} size={"sm"}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} CortexBoom. All rights reserved.
          </p>

          {/* Right Section */}
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span>Made with</span>
            <HeartIcon height={16} width={16} className="text-red-500" />
            <span>by CortexBoom Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
