import Link from "next/link";

export default function ProductCard({ image, name, price, id }) {
  return (
    <Link href={`/catalog/product${id}`}>
      <div>
        <h3></h3>
      </div>
    </Link>
  );
}
