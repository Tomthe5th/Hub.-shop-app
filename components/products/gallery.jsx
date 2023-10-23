import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Gallery() {
  return (
    <div className="relative aspect-square w-full h-full max-h-[550px] overflow-hidden group border-2 border-neutral-300 rounded-2xl">
      <Image
        src="https://picsum.photos/400/600"
        fill
        className="object-contain w-full h-full "
        priority={true}
        alt="product image"
      />

      <Link
        href={"#"}
        scroll={false}
        className="animate-btn -z-10 absolute left-[23%] top-[45%]  group-hover:text-blue-500 group-hover:-translate-x-8"
      >
        <ArrowLeftIcon className="w-5 h-5 -translate-x-9 text-neutral-500 " />
      </Link>
      <Link
        href={"#"}
        scroll={false}
        className="animate-btn -z-10 absolute right-[23%] top-[45%] group-hover:translate-x-8 group-hover:text-blue-500  "
      >
        <ArrowRightIcon className="w-5 h-5 translate-x-9 text-neutral-500 " />
      </Link>
    </div>
  );
}
