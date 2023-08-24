import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PrimaryButton from "./Components/UI/PrimaryButton/PrimaryButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <Link href={"#"}>
          <PrimaryButton text={"Shop Now"} />
        </Link>
      </div>
    </main>
  );
}
