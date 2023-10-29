"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigUpDashIcon, Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Deletebutton({ products }) {
  const { id } = products;

  async function handleDelete(id) {
    // confirm('alert')
    const isConfirm = confirm(`Are you sure u want to delete ...?`);

    if (isConfirm) {
      console.log("del", id);
    }
  }

  return (

      <Button variant="destructive" onClick={() => handleDelete(id)}>
        <Trash2Icon className="w-4 h-4" />
      </Button>

  );
}
