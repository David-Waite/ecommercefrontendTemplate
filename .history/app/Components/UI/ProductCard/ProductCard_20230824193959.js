import Link from "next/link";

export default function ProductCard({ image, name, price, id }) {
  return (
    <Link href={`/catalog/product${id}`}>
      <div></div>
      <p>{name}</p>
      <p>{price}</p>
    </Link>
  );
}
