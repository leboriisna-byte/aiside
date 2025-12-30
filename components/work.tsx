"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, Zap, Users, ArrowRight } from 'lucide-react'

export function Work() {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-orange-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 max-w-md"
            >
              Real results for real clients. See how we transform ideas into reality.
            </motion.p>
          </div>
        </div>

        {/* Eedu Apartments Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-0 overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <span className="text-sm font-medium text-orange-400 mb-4 block uppercase tracking-wider">
                    Luxury Real Estate Visualization
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    Eedu Apartments
                  </h3>
                  <p className="text-white/70 mb-8 max-w-md">
                    AI-powered apartment visualization platform featuring interactive 3D floor plans, custom interior design with style packages, and immersive property exploration.
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 rounded-xl bg-white/5">
                      <Clock className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold">2 weeks</p>
                      <p className="text-xs text-white/50">Delivery time</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5">
                      <Zap className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold">AI</p>
                      <p className="text-xs text-white/50">Interior design</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5">
                      <Users className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold">100%</p>
                      <p className="text-xs text-white/50">Client satisfied</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">3D Visualization</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Next.js</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">AI Integration</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-auto min-h-[500px] overflow-hidden bg-gradient-to-br from-orange-600/20 to-amber-600/20">
                {/* Placeholder for Eedu project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-orange-400">E</span>
                    </div>
                    <p className="text-white/40 text-sm">Eedu Apartments Project</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Why Choose Us Section */}
        <div id="about" className="mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fast Execution", desc: "Days instead of weeks", icon: "⚡" },
              { title: "Cost Effective", desc: "50-70% less than agencies", icon: "💰" },
              { title: "AI-Powered", desc: "Latest technology", icon: "🤖" },
              { title: "Full Service", desc: "Concept to delivery", icon: "🎯" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center py-8">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
