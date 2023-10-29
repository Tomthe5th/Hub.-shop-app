"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigUpDashIcon, Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import deleteProduct from "@/actions/deleteProduct";
import { useRouter } from "next/navigation";

export default function Deletebutton({ products }) {
  const { id } = products;
  const router = useRouter();
  async function handleDelete(id) {
    // confirm('alert')
    const isConfirm = confirm(`Are you sure u want to delete ...?`);

    if (isConfirm) {
      console.log("del", id);
      try {
        await deleteProduct();
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Button variant="destructive" onClick={() => handleDelete(id)}>
      <Trash2Icon className="w-4 h-4" />
    </Button>
  );
}
