"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigUpDashIcon, Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import deleteProduct from "@/actions/deleteProduct";
import { useRouter } from "next/navigation";

export default function Updatebutton({ products }) {
  const { id } = products;
  const router = useRouter();
  async function handleUpdate(id) {
  return ''
  }

  return (
    <Button variant="destructive" onClick={() => handleUpdate(id)}>
      <Trash2Icon className="w-4 h-4" />
    </Button>
  );
}
