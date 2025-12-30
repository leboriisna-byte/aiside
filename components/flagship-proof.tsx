"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Clock, Zap, Users } from 'lucide-react'

export function FlagshipProof() {
  return (
    <section id="proof" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#1A1730]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Built for landmark-scale projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl"
          >
            We built the complete AI-powered visualization platform for Eedu Apartments — Estonia's tallest residential skyscraper. Scale, precision, and real estate credibility.
          </motion.p>
        </div>

        {/* Eedu Apartments Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-0 overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B5CFF]/20 to-[#8B7FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <span className="text-sm font-medium text-[#6B5CFF] mb-4 block uppercase tracking-wider">
                    Luxury Real Estate Visualization
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    Eedu Apartments
                  </h3>
                  <p className="text-white/70 mb-8 max-w-md leading-relaxed">
                    AI-powered apartment visualization platform featuring interactive 3D floor plans, custom interior design with style packages, and immersive property exploration for Estonia's tallest residential building.
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 rounded-xl bg-white/5">
                      <Clock className="w-5 h-5 text-[#6B5CFF] mx-auto mb-2" />
                      <p className="text-2xl font-bold">2 weeks</p>
                      <p className="text-xs text-white/50">Delivery time</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5">
                      <Zap className="w-5 h-5 text-[#6B5CFF] mx-auto mb-2" />
                      <p className="text-2xl font-bold">AI</p>
                      <p className="text-xs text-white/50">Interior design</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5">
                      <Users className="w-5 h-5 text-[#6B5CFF] mx-auto mb-2" />
                      <p className="text-2xl font-bold">100%</p>
                      <p className="text-xs text-white/50">Client satisfied</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-medium flex-wrap">
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">3D Visualization</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Next.js</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">AI Integration</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-auto min-h-[500px] overflow-hidden bg-gradient-to-br from-[#2F2A4A]/20 to-[#6B5CFF]/20 rounded-r-2xl">
                {/* Video Section */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/HEROVIDEO copy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
