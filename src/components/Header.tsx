import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 right-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rigs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

   

    {/* Nav Bar */}
    <nav className="absolute top-0 right-0 w-full flex justify-end p-4 text-white z-10">
      {/* Adjust spacing and styling as needed */}
      <ul className="flex space-x-10 text-lg font-semibold">
        <li>
          <Link
            href="/"
            className="px-4 py-2 rounded-md tracking-wide hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="pages/about"
            className="px-4 py-2 rounded-md tracking-wide hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="pages/services"
            className="px-4 py-2 rounded-md tracking-wide hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="pages/contactUs"
            className="px-4 py-2 rounded-md tracking-wide hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>




      {/* Centered Text */}
      <div className="flex items-center justify-start h-full px-10">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap">
            Revolutionizing Seismic Data Management
          </h1>
          <p className="text-lg md:text-xl whitespace-nowrap">
            A leader in modernizing data storage solutions for the oil and gas industry.
          </p>
        </div>
      </div>
    </main>
  );
}
