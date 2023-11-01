import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Userlayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
