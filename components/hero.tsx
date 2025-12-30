"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Building2 } from 'lucide-react'
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#2F2A4A]/15 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#8B7FFF]/15 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#6B5CFF]/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#6B5CFF 1px, transparent 1px), linear-gradient(90deg, #6B5CFF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Building2 className="w-4 h-4 text-[#6B5CFF]" />
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Built for Real Estate & Local Businesses
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
        >
          AI systems for real estate and local businesses that want{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B5CFF] via-[#8B7FFF] to-[#A89FFF]">
            more leads, faster decisions, and smarter experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Voice agents, AI-powered property visualization, smart websites, and data automation built to convert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#lead-capture"
            className="group px-10 py-5 bg-[#6B5CFF] text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:bg-[#8B7FFF] shadow-[0_0_40px_-10px_rgba(107,92,255,0.6)] hover:shadow-[0_0_50px_-5px_rgba(107,92,255,0.8)]"
          >
            <span className="flex items-center gap-2">
              Get a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="#proof"
            className="px-10 py-5 glass rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
          >
            See What We've Built
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </motion.div>
    </section>
  )
}
