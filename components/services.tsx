"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Box, Code2, Bot, Sparkles } from 'lucide-react'

const services = [
  {
    icon: <Box className="w-8 h-8 text-orange-400" />,
    title: "3D Visualization & Rendering",
    description: "AI-powered architectural renders and interior design for real estate. Bring properties to life before they're built.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    title: "Custom Web Development",
    description: "Modern, fast websites built with Next.js and AI integration. Designed to convert visitors into customers.",
  },
  {
    icon: <Bot className="w-8 h-8 text-amber-500" />,
    title: "AI Agents & Automation",
    description: "Custom AI solutions to streamline your business operations. Save time and reduce costs with intelligent automation.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-orange-300" />,
    title: "Content Creation",
    description: "AI-generated visuals, videos, and marketing materials. High-quality content at a fraction of the traditional cost.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-orange-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-orange-400 transition-colors">
                  Learn more <div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
