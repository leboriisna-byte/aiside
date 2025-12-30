"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Phone, Building2, Globe, Database, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: "Phone",
    title: "Voice Agents",
    primaryOutcome: "Answer every call. Qualify every lead. Book viewings automatically.",
    supporting: "Deployed for real sales teams handling property inquiries 24/7.",
    microCta: "See demo",
    link: "#lead-capture"
  },
  {
    icon: "Building2",
    title: "AI Property Visualization",
    primaryOutcome: "Turn floor plans into immersive 3D experiences buyers can explore.",
    supporting: "Designed for live property listings with style-based interior packages.",
    microCta: "View example",
    link: "#proof"
  },
  {
    icon: "Globe",
    title: "Smart Websites",
    primaryOutcome: "High-conversion sites that capture leads and route them intelligently.",
    supporting: "Built to integrate with voice agents and automation from day one.",
    microCta: "Explore system",
    link: "#proof"
  },
  {
    icon: "Database",
    title: "Data Scrapers & Automation",
    primaryOutcome: "Extract market data. Monitor competitors. Build leverage while you sleep.",
    supporting: "Built to run without supervision across property platforms and listings.",
    microCta: "How it works",
    link: "#how-it-works"
  },
]

const getIcon = (iconName: string) => {
  const iconProps = { className: "w-6 h-6 text-[#6B5CFF]/60" }
  switch (iconName) {
    case "Phone": return <Phone {...iconProps} />
    case "Building2": return <Building2 {...iconProps} />
    case "Globe": return <Globe {...iconProps} />
    case "Database": return <Database {...iconProps} />
    default: return null
  }
}

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-white/95"
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            Deployable AI systems for real estate operations. Not consulting. Not prototypes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group hover:bg-white/[0.03] transition-all duration-300">
                <div className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/[0.02] w-fit group-hover:bg-white/[0.04] transition-colors duration-300">
                    {getIcon(service.icon)}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white/90 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-white/80 mb-2 leading-relaxed">
                    {service.primaryOutcome}
                  </p>

                  <p className="text-sm text-white/50 leading-relaxed">
                    {service.supporting}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white/70 transition-colors group/link"
                  >
                    <span>{service.microCta}</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
