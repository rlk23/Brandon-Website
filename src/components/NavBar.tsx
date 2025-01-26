import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="absolute top-0 right-0 w-full flex justify-end p-4 text-white z-10">
      <ul className="flex space-x-10 text-lg font-semibold">
        <li>
          <Link href="/" className="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contactUs" className="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
