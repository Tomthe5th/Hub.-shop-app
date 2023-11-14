"use client";
import React, { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { Button } from "./ui/button";
import { Expand, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { notFound, useRouter } from "next/navigation";

export default function Productcard({ products }) {
  //console.log(products);
  const router = useRouter();
  function stopPropagation(e) {
    e.stopPropagation();
  }

  function handleClick() {
    router.push(`/products/${id}`);
  }

  const { id, name, category, price, imageUrl } = products;

  return (
    <article className="w-64 " onClick={handleClick}>
      <div className="aspect-square w-full  rounded-xl relative group">
        <ProductImage imageUrl={imageUrl} name={name} />
        <div
          className="absolute top-5 right-5 flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 "
          onClick={stopPropagation}
        >
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
          <p>{name}</p>
          <p>{category?.name}</p>
        </div>

        <div>
          <p>{price}$</p>
        </div>
      </div>
    </article>
  );

  function ProductImage({ imageUrl, name = "" }) {
    const [imageLoading, setImageloading] = useState(true);

    return (
      <Image
        onLoadingComplete={() => setImageloading(false)}
        fill
        src={imageUrl}
        alt={name}
        className={cn(
          "object-cover aspect-square rounded-md  ease-in-out duration-300",
          imageLoading
            ? "blur-md scale-110 grayscale "
            : " scale-100 grayscale-0"
        )}
      />
    );
  }
}
// 1:27:30
