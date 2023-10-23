import React from "react";
import Variantselector from "../variantselector";

export default function Productdescription() {
  return (
    <article>
      <div className="border-b-neutral-400">
        <h1>Title</h1>
        <p className="bg-neutral-300 px-4 py-2 rounded-full ">
          29.99 <span>USD</span>
        </p>
      </div>
      
      <div>
        <Variantselector />
      </div>
    </article>
  );
}
