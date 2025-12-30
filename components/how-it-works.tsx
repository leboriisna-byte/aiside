"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Search, Wrench, Rocket } from 'lucide-react'

const steps = [
    {
        icon: <Search className="w-8 h-8 text-[#6B5CFF]" />,
        title: "Discovery",
        description: "We map your business, data, and goals"
    },
    {
        icon: <Wrench className="w-8 h-8 text-[#6B5CFF]" />,
        title: "Build",
        description: "We design and deploy a custom AI solution"
    },
    {
        icon: <Rocket className="w-8 h-8 text-[#6B5CFF]" />,
        title: "Deploy & Iterate",
        description: "We refine based on real usage"
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-[#6B5CFF] to-[#8B7FFF] rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <GlassCard className="h-full p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-[#6B5CFF]/10 flex items-center justify-center">
                                            <span className="text-[#6B5CFF] font-bold text-lg">{index + 1}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4">{step.icon}</div>
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
