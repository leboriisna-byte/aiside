"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { AutomationDashboard } from "@/components/automation-dashboard"
import { WebProcessPreview } from "@/components/web-process-preview"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { VideoContentPreview } from "@/components/video-content-preview"

export function Hero() {
  const [selectedSystem, setSelectedSystem] = useState<string>('web')

  const systems = [
    { id: 'web', label: 'Web' },
    { id: 'renders', label: 'Renders' },
    { id: 'automation', label: 'Automation' },
    { id: 'content', label: 'Content' }
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
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
          className="mb-8"
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

        {/* Proof Surface Container with Dynamic Sizing */}
        <div
          className="mx-auto mb-12 relative w-full max-w-4xl px-2 sm:px-4"
        >
          <div
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
          >
            {/* Renders Proof - Before/After Slider */}
            <div
              className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${selectedSystem === 'renders' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="relative h-full w-full max-w-[600px] rounded-xl overflow-hidden border-[10px] border-black shadow-2xl shadow-[#6B5CFF]/20 bg-black">
                <BeforeAfterSlider
                  beforeImage="/701.png"
                  afterImage="/701 3D.jpeg"
                  beforeLabel="2D Plan"
                  afterLabel="3D Render"
                />
              </div>
            </div>

            {/* Web Proof Placeholder */}
            {/* Web Proof Placeholder */}
            {/* Web Process Preview */}
            <div className={`absolute inset-0 p-4 transition-opacity duration-300 ${selectedSystem === 'web' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <WebProcessPreview />
            </div>

            {/* Automation Proof Placeholder */}
            {/* Automation Dashboard */}
            <div className={`absolute inset-0 p-4 md:p-8 transition-opacity duration-300 ${selectedSystem === 'automation' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <AutomationDashboard />
            </div>

            {/* Content Proof - Video Player */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${selectedSystem === 'content' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <VideoContentPreview />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#lead-capture"
            className="group px-10 py-5 bg-[#6B5CFF] text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-[#7B6CFF] hover:-translate-y-0.5 shadow-[0_0_40px_-10px_rgba(107,92,255,0.6)] hover:shadow-[0_10px_60px_-5px_rgba(107,92,255,0.8)]"
          >
            <span className="flex items-center gap-2">
              Let's Talk
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


    </section>
  )
}
