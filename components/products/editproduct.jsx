"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Editproduct() {
  return (
    <>
      {/*  dialog/tabs//! unfinished */}
      <Dialog>
        <DialogTrigger
          className={cn(
            "bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md"
          )}
        >
          edit
        </DialogTrigger>

        <DialogContent>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
