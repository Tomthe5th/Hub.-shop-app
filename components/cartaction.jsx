"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UseIsMounted from "./hooks/useIsMounted";
import { cn } from "../lib/utils";

export default function Cartaction() {
  const isMounted = UseIsMounted();

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-4">
      <Sheet>
        <SheetTrigger className="rounded flex items-center gap-2 p-2 relative border">
          <ShoppingCart className="w-4 h-4" color="black" />
          <span className="absolute -top-2 -right-2 text-xs w-4 h-4 flex items-center justify-center bg-amber-600 text-white rounded">
            0
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
