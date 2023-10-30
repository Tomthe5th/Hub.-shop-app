"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Searchform() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const keyword = formData.get("keyword");

    router.push(`/prducts?keyword=${keyword}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="keyword"
        key={searchParams?.get("keyword")}
        defaultValue={searchParams.get("keyword") || ""}
        placeholder="Search"
        className="border  px-2 py-1 mt-1 rounded-md outline-none w-96 max-w-full  focus:ring ring-neutral-300 ring-offset-1 "
      />
    </form>
  );
}
