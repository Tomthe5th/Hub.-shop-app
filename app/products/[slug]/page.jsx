import Gallery from "@/components/products/gallery";
import Productdescription from "@/components/products/productdescription";
import React from "react";

export default function Productpage() {
  return (
    <section>
      <div className="container mx-auto px-4 ; lg:px-0">
        <div className="flex rounded-lg border-neutral-200 p-8 gap-8">
          <div className="w-3/4 h-full basics-full ; lg:basics-4/6 ">
            <Gallery />
          </div>

          <div className="flex items-center justify-center w-2/6 ">
            <Productdescription />
          </div>
        </div>
      </div>
      {/* related products */}
    </section>
  );
}
// 46:38
