import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ image, name, price, id }) {
  return (
    <Link href={`/catalog/product${id}`}>
      <div>
        <Image src={image} fill={true} alt={name} />
      </div>
      <p>{name}</p>
      <p>{price}</p>
    </Link>
  );
}
