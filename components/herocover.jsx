import React from "react";

export default function Herocover() {
  return (
    <section className="rounded-xl overflow-hidden p-4 ">
      <div className="container px-4">
        <div
          style={{ backgroundImage: "url('/hero-banner.avif')" }}
          className="rounded-xl bg-cover overflow-hidden h-80 ;lg:96"
        >
          <div className="w-full h-full flex items-center justify-center">
          <p className="text-white font-bold text-3xl ; sm:text-5xl lg:text-6xl drop-shadow-sm ">
            meet the <strong className=" text-amber-600 ">New YOU</strong>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
