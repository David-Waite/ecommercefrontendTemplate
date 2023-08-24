import Link from "next/link";
import { PiMagnifyingGlassLight, PiBag } from "react-icons/pi";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link className={styles.logo} href="/">
          Logo
        </Link>
        <div className={styles.linkContainer}>
          <Link href="/">Home</Link>
          <Link href="#">Catalog</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
      <div className={styles.iconContainer}>
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