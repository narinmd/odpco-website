import React from "react";
import "./globals.css";
// import { Geist } from "next/font/google";
import Providers from "@/components/Providers";
// const geist = Geist({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-geist",
// });
export default function layout({ children }) {
  return (
    // className={geist.variable}
    <html>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
