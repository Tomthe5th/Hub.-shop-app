"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { useCartContext } from "../contexts/cartContext";

export default function Addtocart({ product }) {
  const { onAdd } = useCartContext();
  return (
    <Button
      onClick={() => onAdd(product, 1)}
      className={cn("btn", (onclick = "disabledBtnClasses"))}
    >
      <p className="flex">
        <PlusIcon className="w-5 h-5" /> Add to cart
      </p>
    </Button>
  );
}
