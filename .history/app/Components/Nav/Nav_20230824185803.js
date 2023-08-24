"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  PiMagnifyingGlassLight,
  PiBag,
  PiListLight,
  PiXLight,
} from "react-icons/pi";
import styles from "./Nav.module.css";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const dialogRef = useRef(null);

  function toggleMenu() {
    setNavOpen((prev) => !prev);
    if (navOpen) {
      dialogRef.current.showModal();
    }
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.menu} onClick={toggleMenu}>
        {!navOpen && <PiListLight fontSize={24} />}
        {navOpen && <PiXLight fontSize={24} />}
      </div>

      <dialog className={styles.moblieMenu} ref={dialogRef}>
        <Link href="/">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Contact</Link>
      </dialog>
      <div className={styles.linksContainer}>
        <Link className={styles.logo} href="/">
          Logo
        </Link>
        <div className={styles.pagesContainer}>
          <Link href="/">Home</Link>
          <Link href="#">Catalog</Link>
          <Link href="#">Contact</Link>
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
