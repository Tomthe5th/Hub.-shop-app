"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import Imageupload from "../imageupload";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Productform() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

  const router = useRouter();

  async function onSubmit(formData) {
    try {
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(formData);
      router.refresh();
      router.push("/admin/products");
    } catch (error) {console.log(error); }
  }

  return (
    <article className="mx-auto max-w-sm mt-4">
      <h1 className="text-center">Add products</h1>
      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <label htmlFor="image">image</label>
          <Controller
            name="imageUrl"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Imageupload
                value={value ? [value] : []} //for multiple uploads
                onChange={(url) => onChange(url)}
                onRemove={() => onChange("")}
              />
            )}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="name">name</label>
          <input
            className="w-full border px-2 py-1"
            type="text"
            id="name"
            {...register("name", {
              required: true,
            })}
          />

          <small className="mt-1 text-red-600">
            {errors.name && "name is required"}
          </small>
        </div>

        <div className="mt-2">
          <label htmlFor="category">category</label>
          <select
            className="w-full border px-2 py-1"
            type="text"
            id="category"
            {...register("categoryId", {
              required: true,
            })}
          >
            <option value="">Select Category</option>
            <option value="1">shoes</option>
            <option value="2">bags</option>
          </select>
          <small className="mt-1 text-red-600">
            {errors.category && "*required"}
          </small>
        </div>

        <div className="mt-2">
          <label htmlFor="size">size</label>
          <select
            className="w-full border px-2 py-1"
            type="text"
            id="size"
            {...register("sizeId", {
              required: true,
            })}
          >
            <option value="">Select Size</option>
            <option value="1">XL</option>
            <option value="2">SM</option>
          </select>
          <small className="mt-1 text-red-600">
            {errors.size && "*required"}
          </small>
        </div>

        <div className="mt-2">
          <label htmlFor="color">color</label>
          <select
            className="w-full border px-2 py-1"
            type="text"
            id="color"
            {...register("colorId", {
              required: true,
            })}
          >
            <option value="">Select Color</option>
            <option value="1">red</option>
            <option value="2">white</option>
          </select>
          <small className="mt-1 text-red-600">
            {errors.color && "*required"}
          </small>
        </div>

        <div className="mt-2">
          <label htmlFor="description"></label>
          <textarea
            name="desc"
            id="description"
            cols="30"
            rows="5"
            className="w-full border px-2 py-1"
            {...register("description", {
              required: false,
            })}
          ></textarea>
          <small>{errors.desc && "*required"}</small>
        </div>

        <div className="flex justify-end">
          <Button>
            <span>...</span> Add
          </Button>
        </div>
      </form>
    </article>
  );
}
