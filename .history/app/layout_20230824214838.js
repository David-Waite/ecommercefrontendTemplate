"use client";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  function handleMenuOpen() {
    setNavOpen((prev) => !prev);
  }

  function handleBodyClick() {
    if (navOpen) {
      setNavOpen(false);
    }
  }

  const noScrollStyle = {
    overflow: navOpen && "hidden",
  };

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={noScrollStyle}
        onClick={handleBodyClick}
      >
        <Nav navOpen={navOpen} toggleMenu={handleMenuOpen} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
