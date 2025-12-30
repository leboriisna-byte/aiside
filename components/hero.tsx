"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export function Hero() {
  const [selectedSystem, setSelectedSystem] = useState<string>('voice')

  const systemContent: Record<string, string> = {
    voice: "Answer calls and qualify leads automatically.",
    web: "Convert visitors without adding friction.",
    data: "Turn raw data into decisions.",
    agents: "Let systems operate without supervision."
  }

  const systems = [
    { id: 'voice', label: 'Voice' },
    { id: 'web', label: 'Web' },
    { id: 'data', label: 'Data' },
    { id: 'agents', label: 'Agents' }
  ]

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
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
        {/* Main Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/90 leading-[1.15] max-w-4xl mx-auto">
            What can <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B5CFF] to-[#8B7FFF]">AISIDE</span> handle for you?
          </h1>
        </motion.div>

        {/* Interactive System Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8"
        >
          {systems.map((system) => (
            <button
              key={system.id}
              onMouseEnter={() => setSelectedSystem(system.id)}
              onClick={() => setSelectedSystem(system.id)}
              className={`
                relative text-xl md:text-2xl font-medium transition-all duration-300 cursor-pointer
                ${selectedSystem === system.id
                  ? 'text-[#6B5CFF]'
                  : 'text-white/40 hover:text-white/70'
                }
              `}
            >
              {system.label}
              <div
                className={`
                  absolute -bottom-1 left-0 h-[2px] bg-[#6B5CFF] transition-all duration-300
                  ${selectedSystem === system.id ? 'w-full' : 'w-0'}
                `}
              />
            </button>
          ))}
        </motion.div>

        {/* Proof Surface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            {/* Voice Placeholder */}
            <motion.div
              key="voice-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'voice' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'voice' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
                <p className="text-white/40 text-sm font-medium">Voice system preview</p>
              </div>
            </motion.div>

            {/* Web Placeholder */}
            <motion.div
              key="web-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'web' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'web' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-16 mx-auto rounded border-2 border-white/20 flex items-center justify-center">
                  <div className="w-16 h-10 rounded-sm bg-white/10" />
                </div>
                <p className="text-white/40 text-sm font-medium">Web system preview</p>
              </div>
            </motion.div>

            {/* Data Placeholder */}
            <motion.div
              key="data-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'data' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'data' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="mx-auto space-y-2">
                  <div className="flex gap-2 justify-center">
                    <div className="w-12 h-12 rounded border border-white/20 bg-white/5" />
                    <div className="w-12 h-12 rounded border border-white/20 bg-white/5" />
                    <div className="w-12 h-12 rounded border border-white/20 bg-white/5" />
                  </div>
                </div>
                <p className="text-white/40 text-sm font-medium">Data system preview</p>
              </div>
            </motion.div>

            {/* Agents Placeholder */}
            <motion.div
              key="agents-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'agents' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'agents' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="mx-auto flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/5" />
                  <div className="w-8 h-[2px] bg-white/20" />
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/5" />
                  <div className="w-8 h-[2px] bg-white/20" />
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/5" />
                </div>
                <p className="text-white/40 text-sm font-medium">Agents system preview</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Context Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-white/40 text-sm font-medium">→ See this system in action</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
    </section >
  )
}
