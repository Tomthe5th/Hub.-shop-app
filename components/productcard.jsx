import React from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

export default function Productcard() {
  return (
    <article className="max-w-lg"> 
      <div className="aspect-square rounded-xl relative "> 
        <Image
          src="https://picsum.photos/200"
          alt="product label"
          fill
          className="object-cover rounded-md"
        />
      </div>
    </article>
  );
}
// 1:27:30