import React from "react";

import getProducts from "@/actions/getproducts";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { ArrowBigUpDashIcon, ClockIcon } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import Dialogbody from "./[id]/page";

export default async function Products() {
  const products = await getProducts();
  // console.log(products);

  // const size = products.map((product) => product.size);
  // console.log(size);

  return (
    <section>
      <div className="container mx-auto max-w-6xl py-6">
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
                <TableCell className="font-medium flex items-center justify-center">
                  {item.imageUrl ? (
                    <Image
                      width={110}
                      height={110}
                      src={item?.imageUrl}
                      alt="item.name"
                      className=" aspect-square "
                    />
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
                      <Link href={`/admin/products/${item.id}`}>edit</Link>
                    </Button>
                  </div>

                  <div
                    className={cn(
                      "mt-2 flex items-center justify-between gap-2"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      ..hours ago
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
