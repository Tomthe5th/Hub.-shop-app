"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

export default function Addtocart() {
  return (
    <form>
      <SubmitButton />
      <p className="sr-only" role="status">
        added to cart
      </p>
    </form>
  );
}

function SubmitButton() {
  return (
    <Button className={cn("btn", "disabledBtnClasses")}>
      <p className="flex">
        <PlusIcon className="w-5 h-5" /> Add to cart
      </p>
    </Button>
  );
}
