import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, Code } from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12 relative">
                <div className="container mx-auto px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">AISIDE</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Building the future with AI
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-8">
                <div className="container mx-auto px-6">
                    <p className="text-2xl md:text-3xl text-white/80 max-w-4xl leading-relaxed">
                        We're AISIDE, an AI implementation studio based in Tallinn, Estonia. A small team of developers with deep AI expertise, transforming visions into reality using cutting-edge technology.
                    </p>
                </div>
            </section>

            {/* Main Content - 3 Columns */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Who We Are */}
                        <div className="glass rounded-2xl p-6">
                            <h2 className="text-lg font-bold mb-3 text-orange-400">Who We Are</h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                AISIDE is a boutique AI studio specializing in custom visualizations, web development, and intelligent automation. We stay ahead of the AI curve, constantly exploring and implementing the latest tools to deliver exceptional results for our clients.
                            </p>
                        </div>

                        {/* What We Do */}
                        <div className="glass rounded-2xl p-6">
                            <h2 className="text-lg font-bold mb-3 text-orange-400">What We Do</h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                We build AI-powered solutions for real estate, e-commerce, hospitality, and more. 3D visualizations, custom web applications, automation tools. We handle everything from concept to deployment with direct execution and no overhead.
                            </p>
                        </div>

                        {/* How We Work */}
                        <div className="glass rounded-2xl p-6">
                            <h2 className="text-lg font-bold mb-3 text-orange-400">How We Work</h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Fast iteration, direct communication, transparent pricing. We understand your vision, then leverage cutting-edge AI tools and modern development practices to bring it to life. Results in days, not weeks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                            <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">Based in Tallinn, Estonia</span>
                        </div>
                        <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                            <Users className="w-5 h-5 text-orange-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">Small team, full-stack capabilities</span>
                        </div>
                        <div className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                            <Code className="w-5 h-5 text-orange-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">Next.js, React, AI, 3D visualization</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to start your project?
                    </h2>
                    <Link
                        href="/#contact"
                        className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all"
                    >
                        Book a Call
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
