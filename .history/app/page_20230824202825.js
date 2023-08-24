import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import PrimaryButton from "./Components/UI/PrimaryButton/PrimaryButton";
import ProductGrid from "./Components/UI/ProductsGrid/ProductGrid";
import ProductCard from "./Components/UI/ProductCard/ProductCard";

export default function Home() {
  const DUMMYFEATUREDPRODUCTS = [
    {
      id: "1",
      image: "",
      name: "Dummy Product",
      price: 123.0,
    },
    {
      id: "2",
      image: "",
      name: "Dummy Product",
      price: 123.0,
    },
    {
      id: "3",
      image: "",
      name: "Dummy Product",
      price: 123.0,
    },
    {
      id: "4",
      image: "",
      name: "Dummy Product",
      price: 123.0,
    },
    {
      id: "5",
      image: "",
      name: "Dummy Product",
      price: 123.0,
    },
  ];

  const featuredProducts = DUMMYFEATUREDPRODUCTS.map(
    ({ id, image, name, price }) => {
      return (
        <ProductCard
          key={id}
          image={image}
          name={name}
          price={price}
          id={id}
          fontSize={"var(--fontMinus1)"}
        />
      );
    }
  );
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <h1>Example Product Collection</h1>
        <Link href={"#"}>
          <PrimaryButton text={"Shop Now"} />
        </Link>
      </div>

      <div className={styles.featuredProductsContainer}>
        <h2 className={styles.featuredProductHeading}>Featured Products</h2>
        <ProductGrid>{featuredProducts}</ProductGrid>
      </div>

      <PrimaryButton
        text={"Shop all Products"}
        dark={true}
        fontSize={"var(--fontBase)"}
      />
    </main>
  );
}
