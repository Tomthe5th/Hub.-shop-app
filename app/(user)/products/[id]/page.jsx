"use client";
import getProduct from "@/actions/getproduct";
import Gallery from "@/components/products/gallery";
import Productdescription from "@/components/products/productdescription";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";
import React from "react";

export default function Productpage() {
  // const params = useParams(); console.log(params);
  const { id } = useParams();
console.log(id);
  const {
    data: product,
    isPending,
    isError,
    isFetched,
  } = useQuery({
    queryKey: [`product`],
    queryFn: () => getProduct(id),
  });
  

  //if (!product && isFetched) notFound();
  if (isPending) return <p>Loading...</p>;
  //if (isError) return <p>{error.message}</p>;

 const { name, imageUrl, price } = product;
console.log(product);
  return (
    <section>
      <div className="container mx-auto px-4 ; lg:px-0">
        <div className="flex rounded-lg border-neutral-200 p-8 gap-8">
          <div className="w-3/4 h-full basics-full ; lg:basics-4/6 ">
            <Gallery imageUrl={imageUrl} />
          </div>

          <div className="flex items-center justify-center w-2/6 ">
            <Productdescription product={product} />
          </div>
        </div>
      </div>
      {/* related products */}
    </section>
  );
}
