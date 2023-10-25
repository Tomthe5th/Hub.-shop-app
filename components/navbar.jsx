import Cartaction from "@/cartaction";

import Link from "next/link";
import React from "react";
import Navlinks from "./navlinks";
import getCategories from "@/actions/getCategories";

export default async function Navbar() {
  // const categories = await getCategories();
  const categories = [];
  console.log({ categories });

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 ; lg:px-8 py-2 flex items-center justify-between ">
        <div className="flex items-center">
          <Link href={"/"} className="text-xl font-bold ">
            Hub.
          </Link>
          <Navlinks data={categories} />
        </div>
        <Cartaction />
      </div>
    </header>
  );
}
