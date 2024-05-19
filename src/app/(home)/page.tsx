import FindTutor from "./components/FindTutor";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import { Spotlight } from "./components/ui/Spotlight";

export default function Home() {
  return (
     <>
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.07] overflow-x-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 obsalute"
        fill="white"
      />
        <Hero/>
        <FindTutor />
        <Testimonials/>
      </div>
      </>
  );
}
