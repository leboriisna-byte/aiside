"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, CheckCircle, Server, Zap, Database, Bot, FileText, Mail, Calendar, ArrowUpRight } from 'lucide-react'

export function AutomationDashboard() {
    const [timeSaved, setTimeSaved] = useState(4.5)

    // Pool of available workflows to cycle through
    const allWorkflows = [
        { id: "emails", label: "Send automated emails", color: "bg-orange-500" },
        { id: "docs", label: "Process documents", color: "bg-blue-500" },
        { id: "reports", label: "Generate weekly reports", color: "bg-purple-500" },
        { id: "crm", label: "Sync CRM contacts", color: "bg-green-500" },
        { id: "inventory", label: "Update inventory", color: "bg-yellow-500" },
        { id: "analysis", label: "Analyze customer feedback", color: "bg-pink-500" }
    ]

    const [activeWorkflows, setActiveWorkflows] = useState([
        { ...allWorkflows[0], progress: 75 },
        { ...allWorkflows[1], progress: 45 },
        { ...allWorkflows[2], progress: 20 }
    ])

    const [actions, setActions] = useState<Array<{ id: number; text: string; icon: any }>>([
        { id: 1, text: "New customer → Welcome email sent", icon: Mail },
        { id: 2, text: "Invoice received → Added to accounting", icon: FileText },
        { id: 3, text: "Weekly report → Sent to team", icon: Database },
    ])

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

    // Simulate workflow progress and cycling
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWorkflows(prev => {
                return prev.map(workflow => {
                    // Random increment between 0.2 and 0.8 for smoother, slower progress
                    const increment = Math.random() * 0.6 + 0.2
                    const newProgress = workflow.progress + increment

                    // If workflow finishes
                    if (newProgress >= 100) {
                        // Find a workflow from pool that isn't currently active
                        const currentIds = prev.map(w => w.id)
                        const available = allWorkflows.filter(w => !currentIds.includes(w.id))
                        // If all are used (shouldn't happen with pool > 3), just pick random
                        const nextTemplate = available.length > 0
                            ? available[Math.floor(Math.random() * available.length)]
                            : allWorkflows[Math.floor(Math.random() * allWorkflows.length)]

                        // Return new workflow starting at 0
                        return { ...nextTemplate, progress: 0 }
                    }

                    return { ...workflow, progress: newProgress }
                })
            })
        }, 50) // Update frequency

        return () => clearInterval(interval)
    }, [])

    // Add new actions
    useEffect(() => {
        const possibleActions = [
            { text: "Form submitted → Contact added", icon: CheckCircle },
            { text: "Price updated → Team notified", icon: Activity },
            { text: "Document uploaded → Filed automatically", icon: FileText },
            { text: "Meeting scheduled → Calendar updated", icon: Calendar },
            { text: "New customer → Welcome email sent", icon: Mail },
            { text: "Weekly report → Sent to team", icon: Database },
        ]

        const interval = setInterval(() => {
            const randomAction = possibleActions[Math.floor(Math.random() * possibleActions.length)]
            const newId = Date.now()

            setActions(prev => {
                const newActions = [{ ...randomAction, id: newId }, ...prev]
                if (newActions.length > 5) {
                    return newActions.slice(0, 5)
                }
                return newActions
            })
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full h-full bg-[#171717] rounded-xl overflow-hidden flex flex-col border border-white/10 shadow-2xl relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-white tracking-tight">Automation Hub</span>
                    <span className="flex h-2 w-2 relative ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-500 font-mono">LIVE</span>
                </div>
                <div className="text-xs text-white/40 font-mono">v2.4.0</div>
            </div>

            <div className="p-4 flex-1 flex flex-col gap-4 z-10 overflow-y-auto relative no-scrollbar">
                {/* Top Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 rounded-lg p-3 border border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 text-white/60 mb-1 text-[10px] uppercase tracking-wider">
                            <Zap className="w-3 h-3" />
                            Active Workflows
                        </div>
                        <div className="text-xl font-bold text-white">
                            3 <span className="text-xs font-normal text-white/40">running</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 rounded-lg p-3 border border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 text-white/60 mb-1 text-[10px] uppercase tracking-wider">
                            <Activity className="w-3 h-3" />
                            Time Saved Today
                        </div>
                        <div className="flex items-end gap-2">
                            <motion.div
                                key={timeSaved}
                                initial={{ y: 5, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xl font-bold text-white"
                            >
                                {timeSaved}h
                            </motion.div>
                            <div className="text-[10px] text-green-500 mb-1 flex items-center">
                                <ArrowUpRight className="w-2.5 h-2.5" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Active Workflows */}
                <div>
                    <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2">Live Tasks</h3>
                    <div className="space-y-3">
                        <AnimatePresence mode='popLayout'>
                            {activeWorkflows.map((workflow) => (
                                <motion.div
                                    key={workflow.id} // Re-using ID might be issue if same Type appears twice, but for demo it's fine as long as we pick unique from pool
                                    layout
                                    initial={{ opacity: 0.5 }} // Subtle fade for updates
                                    animate={{ opacity: 1 }}
                                    className="space-y-1"
                                >
                                    <div className="flex justify-between text-[10px] text-white/70">
                                        <span className="truncate pr-2">{workflow.label}</span>
                                        <span className="text-white/40 font-mono">{Math.min(100, Math.round(workflow.progress))}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full ${workflow.color} rounded-full relative`}
                                            initial={false} // Disable initial animation to stop jumping
                                            animate={{ width: `${workflow.progress}%` }}
                                            transition={{ duration: 0.05, ease: "linear" }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-white/30"
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Recent Actions Feed */}
                <div className="flex-1 min-h-0 flex flex-col">
                    <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2">Recent Actions</h3>
                    <div className="space-y-1.5 overflow-hidden relative h-full">
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#171717] to-transparent z-10 pointer-events-none" />
                        <AnimatePresence initial={false} mode='popLayout'>
                            {actions.slice(0, 5).map((action) => (
                                <motion.div
                                    key={action.id}
                                    layout
                                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5 font-mono text-[10px] border border-white/5"
                                >
                                    <div className="p-1 rounded bg-white/5 text-white/70">
                                        <action.icon className="w-3 h-3" />
                                    </div>
                                    <span className="text-white/80 truncate">{action.text}</span>
                                    <CheckCircle className="w-2.5 h-2.5 text-green-500 ml-auto flex-shrink-0" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
