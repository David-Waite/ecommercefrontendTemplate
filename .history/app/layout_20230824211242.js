"use client";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  function handleMenuOpen() {
    setNavOpen((prev) => !prev);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav navOpen={navOpen} toggleMeun={handleMenuOpen} />
        {children}
        <Footer />
      </body>
    </html>
  );
}