"use client";
import Link from "next/link";
import { useState } from "react";
import {
  PiMagnifyingGlassLight,
  PiBag,
  PiListLight,
  PiXLight,
} from "react-icons/pi";
import styles from "./Nav.module.css";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleMenu() {
    setNavOpen((prev) => !prev);
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.menu} onClick={toggleMenu}>
        {!navOpen && <PiListLight fontSize={24} />}
        {navOpen && <PiXLight fontSize={24} />}
      </div>

      <div className={styles.moblieMenu} style={{ width: !navOpen && "0" }}>
        <Link href="/">Home</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.linksContainer}>
        <Link className={styles.logo} href="/">
          Logo
        </Link>
        <div className={styles.pagesContainer}>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <Link href="#">
          <PiMagnifyingGlassLight fontSize={26} />
        </Link>
        <Link href="#">
          <PiBag fontSize={26} />
        </Link>
      </div>
    </nav>
  );
}
