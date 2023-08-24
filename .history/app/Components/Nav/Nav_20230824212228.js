"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiMagnifyingGlassLight,
  PiBag,
  PiListLight,
  PiXLight,
} from "react-icons/pi";
import styles from "./Nav.module.css";

export default function Nav({ navOpen, toggleMenu }) {
  const pathname = usePathname();

  const selectedStyle = {
    backgroundColor: "var(--hoverGrey",
  };

  return (
    <nav className={styles.nav}>
      {pathname}
      <div className={styles.menu} onClick={toggleMenu}>
        {!navOpen && <PiListLight fontSize={24} />}
        {navOpen && <PiXLight fontSize={24} />}
      </div>

      <div className={styles.moblieMenu} style={{ width: !navOpen && "0" }}>
        <Link style={pathname === "/" && selectedStyle} href="/">
          Home
        </Link>
        <Link href="/catalog">Catalog</Link>
      </div>
      <div className={styles.linksContainer}>
        <Link className={styles.logo} href="/">
          Logo
        </Link>
        <div className={styles.pagesContainer}>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <Link href="#">
          <PiMagnifyingGlassLight fontSize={26} className={styles.iconLink} />
        </Link>
        <Link href="/cart">
          <PiBag fontSize={26} className={styles.iconLink} />
        </Link>
      </div>
    </nav>
  );
}
