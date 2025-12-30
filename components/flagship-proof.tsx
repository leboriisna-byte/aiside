"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export function FlagshipProof() {
  return (
    <section id="proof" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - Narrative + Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Built for real-world scale
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Complete AI visualization platform for Eedu Apartments—Estonia's tallest residential building.
              Interactive 3D floor plans, custom interior design systems, and immersive property exploration
              deployed for live sales operations.
            </p>

            {/* Proof Metrics */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/10">
              <div>
                <div className="text-2xl font-bold text-white mb-1">2 weeks</div>
                <div className="text-sm text-white/50">Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">Custom AI</div>
                <div className="text-sm text-white/50">Visualization</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">Live</div>
                <div className="text-sm text-white/50">Production use</div>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-3">
              <span className="text-xs text-white/50 font-medium">3D Visualization</span>
              <span className="text-white/20">·</span>
              <span className="text-xs text-white/50 font-medium">Next.js</span>
              <span className="text-white/20">·</span>
              <span className="text-xs text-white/50 font-medium">AI Integration</span>
              <span className="text-white/20">·</span>
              <span className="text-xs text-white/50 font-medium">Custom Systems</span>
            </div>

            {/* Soft CTA */}
            <div className="pt-4">
              <Link
                href="#lead-capture"
                className="group inline-flex items-center gap-2 text-[#6B5CFF] hover:text-[#8B7FFF] transition-colors"
              >
                <span className="text-sm font-medium">See how we'd approach your project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Immersive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-[#2F2A4A]/20 to-[#6B5CFF]/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/HEROVIDEO copy.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* Live System Label */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] animate-pulse" />
                      <span className="text-xs font-medium text-white/90">Live system preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
