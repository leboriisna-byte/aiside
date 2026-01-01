"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, CheckCircle, Zap, Bot, Mail, FileText, ArrowUpRight } from 'lucide-react'

export function AutomationDashboard() {
    const [timeSaved, setTimeSaved] = useState(4.5)

    const [activeWorkflows, setActiveWorkflows] = useState([
        { id: "emails", label: "Send automated emails", color: "bg-orange-500", progress: 75 },
        { id: "docs", label: "Process documents", color: "bg-blue-500", progress: 45 },
    ])

    const [latestAction, setLatestAction] = useState({ text: "Welcome email sent", icon: Mail })

    // Increment time saved
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeSaved(prev => {
                const next = prev + 0.1
                return next > 6.0 ? 4.5 : Number(next.toFixed(1))
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Simulate workflow progress
    useEffect(() => {
        const allWorkflows = [
            { id: "emails", label: "Send automated emails", color: "bg-orange-500" },
            { id: "docs", label: "Process documents", color: "bg-blue-500" },
            { id: "reports", label: "Generate reports", color: "bg-purple-500" },
            { id: "crm", label: "Sync CRM contacts", color: "bg-green-500" },
        ]

        const interval = setInterval(() => {
            setActiveWorkflows(prev => {
                return prev.map(workflow => {
                    const increment = Math.random() * 0.8 + 0.3
                    const newProgress = workflow.progress + increment

                    if (newProgress >= 100) {
                        const currentIds = prev.map(w => w.id)
                        const available = allWorkflows.filter(w => !currentIds.includes(w.id))
                        const nextTemplate = available.length > 0
                            ? available[Math.floor(Math.random() * available.length)]
                            : allWorkflows[Math.floor(Math.random() * allWorkflows.length)]
                        return { ...nextTemplate, progress: 0 }
                    }

                    return { ...workflow, progress: newProgress }
                })
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    // Update latest action
    useEffect(() => {
        const possibleActions = [
            { text: "Welcome email sent", icon: Mail },
            { text: "Invoice processed", icon: FileText },
            { text: "Report generated", icon: Activity },
            { text: "Contact synced", icon: CheckCircle },
        ]

        const interval = setInterval(() => {
            setLatestAction(possibleActions[Math.floor(Math.random() * possibleActions.length)])
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full h-full bg-[#0f0f0f] rounded-xl overflow-hidden flex flex-col border border-white/10">
            {/* Header - Compact */}
            <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-orange-500" />
                    <span className="font-bold text-white text-sm">Automation Hub</span>
                    <span className="flex h-2 w-2 relative ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-500 font-bold">LIVE</span>
                </div>
            </div>

            {/* Main Content - Compact Layout */}
            <div className="p-4 flex-1 flex flex-col gap-3">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className="flex items-center gap-1.5 text-white/60 mb-1 text-[11px] uppercase tracking-wider">
                            <Zap className="w-3.5 h-3.5" />
                            Active Workflows
                        </div>
                        <div className="text-2xl font-bold text-white">
                            2 <span className="text-sm font-normal text-white/40">running</span>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                        <div className="flex items-center gap-1.5 text-white/60 mb-1 text-[11px] uppercase tracking-wider">
                            <Activity className="w-3.5 h-3.5" />
                            Time Saved
                        </div>
                        <div className="flex items-center gap-1">
                            <motion.div
                                key={timeSaved}
                                initial={{ y: 5, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-2xl font-bold text-white"
                            >
                                {timeSaved}h
                            </motion.div>
                            <ArrowUpRight className="w-4 h-4 text-green-500" />
                        </div>
                    </div>
                </div>

                {/* Active Workflows - Only 2 */}
                <div>
                    <h3 className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">Live Tasks</h3>
                    <div className="space-y-2">
                        {activeWorkflows.map((workflow) => (
                            <div key={workflow.id} className="space-y-1">
                                <div className="flex justify-between text-[11px] text-white/80">
                                    <span>{workflow.label}</span>
                                    <span className="text-white/50 font-mono">{Math.min(100, Math.round(workflow.progress))}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full ${workflow.color} rounded-full`}
                                        initial={false}
                                        animate={{ width: `${workflow.progress}%` }}
                                        transition={{ duration: 0.05, ease: "linear" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Latest Action - Single Item */}
                <div>
                    <h3 className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">Latest Action</h3>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={latestAction.text}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10"
                        >
                            <div className="p-1.5 rounded bg-green-500/20 text-green-400">
                                <latestAction.icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[12px] text-white/90 font-medium">{latestAction.text}</span>
                            <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
