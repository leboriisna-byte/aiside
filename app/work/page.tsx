import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Clock, Zap, Users, ExternalLink, Sparkles, Code, Bot } from 'lucide-react'

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
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
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">Work</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Real projects, real results. See how we transform ideas into reality with AI-powered solutions.
                    </p>
                </div>
            </section>

            {/* Featured: Eedu Apartments */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <span className="text-sm font-medium text-orange-400 uppercase tracking-wider">Featured Project</span>
                    </div>

                    <div className="glass rounded-3xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Video */}
                            <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                >
                                    <source src="/herovideo.enhanced.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden" />
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <span className="text-sm font-medium text-orange-400 mb-4 block uppercase tracking-wider">
                                    Luxury Real Estate Website
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                    Eedu Apartments
                                </h2>
                                <p className="text-white/70 mb-8 text-lg leading-relaxed">
                                    AI-powered apartment visualization platform featuring interactive 3D floor plans,
                                    custom interior design with multiple style packages, and immersive property exploration
                                    for a luxury high-rise development in Tallinn, Estonia.
                                </p>


                                <div className="flex flex-wrap gap-3 mb-8">
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Next.js</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">3D Visualization</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">AI Integration</span>
                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Interactive UI</span>
                                </div>

                                <a
                                    href="https://eedu-three.vercel.app/"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors w-fit"
                                >
                                    View Live Project <ExternalLink className="w-4 h-4" />
                                </a>
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
                        className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
