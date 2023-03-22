import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        <image
          src="/images/pokeboll.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <p>logo</p>
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
