"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export function VideoContentPreview() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [showControls, setShowControls] = useState(true)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleTimeUpdate = () => {
            setProgress((video.currentTime / video.duration) * 100)
        }

        const handleLoadedMetadata = () => {
            setDuration(video.duration)
        }

        video.addEventListener('timeupdate', handleTimeUpdate)
        video.addEventListener('loadedmetadata', handleLoadedMetadata)

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate)
            video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
    }, [])

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (isPlaying) {
            video.pause()
        } else {
            video.play()
        }
        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return
        video.muted = !isMuted
        setIsMuted(!isMuted)
    }

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current
        if (!video) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = x / rect.width
        video.currentTime = percentage * video.duration
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const handleFullscreen = () => {
        const video = videoRef.current
        if (!video) return
        if (video.requestFullscreen) {
            video.requestFullscreen()
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            {/* Video Player Container */}
            <div
                className="relative w-full max-w-[600px] rounded-xl overflow-hidden shadow-2xl shadow-[#6B5CFF]/20 border border-white/10"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
                {/* Video Element */}
                <video
                    ref={videoRef}
                    className="w-full aspect-video bg-black"
                    muted={isMuted}
                    loop
                    playsInline
                    onClick={togglePlay}
                >
                    <source src="/HEROVIDEO copy.mp4" type="video/mp4" />
                </video>

                {/* Play Button Overlay - shows when paused */}
                {!isPlaying && (
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity"
                        onClick={togglePlay}
                    >
                        <div className="w-16 h-16 bg-[#6B5CFF] rounded-full flex items-center justify-center shadow-xl shadow-[#6B5CFF]/50 hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                    </div>
                )}

                {/* Controls Bar */}
                <div
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Progress Bar */}
                    <div
                        className="w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer group"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="h-full bg-[#6B5CFF] rounded-full relative"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Play/Pause */}
                            <button
                                onClick={togglePlay}
                                className="text-white hover:text-[#6B5CFF] transition-colors"
                            >
                                {isPlaying ? (
                                    <Pause className="w-5 h-5" fill="currentColor" />
                                ) : (
                                    <Play className="w-5 h-5" fill="currentColor" />
                                )}
                            </button>

                            {/* Volume */}
                            <button
                                onClick={toggleMute}
                                className="text-white hover:text-[#6B5CFF] transition-colors"
                            >
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5" />
                                )}
                            </button>

                            {/* Time */}
                            <span className="text-white/70 text-xs font-mono">
                                {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                            </span>
                        </div>

                        {/* Fullscreen */}
                        <button
                            onClick={handleFullscreen}
                            className="text-white hover:text-[#6B5CFF] transition-colors"
                        >
                            <Maximize className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Tagline */}
            <p className="mt-4 text-white/50 text-sm font-medium">
                Promotional videos that sell
            </p>
        </div>
    )
}
