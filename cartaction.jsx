import React from "react";
import { Button } from "./components/ui/button";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Cartaction() {
  return (
    <div className="flex items-center gap-4">
      <Sheet>
        <SheetTrigger>
          <Button className=" rounded-full  flex items-center gap-4 px-4 py-2">
            <ShoppingBag size={18} color="white" />
            <p>0</p>
          </Button>
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
