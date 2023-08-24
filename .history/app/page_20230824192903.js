import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PrimaryButton from "./Components/UI/PrimaryButton/PrimaryButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <h1>Example Product Collection</h1>
        <Link href={"#"}>
          <PrimaryButton text={"Shop Now"} />
        </Link>
      </div>

      <h2></h2>
    </main>
  );
}
