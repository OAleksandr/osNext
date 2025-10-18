"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    pathname === path
      ? "text-blue-700 font-semibold underline"
      : "text-blue-600 hover:underline";

  return (
    <nav className="bg-gray-100 p-4 shadow flex gap-4">
      <Link href="/" className={linkStyle("/")}>
        Home
      </Link>
      <Link href="/about" className={linkStyle("/about")}>
        About
      </Link>
    </nav>
  );
}
