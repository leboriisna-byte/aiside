"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export function Hero() {
  const [selectedSystem, setSelectedSystem] = useState<string>('renders')

  const systems = [
    { id: 'renders', label: 'Renders' },
    { id: 'web', label: 'Web' },
    { id: 'automation', label: 'Automation' },
    { id: 'content', label: 'Content' }
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

        {/* Interactive Mode Selector */}
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
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            {/* Renders Proof Placeholder */}
            <motion.div
              key="renders-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'renders' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'renders' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-xl border-2 border-white/20 flex items-center justify-center rotate-12">
                  <div className="w-16 h-16 rounded-lg bg-white/10" />
                </div>
                <p className="text-white/40 text-sm font-medium">3D render / Interactive visualization</p>
              </div>
            </motion.div>

            {/* Web Proof Placeholder */}
            <motion.div
              key="web-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'web' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'web' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="w-32 h-20 mx-auto rounded border-2 border-white/20 flex flex-col gap-2 p-2">
                  <div className="w-full h-2 rounded-sm bg-white/20" />
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-8 rounded-sm bg-white/10" />
                    <div className="h-8 rounded-sm bg-white/10" />
                    <div className="h-8 rounded-sm bg-white/10" />
                  </div>
                </div>
                <p className="text-white/40 text-sm font-medium">Website / UI Snapshot</p>
              </div>
            </motion.div>

            {/* Automation Proof Placeholder */}
            <motion.div
              key="automation-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'automation' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'automation' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto space-y-2 font-mono text-[10px] text-left p-4 border border-white/20 rounded bg-black/20">
                  <div className="text-[#6B5CFF]">$ workflow.execute()</div>
                  <div className="text-white/60">→ validate input</div>
                  <div className="text-white/60">→ match pattern</div>
                  <div className="text-[#6B5CFF]">ok.</div>
                </div>
                <p className="text-white/40 text-sm font-medium">Workflow execution / System log</p>
              </div>
            </motion.div>

            {/* Content Proof Placeholder */}
            <motion.div
              key="content-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'content' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 flex items-center justify-center p-8 ${selectedSystem === 'content' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-32 mx-auto rounded border-2 border-white/20 p-3 italic text-white/20 select-none">
                  <div className="h-2 w-full bg-white/10 mb-2" />
                  <div className="h-2 w-4/5 bg-white/10 mb-2" />
                  <div className="h-2 w-full bg-white/10 mb-2" />
                </div>
                <p className="text-white/40 text-sm font-medium">Generated content / Structured output</p>
              </div>
            </motion.div>
          </div>
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
    </section>
  )
}
