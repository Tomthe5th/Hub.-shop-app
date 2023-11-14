"use client";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

export default function Navlinks({ data }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const firstItem = searchParams.get("categories");

  const links = data.map((item) => ({
    id: item.id,
    href: `/products?categories=${item.slug}`,
    name: item.name,
    isActive:
      `${pathname}?categories=${firstItem}` ===
      `/products?categories=${item.slug}`,
  }));

  return (
    <nav className="flex items-center gap-4 ; lg:gap-6 mx-6 ">
      {links.slice(0, 3).map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            "navlink",
            link.isActive ? "text-black underline-offset-1" : "text-slate-500 "
          )}
        >
          {link.name}
        </Link>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className={cn("navlink")}>
          more{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.slice(4).map((link) => (
            <>
              {" "}
              <DropdownMenuItem key={link.id} className={cn("flex flex-row")}>
                <Link
                  href={link.href}
                  className={cn(
                    "navlink",
                    link.isActive
                      ? "text-black underline-offset-1"
                      : "text-slate-500 "
                  )}
                >
                  {link.name}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* 
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </nav>
  );
}
