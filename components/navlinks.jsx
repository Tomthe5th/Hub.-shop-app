"use client";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navlinks({ data }) {
  const pathname = usePathname();

  const links = data.map((item) => ({
    id: item.id,
    href: `/products?categories=${item.slug}`,
    name: item.name,
    isActive: pathname === `/products?categories=${item.slug}`,
  }));

  return (
    <nav className="flex items-center gap-4 ; lg:gap-6 mx-6 ">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            "test-sm font-medium hover:text-black hover:underline transition-color",
            link.isActive ? "text-black" : "text-slate-500 "
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
