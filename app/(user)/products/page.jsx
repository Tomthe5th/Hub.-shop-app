"use client";

import getCategories from "@/actions/getCategories";
import Productlist from "@/components/productlist";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";
import Link from "next/link";

export default function Allproductspage() {
  const {
    data: categories,
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section>
      <div className="container mx-auto px-4 lg:px-8 flex">
        <aside className="border-r w-1/5 h-full">
          <ul>
            {categories.map((item) => (
              <Link key={item.id} href={`products?categories=${item.slug}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </aside>

        <Productlist />
      </div>
    </section>
  );
}
