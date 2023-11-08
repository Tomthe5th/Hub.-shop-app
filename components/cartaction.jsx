"use client";
import React from "react";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useIsMounted from "./hooks/useIsMounted";
import { cn } from "../lib/utils";
import { useCartContext } from "./contexts/cartContext";
import Image from "next/image";

export default function Cartaction() {
  const { totalPrice, totalQty, cartItems, onAdd, onRemove } = useCartContext();
  console.log(cartItems);
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  async function handleCheckout() {
    const res = await fetch("api/stripe", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = res.json();
    //stripe checkout code
  }

  return (
    <div className="flex items-center gap-4">
      <Sheet>
        <SheetTrigger className="rounded flex items-center gap-2 p-2 relative border">
          <ShoppingCart className="w-4 h-4" color="black" />
          <span className="absolute -top-2 -right-2 text-xs w-4 h-4 flex items-center justify-center bg-amber-600 text-white rounded">
            {totalQty}
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>my cart</SheetTitle>

            <SheetDescription>
              {cartItems.length < 1 ? (
                <div>
                  <ShoppingBag className="w-4 h-4" /> you have no items in cart
                </div>
              ) : (
                <ul className="flex flex-col items-center justify-between relative h-[90vh] ">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between px-2 py-4"
                    >
                      <div className="relative w-20 aspect-square ">
                        <Image
                          className="rounded-md "
                          src={item.imageUrl}
                          fill
                          alt={item.name}
                        />
                      </div>

                      <div className="flex flex-col items-center justify-around">
                        <h3>{item.name}</h3>
                        <p>{item.price}$</p>
                      </div>

                      <div className="flex justify-between items-center gap-2 rounded-md bg-neutral-100 ">
                        <button
                          onClick={() => onRemove(item)}
                          className="bg-neutral-300 rounded-l-md px-2 py-1"
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>

                        <p className="w-8 text-center">{item.quantity}</p>

                        <button
                          onClick={() => onAdd(item, 1)}
                          className="bg-neutral-300 rounded-r-md px-2 py-1"
                        >
                          <PlusIcon className="w-4 h-4" />{" "}
                        </button>
                      </div>
                    </li>
                  ))}

                  <div className="text-neutral-800 absolute bottom-1 py-2 flex flex-col items-center w-full border-t border-t-neutral-300">
                    <p className="text-xl font-semibold ">
                      Total price:{" "}
                      <span className="text-lg ">{totalPrice}$</span>{" "}
                    </p>
                    <Button onCick={handleCheckout}>
                      proceed to checkout!
                    </Button>
                  </div>
                </ul>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
// 1-00-46s
