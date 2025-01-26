"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Pushed to left edge */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Your Logo</span>
          </div>

          {/* Navigation Links - Pushed to right edge */}
          <ul className="flex space-x-4 md:space-x-6 text-lg font-semibold">
            <li>
              <Link href="/" className="px-3 py-2 hover:bg-gray-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-3 py-2 hover:bg-gray-700 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="px-3 py-2 hover:bg-gray-700 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="px-3 py-2 hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}