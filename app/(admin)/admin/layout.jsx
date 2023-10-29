import { Inter, Outfit } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Catwalk",
  description: "clothing-store",
};

export default function RootLayout({ children, createProductmodal }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          {children}
          {createProductmodal}
        </main>
      </body>
    </html>
  );
}
