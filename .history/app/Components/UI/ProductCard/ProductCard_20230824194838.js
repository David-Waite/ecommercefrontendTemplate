import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ image, name, price, id }) {
  return (
    <Link href={`/catalog/product${id}`}>
      <div className={styles.imageContainer}>
        <Image src={image} fill={true} alt={name} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price}</p>
    </Link>
  );
}
