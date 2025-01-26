import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

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

      {/* Components */}
      <NavBar />
      <HeroSection />
    </main>
  );
}
