import React from "react";
import Variantselector from "../variantselector";
import Addtocart from "../cart/addtocart";
import Prose from "../prose";

export default function Productdescription() {
  return (
    <article className="w-full">
      <div className="border-b border-neutral-400 ">
        <h1 className="text-5xl font-medium   mb-2">Title</h1>
        <p className="bg-neutral-300  mb-4 px-4 py-2 rounded-full w-fit  ">
          29.99 <span>USD</span>
        </p>
      </div>

      <Variantselector />
      <Prose html={"<h1>Product description <br/> <b>bold text</b></h1>"} />
      <Addtocart />
    </article>
  );
}
