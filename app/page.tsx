import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FlagshipProof } from "@/components/flagship-proof"
import { HowItWorks } from "@/components/how-it-works"
import { LeadCapture } from "@/components/lead-capture"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#6B5CFF]/30">
      <Navbar />
      <Hero />
      <Services />
      <FlagshipProof />
      <HowItWorks />
      <LeadCapture />
      <Footer />
    </main>
  )
}
