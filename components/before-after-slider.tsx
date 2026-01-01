"use client"

import { useState, useRef } from "react"

interface BeforeAfterSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
}

export function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After"
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleInteraction = (clientX: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100))
        setSliderPosition(percentage)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.buttons === 1) {
            handleInteraction(e.clientX)
        }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        handleInteraction(e.touches[0].clientX)
    }

    const handleClick = (e: React.MouseEvent) => {
        handleInteraction(e.clientX)
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full cursor-ew-resize select-none overflow-hidden"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={handleClick}
        >
            {/* 2D Image - Left side */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-contain"
                    draggable={false}
                />
            </div>

            {/* 3D Image - Right side */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="w-full h-full object-contain"
                    draggable={false}
                />
            </div>

            {/* Slider Line - Always visible */}
            <div
                className="absolute top-0 bottom-0 w-[3px] bg-white z-20"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                {/* Slider Handle - Clean circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing">
                    <div className="flex items-center gap-[2px]">
                        <div className="w-[3px] h-4 bg-gray-400 rounded-full" />
                        <div className="w-[3px] h-4 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Labels - Clean pills */}
            <div className="absolute top-3 left-3 bg-white text-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full font-bold z-10 shadow-md">
                {beforeLabel}
            </div>
            <div className="absolute top-3 right-3 bg-[#6B5CFF] text-white text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full font-bold z-10 shadow-md">
                {afterLabel}
            </div>
        </div>
    )
}
