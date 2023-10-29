import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getProducts from "@/actions/getproducts";
import Image from "next/image";

export default async function Products() {
  const products = await getProducts();
  console.log( products );

  // const size = products.map((product) => product.size);
  // console.log(size);

  return (
    <section>
      <div className="container mx-auto">
        <Table>
          <TableCaption>HUB.PRODUCTS</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>image</TableHead>
              <TableHead className="w-[100px]">name</TableHead>
              <TableHead>size</TableHead>
              <TableHead>desc</TableHead>
              <TableHead className="text-right">price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.imageUrl ? (
                    <Image
                     width={150} height={150}
                      src={item?.imageUrl}alt="item.name"
                      className=" aspect-square"
                    />
                  ) : null}
                </TableCell>

                <TableCell>{item.name}</TableCell>
                <TableCell>{item?.size?.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
