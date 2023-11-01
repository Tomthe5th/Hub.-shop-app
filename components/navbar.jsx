"use client";
import Cartaction from "@/components/cartaction";

import Link from "next/link";
import React from "react";
import Navlinks from "./navlinks";
import getCategories from "@/actions/getCategories";
import Searchform from "./Searchform";
import { useQuery } from "@tanstack/react-query";

export default function Navbar() {
  //const categories = await getCategories();
  const {
    data: categories,
    isPending,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isPending) return <p>Loading ...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <header className="border-b">
      <div className="container mx-auto  flex items-center justify-between px-4  py-2">
        <div className="flex items-center">
          <Link href={"/"} className="text-xl font-bold ">
            Hub.
          </Link>

          <Navlinks data={categories} />
        </div>

        <Searchform />

        <Cartaction />
      </div>
    </header>
  );
}
