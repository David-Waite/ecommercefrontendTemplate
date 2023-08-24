import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div>
        <Link href="/">Logo</Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="#">Catalog</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
