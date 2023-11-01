"use client";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navlinks({ data }) {
  const pathname = usePathname();
  console.log(data);
  const param  = useParams() ; console.log(param);


  const links = data.map((item) => ({
    id: item.id,
    href: `/products?categories=${item.slug}`,
    name: item.name,
    isActive:`${pathname}?categories=${item.slug}` ===`/products?categories=${item.slug}`,
  }));

  return (
    <nav className="flex items-center gap-4 ; lg:gap-6 mx-6 ">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            "test-sm font-medium hover:text-black hover:underline transition-color",
            link.isActive ? "text-black underline-offset-1" : "text-slate-500 "
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
