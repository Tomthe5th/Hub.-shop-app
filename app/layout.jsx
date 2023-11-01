import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hub store",
  description: "clothing-store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
