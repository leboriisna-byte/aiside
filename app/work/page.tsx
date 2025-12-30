import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Clock, Zap, Users, ExternalLink, Sparkles, Code, Bot } from 'lucide-react'

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#6B5CFF]/30">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 relative">
                <div className="container mx-auto px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B5CFF] to-[#8B7FFF]">Work</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Real projects, real results. See how we transform ideas into reality with AI-powered solutions.
                    </p>
                </div>
            </section>

            {/* Featured: Eedu Apartments */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* LEFT COLUMN - Narrative + Proof */}
                        <div className="space-y-8">
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

                            {/* View Live Project Button */}
                            <div className="pt-4">
                                <a
                                    href="https://eedu-three.vercel.app/"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B5CFF] text-white rounded-full font-semibold hover:bg-[#7B6CFF] transition-colors"
                                >
                                    View Live Project <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Immersive Visual */}
                        <div className="relative">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build - Service Capabilities */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">What We Build</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service Card 1: AI-Powered Content & Visuals */}
                        <div className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <div className="h-48 bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Sparkles className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">AI-Powered Content & Visuals</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    Photo-realistic renders, 3D visualizations, AI-generated images, videos, and marketing content. Custom visual solutions for any industry.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                                >
                                    Discuss Your Project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Service Card 2: Custom Web Development */}
                        <div className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <div className="h-48 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Code className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">Custom Web Development</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    Modern websites and web applications built with Next.js and React. Fast, responsive, and optimized with AI integration and custom functionality.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                                >
                                    Discuss Your Project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Service Card 3: AI Agents & Automation */}
                        <div className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <div className="h-48 bg-gradient-to-br from-green-600/30 to-emerald-600/30 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Bot className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">AI Agents & Automation</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">
                                    Voice agents, chatbots, data scrapers, workflow automation, and intelligent tools to streamline operations and scale your business.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium text-sm transition-colors"
                                >
                                    Discuss Your Project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Want to be our next success story?
                    </h2>
                    <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto">
                        Let's discuss your project and see how AI can transform your business.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-[#6B5CFF] hover:text-white transition-all"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
