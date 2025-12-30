"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Phone, Building2, Globe, Database } from 'lucide-react'

const services = [
  {
    icon: <Phone className="w-8 h-8 text-[#6B5CFF]" />,
    title: "Voice Agents",
    description: "AI voice assistants that answer calls, qualify leads, book viewings, and follow up automatically.",
    outcome: "More qualified leads, 24/7 availability"
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#6B5CFF]" />,
    title: "AI Property Visualization",
    description: "Interactive 3D floor plans, style-based interior design packages, and immersive apartment exploration.",
    outcome: "Faster buyer decisions, higher engagement"
  },
  {
    icon: <Globe className="w-8 h-8 text-[#6B5CFF]" />,
    title: "Smart Websites",
    description: "High-conversion websites integrated with AI agents, lead capture, and automation.",
    outcome: "More conversions, automated follow-ups"
  },
  {
    icon: <Database className="w-8 h-8 text-[#6B5CFF]" />,
    title: "Data Scrapers & Automation",
    description: "Custom scrapers and pipelines that turn raw data into business leverage.",
    outcome: "Competitive intelligence, automated workflows"
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What We Build
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#6B5CFF] to-[#8B7FFF] rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group hover:border-[#6B5CFF]/30 transition-all duration-300">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-[#6B5CFF]/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-sm text-[#6B5CFF] font-medium">
                    → {service.outcome}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
