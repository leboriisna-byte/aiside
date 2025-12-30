import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#6B5CFF]/30">
      <Navbar />
      <Hero />
      <Services />
      <Work />

      {/* Call to Action Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to start <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B5CFF] via-[#8B7FFF] to-[#A89FFF]">your project?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business. Book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 hover:bg-[#6B5CFF] hover:text-white transition-all shadow-[0_0_40px_-10px_rgba(107,92,255,0.5)]">
              Book a Call
            </button>
            <a
              href="mailto:hello@aiside.ee"
              className="px-10 py-5 glass rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              hello@aiside.ee
            </a>
          </div>
        </div>

        {/* Background Gradient for CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-[#2F2A4A]/20 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  )
}
