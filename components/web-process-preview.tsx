"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Lightbulb, Target, HelpCircle, Calendar, LayoutDashboard, Activity, Smartphone, Shield, Globe, Rocket, Zap, TrendingUp } from "lucide-react"

export function WebProcessPreview() {
    const [currentSection, setCurrentSection] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSection(prev => (prev + 1) % 3)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const sections = [
        // SECTION 1: VISION (Discovery Phase)
        {
            content: (
                <div className="w-full h-full bg-[#0a0a0a] p-4 flex flex-col">
                    {/* Label - BIGGER */}
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-2">
                        Phase 1 — Discovery
                    </div>

                    {/* Hero */}
                    <div className="text-center mb-3">
                        <h1 className="text-[16px] font-semibold text-white/90 mb-1 tracking-tight">
                            Understanding Your Vision
                        </h1>
                        <p className="text-[10px] text-white/50">
                            Let's discover what you need
                        </p>
                    </div>

                    {/* Discovery Questions Grid */}
                    <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="border border-white/15 border-dashed rounded-lg p-2">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <Lightbulb className="w-4 h-4 text-white/40" strokeWidth={1.5} />
                                <span className="text-[9px] text-white/70 font-medium">What's your main goal?</span>
                            </div>
                            <div className="h-5 border border-white/10 rounded bg-white/5" />
                        </div>
                        <div className="border border-white/15 border-dashed rounded-lg p-2">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <Target className="w-4 h-4 text-white/40" strokeWidth={1.5} />
                                <span className="text-[9px] text-white/70 font-medium">Who is your audience?</span>
                            </div>
                            <div className="h-5 border border-white/10 rounded bg-white/5" />
                        </div>
                        <div className="border border-white/15 border-dashed rounded-lg p-2">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <HelpCircle className="w-4 h-4 text-white/40" strokeWidth={1.5} />
                                <span className="text-[9px] text-white/70 font-medium">What problem to solve?</span>
                            </div>
                            <div className="h-5 border border-white/10 rounded bg-white/5" />
                        </div>
                        <div className="border border-white/15 border-dashed rounded-lg p-2">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <Calendar className="w-4 h-4 text-white/40" strokeWidth={1.5} />
                                <span className="text-[9px] text-white/70 font-medium">What's your timeline?</span>
                            </div>
                            <div className="h-5 border border-white/10 rounded bg-white/5" />
                        </div>
                    </div>
                </div>
            )
        },

        // SECTION 2: DESIGN (Features & Execution)
        {
            content: (
                <div className="w-full h-full bg-[#0a0a0a] p-4 flex flex-col relative overflow-hidden">
                    {/* Subtle background accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/8 via-transparent to-[#8b5cf6]/8" />

                    {/* Label - BIGGER */}
                    <div className="text-[10px] font-bold text-[#8b5cf6]/80 uppercase tracking-wider mb-2 relative z-10">
                        Phase 2 — Design
                    </div>

                    {/* Hero */}
                    <div className="text-center mb-3 relative z-10">
                        <h1 className="text-[16px] font-bold mb-1 tracking-tight bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                            Designing the Experience
                        </h1>
                        <p className="text-[10px] text-white/60">
                            Features and functionality
                        </p>
                    </div>

                    {/* Feature Components Grid */}
                    <div className="grid grid-cols-2 gap-2 flex-1 relative z-10">
                        <div className="bg-[#1a1a1a] border border-[#6366f1]/30 rounded-lg p-2 flex items-center gap-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1]/30 to-[#8b5cf6]/30 rounded-lg flex items-center justify-center shrink-0">
                                <LayoutDashboard className="w-3.5 h-3.5 text-[#8b5cf6]" strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[9px] text-white/90 font-semibold">User Dashboard</div>
                                <div className="text-[7px] text-white/50">Interactive overview</div>
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] border border-[#8b5cf6]/30 rounded-lg p-2 flex items-center gap-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-[#8b5cf6]/30 to-[#6366f1]/30 rounded-lg flex items-center justify-center shrink-0">
                                <Activity className="w-3.5 h-3.5 text-[#6366f1]" strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[9px] text-white/90 font-semibold">Real-time Analytics</div>
                                <div className="text-[7px] text-white/50">Live data insights</div>
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] border border-[#6366f1]/30 rounded-lg p-2 flex items-center gap-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-[#6366f1]/30 to-[#8b5cf6]/30 rounded-lg flex items-center justify-center shrink-0">
                                <Smartphone className="w-3.5 h-3.5 text-[#8b5cf6]" strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[9px] text-white/90 font-semibold">Mobile Responsive</div>
                                <div className="text-[7px] text-white/50">Works everywhere</div>
                            </div>
                        </div>
                        <div className="bg-[#1a1a1a] border border-[#8b5cf6]/30 rounded-lg p-2 flex items-center gap-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-[#8b5cf6]/30 to-[#6366f1]/30 rounded-lg flex items-center justify-center shrink-0">
                                <Shield className="w-3.5 h-3.5 text-[#6366f1]" strokeWidth={2} />
                            </div>
                            <div>
                                <div className="text-[9px] text-white/90 font-semibold">Admin Panel</div>
                                <div className="text-[7px] text-white/50">Full control center</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // SECTION 3: PRODUCTION (Live Website)
        {
            content: (
                <div className="w-full h-full bg-[#0a0a0a] flex flex-col relative overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/15 via-[#0a0a0a] to-[#8b5cf6]/15" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 bg-[#6366f1]/20 rounded-full blur-3xl" />

                    {/* Browser Chrome */}
                    <div className="bg-[#1a1a1a] px-2 py-1.5 flex items-center gap-2 border-b border-white/10 relative z-10">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2 h-2 rounded-full bg-[#28ca41]" />
                        </div>
                        <div className="flex-1 bg-[#2a2a2a] rounded-md px-2 py-0.5 flex items-center gap-1">
                            <Globe className="w-3 h-3 text-green-500" />
                            <span className="text-[9px] text-white/70">https://yourwebsite.com</span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/40 rounded-full px-2 py-0.5">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[7px] text-green-400 font-bold">LIVE</span>
                        </div>
                    </div>

                    {/* Website Content */}
                    <div className="flex-1 p-4 relative z-10">
                        {/* Hero */}
                        <div className="text-center mb-3">
                            <h1 className="text-[15px] font-bold mb-1 tracking-tight bg-gradient-to-r from-white via-[#c7d2fe] to-[#a78bfa] bg-clip-text text-transparent">
                                Welcome to Your Website
                            </h1>
                            <p className="text-[9px] text-white/70 mb-2">
                                Modern solutions for modern businesses
                            </p>
                            <button className="bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] text-white text-[9px] px-5 py-2 rounded-lg font-semibold shadow-xl shadow-[#6366f1]/40">
                                Get Started →
                            </button>
                        </div>

                        {/* Feature Cards - Glass Effect */}
                        <div className="flex gap-2">
                            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 text-center shadow-2xl">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg mx-auto mb-1 flex items-center justify-center shadow-lg shadow-[#6366f1]/30">
                                    <Rocket className="w-3 h-3 text-white" strokeWidth={2} />
                                </div>
                                <div className="text-[8px] text-white font-semibold">Fast Launch</div>
                                <div className="text-[6px] text-white/50">Quick deploy</div>
                            </div>
                            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 text-center shadow-2xl">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-lg mx-auto mb-1 flex items-center justify-center shadow-lg shadow-[#8b5cf6]/30">
                                    <Zap className="w-3 h-3 text-white" strokeWidth={2} />
                                </div>
                                <div className="text-[8px] text-white font-semibold">High Speed</div>
                                <div className="text-[6px] text-white/50">Optimized</div>
                            </div>
                            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 text-center shadow-2xl">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg mx-auto mb-1 flex items-center justify-center shadow-lg shadow-[#6366f1]/30">
                                    <TrendingUp className="w-3 h-3 text-white" strokeWidth={2} />
                                </div>
                                <div className="text-[8px] text-white font-semibold">Scalable</div>
                                <div className="text-[6px] text-white/50">Grows with you</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ]

    return (
        <div className="w-full h-full flex items-center justify-center p-2">
            <div className="relative w-full max-w-[550px]">

                {/* Laptop Frame Image */}
                <img
                    src="/laptopreal.png"
                    alt="Laptop frame"
                    className="w-full h-auto relative z-10"
                />

                {/* Screen Content Overlay */}
                <div
                    className="absolute z-0 overflow-hidden rounded-sm"
                    style={{
                        left: '10.6%',
                        top: '4.5%',
                        width: '79%',
                        height: '83.4%',
                    }}
                >
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentSection}
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0"
                        >
                            {sections[currentSection].content}
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Dots */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSection ? 'bg-[#8b5cf6] w-4' : 'bg-white/30 w-1.5'}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
