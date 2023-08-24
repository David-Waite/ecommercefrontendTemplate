import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PrimaryButton from "./Components/UI/PrimaryButton/PrimaryButton";
import ProductGrid from "./Components/UI/ProductsGrid/ProductGrid";

export default function Home() {
  const DUMMYFEATUREDPRODUCTS = [
    {
      id: "1",
      image: "",
      name: "dummy Product",
      price: 123.0,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <h1>Example Product Collection</h1>
        <Link href={"#"}>
          <PrimaryButton text={"Shop Now"} />
        </Link>
      </div>

      <h2 className={styles.featuredProductHeading}>Featured Products</h2>
      <ProductGrid></ProductGrid>
    </main>
  );
}
