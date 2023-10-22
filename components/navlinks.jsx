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
    href: `/categories/${item.slug}`,
    label: item.name,
    isActive: pathname === `/categories/${item.slug}`,
  }));

  // console.log({ links });

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
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
