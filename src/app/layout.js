"use client";

import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { Inter } from "next/font/google";
import NavbarHome from "@/components/Navbarhome";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavbarHome />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
