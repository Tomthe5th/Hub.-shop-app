"use client";
import React from "react";
import Productcard from "./productcard";
import Productdescription from "./products/productdescription";
import { useQuery } from "@tanstack/react-query";
import getProducts from "@/actions/getproducts";

export default function Productlist() {
  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section>
      <div className="container mx-auto lg:px-8">
        <h3 className="font-semibold text-center">Latest arrivals</h3>
        <div className=" px-4 flex gap-4 items-center justify-center ">
          <>
            {products.map((item) => (
              <Productcard key={item.id} products={item} />
            ))}
          </>
        </div>
      </div>
    </section>
  );
}
