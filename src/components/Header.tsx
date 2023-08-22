import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>FootieHub V3</h1>
      <nav>
        <ul>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>Newsletters</li>
          <li>Videos</li>
          <li>Podcasts</li>
          <li>resources</li>
        </ul>
      </nav>
    </header>
  );
}
