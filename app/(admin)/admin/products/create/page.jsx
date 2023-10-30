import Productform from "@/components/products/productform";
import getCategories from "@/actions/getCategories";
import getColors from "@/actions/getColors";
import getSizes from "@/actions/getSizes";
import getProduct from "@/actions/getproduct";

import React from "react";

export default async function Productcreatepage() {
  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div>
      <Productform categories={categories} sizes={sizes} colors={colors} />
    </div>
  );
}
