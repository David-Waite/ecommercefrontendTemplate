import Link from "next/link";
import { PiMagnifyingGlassLight, PiBag } from "react-icons/pi";

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
      <div>
        <Link href="#">
          <PiMagnifyingGlassLight />
        </Link>
        <Link href="#"></Link>
      </div>
    </nav>
  );
}
