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
            <a href="#" className="hover:underline tracking-wide">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline tracking-wide">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:underline tracking-wide">Services</a>
          </li>
          <li>
            <a href="#" className="hover:underline tracking-wide">Contact Us</a>
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
