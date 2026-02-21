import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Mindset from "@/components/Mindset";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* ─── Main Portfolio Page ────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-[#e2e8f0]">
      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Mindset />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
