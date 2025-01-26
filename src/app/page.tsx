export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rigs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Company</h1>
        <p className="text-lg mb-6">
          We deliver innovative solutions tailored to your needs.
        </p>
        <a
          href="#services"
          className="px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
