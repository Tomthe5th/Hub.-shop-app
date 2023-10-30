"use client";
import React, {
  startTransition,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Button } from "../ui/button";
import { Controller, useForm } from "react-hook-form";
import Imageupload from "../imageupload";
import axios from "axios";
import { useRouter } from "next/navigation";
import updateProduct from "@/actions/updateProducts";
import { ArrowBigUpDashIcon, Loader2, Loader2Icon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Productform({
  initialData,
  categories,
  sizes,
  colors,
}) {
  // console.log(initialData);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm(
    initialData
      ? {
          defaultValues: initialData,
        }
      : ""
  );

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = isLoading || isPending;

  async function onSubmit(formData) {
    //
    try {
      setIsloading(true);
      if (initialData) {
        //update mode
        await updateProduct(initialData.id, formData);
        console.log(formData);
      } else {
        //create mode
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
          },
        });
        console.log(formData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      startTransition(() => {
        router.refresh();
      });
      router.push("/admin/products");
      setIsloading(false);
    }
  }

  return (
    <article className="mx-auto max-w-sm mt-4">
      <h1 className="text-center"> {initialData ? "Update" : "Add"} product</h1>
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
          <label htmlFor="price">price</label>
          <input
            className="w-full border px-2 py-1"
            type="number"
            id="price"
            {...register("price", {
              required: true,
            })}
          />

          <small className="mt-1 text-red-600">
            {errors.price && "*required"}
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
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
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
            {sizes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
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
            {colors.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
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
          <Button className={cn("group py-4")} disabled={isMutating}>
            {initialData ? (
              <>
                {isMutating ? (
                  <Loader2 className="w-4 h-4 animate-spin " />
                ) : (
                  <ArrowBigUpDashIcon className="w-4 h-4 text-sm group-hover:animate-bounce duration-6 " />
                )}
                <span className="ml-2 text-md ">Update</span>
              </>
            ) : (
              <>
                {isMutating ? (
                  <Loader2 className="w-4 h-4 animate-spin " />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                <span className="ml-2"> Add</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </article>
  );
}
