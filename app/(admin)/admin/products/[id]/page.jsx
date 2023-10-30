import getCategories from "@/actions/getCategories";
import getColors from "@/actions/getColors";
import getSizes from "@/actions/getSizes";
import getProduct from "@/actions/getproduct";
import Productform from "@/components/products/productform";

import React from "react";

export default async function Productcreatepage({ params }) {
  const data = await getProduct(params.id);
  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();
  if (!params.id) return null;

  const product = data[0];

  //pick 1st item from array
  return (
    <div>
      <Productform
        initialData={product}
        categories={categories}
        sizes={sizes}
        colors={colors}
      />
    </div>
  );
}
