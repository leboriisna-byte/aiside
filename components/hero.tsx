"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { AutomationDashboard } from "@/components/automation-dashboard"
import { LaptopShowcase } from "@/components/laptop-showcase"

export function Hero() {
  const [selectedSystem, setSelectedSystem] = useState<string>('renders')
  const [renderStep, setRenderStep] = useState<'front' | 'animation' | 'backwards'>('front')

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

        {/* Proof Surface Container with Dynamic Sizing */}
        <motion.div
          animate={{
            maxWidth: selectedSystem === 'renders' ? '700px' : '896px',
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto mb-16 relative w-full"
        >
          <motion.div
            animate={{
              height: selectedSystem === 'renders' ? '350px' : '500px',
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
          >
            {/* Renders Proof Sequential Surface */}
            <motion.div
              key="renders-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedSystem === 'renders' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onMouseLeave={() => selectedSystem === 'renders' && setRenderStep('front')}
              className={`absolute inset-0 flex items-center justify-center overflow-hidden ${selectedSystem === 'renders' ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Contained Media Wrapper - Tight Fit with cinematic filters */}
                <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
                  {renderStep === 'front' && (
                    <motion.img
                      key="front-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      exit={{ opacity: 0 }}
                      src="/front.jpeg"
                      alt="System Start"
                      className="w-full h-full object-cover grayscale-[0.05] brightness-[0.8] contrast-[1.1]"
                    />
                  )}
                  {renderStep === 'animation' && (
                    <motion.video
                      key="animation-video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      exit={{ opacity: 0 }}
                      src="/animation.mp4"
                      autoPlay
                      muted
                      playsInline
                      onEnded={() => setRenderStep('backwards')}
                      className="w-full h-full object-cover brightness-[0.9] contrast-[1.1]"
                    />
                  )}
                  {renderStep === 'backwards' && (
                    <motion.img
                      key="backwards-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      exit={{ opacity: 0 }}
                      src="/backwards.jpeg"
                      alt="System Result"
                      className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
                    />
                  )}

                  {/* Cinematic Vignette Overlay - Toned Down */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/30" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                </div>

                {/* Absolute Button Layer */}
                {renderStep === 'front' && selectedSystem === 'renders' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 z-20"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setRenderStep('animation');
                      }}
                      className="px-4 py-1.5 bg-black/80 hover:bg-black text-white/70 hover:text-white rounded-full text-[9px] tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 border border-white/[0.05] shadow-[0_0_20px_-5px_rgba(107,92,255,0.6)] backdrop-blur-md"
                    >
                      back view
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Web Proof Placeholder */}
            {/* Web Proof Placeholder */}
            {/* Laptop Showcase */}
            <div className={`absolute inset-0 p-4 transition-opacity duration-300 ${selectedSystem === 'web' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <LaptopShowcase />
            </div>

            {/* Automation Proof Placeholder */}
            {/* Automation Dashboard */}
            <div className={`absolute inset-0 p-4 md:p-8 transition-opacity duration-300 ${selectedSystem === 'automation' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <AutomationDashboard />
            </div>

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
          </motion.div>
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
