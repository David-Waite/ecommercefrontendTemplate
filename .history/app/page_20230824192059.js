import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <Link href={"#"}>Shop Now</Link>
      </div>
    </main>
  );
}