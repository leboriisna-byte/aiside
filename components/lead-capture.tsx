"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { useState } from "react"

export function LeadCapture() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement form submission
        console.log('Form submitted:', formData)
    }

    return (
        <section id="lead-capture" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#6B5CFF]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            See what AI could look like for{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B5CFF] via-[#8B7FFF] to-[#A89FFF]">
                                your business
                            </span>
                        </h2>
                        <p className="text-xl text-white/60">
                            Tell us about your project and we'll show you what's possible
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#6B5CFF] transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#6B5CFF] transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#6B5CFF] transition-colors"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                                        What are you trying to build?
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#6B5CFF] transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full group px-10 py-5 bg-[#6B5CFF] text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] hover:bg-[#8B7FFF] shadow-[0_0_40px_-10px_rgba(107,92,255,0.6)] hover:shadow-[0_0_50px_-5px_rgba(107,92,255,0.8)]"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Get a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <p className="text-center text-sm text-white/40 mt-4">
                                        We reply with a tailored demo idea, not a sales script.
                                    </p>
                                </div>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
