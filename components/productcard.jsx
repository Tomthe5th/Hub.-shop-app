"use client";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { Button } from "./ui/button";
import { Expand, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Productcard() {
  const router = useRouter();

  function handleClick(event) {
    router.push("/products/Name");
  }
function stopPropagation(e) {
e.stopPropagation()
}

  return (
    <article className="max-w-2xl " onClick={handleClick}>
      <div className="aspect-square  rounded-xl relative group">
        <Image
          src="https://picsum.photos/200"
          alt="product label"
          fill
          className="object-cover aspect-square rounded-md"
        />
        <div className="absolute top-5 right-5 flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 " onClick={stopPropagation}>
          <Button variant="ghost" size="18" className={cn("p-2")}>
            <Expand />
          </Button>
          <Button variant="ghost" size="18" className={cn("p-2")}>
            <ShoppingCart />
          </Button>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <div>
          <p>Name</p>
          <p>categoryName</p>
        </div>

        <div>
          <p>...$</p>
        </div>
      </div>
    </article>
  );
}
// 1:27:30
