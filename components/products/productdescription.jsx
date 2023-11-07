import React from "react";
import Variantselector from "../variantselector";
import Addtocart from "../cart/addtocart";
import Prose from "../prose";

export default function Productdescription({ product }) {
  const { id, name, category, price, imageUrl, description } = product;

  return (
    <article className="w-full">
      <div className="border-b border-neutral-400 ">
        <h1 className="text-5xl font-medium   mb-2">{name}</h1>
        <p className="bg-neutral-300  mb-4 px-4 py-2 rounded-full w-fit  ">
          {price} <span>USD</span>
        </p>
      </div>

      <Variantselector />
      <Prose html={`<h1>${description}</h1>`} />
      <Addtocart product={product} />
    </article>
  );
}
