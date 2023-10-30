import React from "react";

import getProducts from "@/actions/getproducts";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { ClockIcon, FileEditIcon, PlusCircleIcon } from "lucide-react";
import Deletebutton from "@/components/products/deletebutton";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { format, formatDistance } from "date-fns";

export default async function Products() {
  const products = await getProducts();

  // const size = products.map((product) => product.size);
  // console.log(size);

  return (
    <section>
      <div className="container mx-auto max-w-6xl py-6">
        <article>
          <Button>
            <Link href={"/admin/products/create"} className="flex items-center">
              <PlusCircleIcon className="mr-2 w-4 h-4" /> Add products
            </Link>
          </Button>
        </article>
        <Table className={cn("px-1")}>
          <TableCaption>HUB.PRODUCTS</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className={cn(" text-center  ")}>image</TableHead>
              <TableHead className=" text-center">name</TableHead>
              <TableHead className={cn(" text-center  ")}>category</TableHead>
              <TableHead className={cn(" text-center  ")}>price</TableHead>
              <TableHead className={cn(" text-center  ")}>size</TableHead>
              <TableHead className={cn(" text-center  ")}>color</TableHead>
              <TableHead className="text-center">description</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products?.map((item) => (
              <TableRow key={item.id} className={cn(" text-center py-2  ")}>
                <TableCell>
                  {item.imageUrl ? (
                    <figure className=" flex items-center justify-center relative w-full aspect-[2.5/3]  rounded shadow">
                      <Image
                        fill
                        priority
                        src={item?.imageUrl}
                        alt="item.name"
                        className=" object-cover "
                      />
                    </figure>
                  ) : null}
                </TableCell>

                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category?.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.size?.name}</TableCell>
                <TableCell>{item.color?.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <div
                    className={cn("flex items-center justify-between gap-2 ")}
                  >
                    <Button>go to Product page</Button>
                    <Button>
                      <Link href={`/admin/products/${item.id}`}>
                        <FileEditIcon className="w-4 h-4" />{" "}
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={cn(
                      "mt-2 flex items-center justify-between gap-2"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      {/* {format(new Date(item.created_at), "dd MM yyyy")}  */}
                      {formatDistance(
                        new Date(item.created_at),
                        new Date()
                      )}{" "}
                      ago
                    </div>

                    <Deletebutton products={item} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
