"use client"

import { motion } from "framer-motion"

export function LaptopShowcase() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4 perspective-1000">
            <motion.div
                initial={{ rotateX: 10, rotateY: -10, scale: 0.9, opacity: 0 }}
                animate={{ rotateX: 5, rotateY: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[500px] aspect-[16/10] group"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Laptop Lid/Screen Frame */}
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-xl p-[2%] shadow-2xl border border-white/10"
                    style={{
                        transform: "translateZ(0px)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}>

                    {/* Screen Content Container (The actual display) */}
                    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/5">

                        {/* Scrolling Website Image */}
                        <div className="absolute inset-x-0 top-0 w-full">
                            <motion.img
                                src="/screencapture-eedu-three-vercel-app-2025-12-30-18_25_11.png"
                                alt="Eedu Website Preview"
                                className="w-full h-auto object-contain"
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{
                                    duration: 20,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            />
                            {/* Duplicate for seamless loop if needed, though simple y translate might need 2 images stacked */}
                            <motion.img
                                src="/screencapture-eedu-three-vercel-app-2025-12-30-18_25_11.png"
                                alt="Eedu Website Preview"
                                className="w-full h-auto object-contain absolute top-full left-0"
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{
                                    duration: 20,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                            />
                        </div>

                        {/* Screen Glare/Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />

                        {/* Status Bar / Notch Simulation (Optional top bar) */}
                        <div className="absolute top-0 left-0 right-0 h-4 bg-black/80 backdrop-blur-sm z-20 flex items-center justify-between px-2 text-[8px] text-white/50 font-medium">
                            <span>9:41 AM</span>
                            <div className="flex gap-1">
                                <span className="w-3 h-3 rounded-full bg-white/10"></span>
                            </div>
                        </div>
                    </div>

                    {/* Camera / Bezel Details */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black border border-white/10 z-20"></div>
                </div>

                {/* Laptop Base (Keyboard area hint) */}
                <div className="absolute -bottom-3 left-[5%] right-[5%] h-4 bg-[#2a2a2a] rounded-b-xl transform-gpu origin-top"
                    style={{ transform: "rotateX(-80deg)" }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-b-md"></div>
                </div>
            </motion.div>
        </div>
    )
}
