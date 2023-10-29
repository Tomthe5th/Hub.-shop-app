import getProduct from "@/actions/getproduct";
import Productform from "@/components/products/productform";
import React from "react";

export default async function Productcreatepage({ params }) {
  const data = await getProduct(params.id);

  if (!params.id) return null;

  const product = data[0];

  //pick 1st item from array
  return (
    <div>
      <Productform initialData={product} />
    </div>
  );
}
