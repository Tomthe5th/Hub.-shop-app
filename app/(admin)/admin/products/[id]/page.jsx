import getProduct from "@/actions/getproduct";
import Productform from "@/components/products/productform";
import React from "react";

export default async function Productcreatepage({ params }) {
  const product = await getProduct(params.id);
  console.log(product);
  if (!params.id) return null;

  return (
    <div>
      <Productform />
    </div>
  );
}
