"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
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
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'linear-gradient(#6B5CFF 1px, transparent 1px), linear-gradient(90deg, #6B5CFF 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            AI infrastructure for{" "}
            <span className="block mt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B5CFF] via-[#8B7FFF] to-[#A89FFF]">
                modern businesses
              </span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-6"
        >
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed">
            Voice agents, AI-powered experiences, smart websites, and data automation built to scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link
            href="#lead-capture"
            className="group px-10 py-5 bg-[#6B5CFF] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-[#7B6CFF] hover:-translate-y-0.5 shadow-[0_0_40px_-10px_rgba(107,92,255,0.6)] hover:shadow-[0_10px_60px_-5px_rgba(107,92,255,0.8)]"
          >
            <span className="flex items-center gap-2">
              Get a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            href="#proof"
            className="group px-10 py-5 text-white/70 rounded-full font-semibold text-lg transition-all duration-300 hover:text-white relative overflow-hidden"
          >
            <span className="relative z-10">See What We've Built</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5CFF] to-transparent group-hover:w-full transition-all duration-500" />
          </Link>
        </motion.div>
      </div>

      {/* Gradient Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/30 to-white/0"
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  )
}
