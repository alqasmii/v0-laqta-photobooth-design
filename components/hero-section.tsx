"use client"

import { useLanguage } from "./language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"


export function HeroSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden bg-background">
      {/* Embossed Brand Pattern Background - White on White Relief Style */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          {/* Repeating brand name pattern - embossed style */}
          <div className="flex h-full w-full flex-col justify-center gap-8">
            {[...Array(8)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex whitespace-nowrap"
                style={{
                  animation: `scroll-${rowIndex % 2 === 0 ? 'left' : 'right'} 60s linear infinite`,
                  transform: `translateX(${rowIndex % 2 === 0 ? '0' : '-25%'})`
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <span
                    key={i}
                    className="mx-8 font-serif text-6xl font-bold uppercase tracking-widest text-foreground sm:text-7xl md:text-8xl"
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.03), -1px -1px 0 rgba(255,255,255,0.8)'
                    }}
                  >
                    LAQTA
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-12">
        {/* The Digital Arch - Main Structure */}
        <div className="relative flex flex-col items-center">
          {/* Neoclassical Arch Frame */}
          <div className="relative">
            {/* Curtains - Left */}
            <div className="absolute -left-4 top-8 z-20 h-[380px] w-16 sm:-left-8 sm:h-[480px] sm:w-24 md:-left-12 md:w-32">
              <svg viewBox="0 0 100 400" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curtainLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#BC7E8A" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#D4A5AD" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#BC7E8A" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                {/* Draped curtain shape - tied back */}
                <path
                  d="M90 0 C95 20, 100 40, 95 60 C85 100, 70 120, 60 140 C50 160, 45 180, 50 200 C55 220, 65 240, 70 280 C75 320, 80 360, 85 400 L100 400 L100 0 Z"
                  fill="url(#curtainLeft)"
                />
                {/* Curtain folds */}
                <path
                  d="M95 0 C90 30, 85 60, 80 90 M85 100 C75 130, 65 150, 60 180 M65 200 C60 240, 65 280, 70 320"
                  stroke="#A06974"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Curtains - Right */}
            <div className="absolute -right-4 top-8 z-20 h-[380px] w-16 sm:-right-8 sm:h-[480px] sm:w-24 md:-right-12 md:w-32">
              <svg viewBox="0 0 100 400" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curtainRight" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#BC7E8A" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#D4A5AD" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#BC7E8A" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 0 C5 20, 0 40, 5 60 C15 100, 30 120, 40 140 C50 160, 55 180, 50 200 C45 220, 35 240, 30 280 C25 320, 20 360, 15 400 L0 400 L0 0 Z"
                  fill="url(#curtainRight)"
                />
                <path
                  d="M5 0 C10 30, 15 60, 20 90 M15 100 C25 130, 35 150, 40 180 M35 200 C40 240, 35 280, 30 320"
                  stroke="#A06974"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* The Arch Structure with Columns */}
            <div className="relative">
              {/* Left Column */}
              <div className="absolute -left-1 bottom-0 top-16 z-10 w-6 sm:-left-2 sm:w-8 md:w-10">
                <div className="h-full rounded-sm bg-gradient-to-r from-white via-gray-50 to-white shadow-[inset_-2px_0_4px_rgba(0,0,0,0.05),_2px_0_8px_rgba(0,0,0,0.05)]">
                  {/* Fluted column effect */}
                  <div className="h-full w-full opacity-30" style={{
                    background: 'repeating-linear-gradient(to right, transparent, transparent 2px, rgba(192,192,192,0.3) 2px, rgba(192,192,192,0.3) 4px)'
                  }} />
                </div>
                {/* Column base */}
                <div className="absolute -bottom-2 -left-1 h-4 w-8 rounded-sm bg-white shadow-md sm:w-10 md:w-12" />
                {/* Column capital */}
                <div className="absolute -left-1 -top-2 h-4 w-8 rounded-sm bg-white shadow-md sm:w-10 md:w-12" />
              </div>

              {/* Right Column */}
              <div className="absolute -right-1 bottom-0 top-16 z-10 w-6 sm:-right-2 sm:w-8 md:w-10">
                <div className="h-full rounded-sm bg-gradient-to-l from-white via-gray-50 to-white shadow-[inset_2px_0_4px_rgba(0,0,0,0.05),_-2px_0_8px_rgba(0,0,0,0.05)]">
                  <div className="h-full w-full opacity-30" style={{
                    background: 'repeating-linear-gradient(to right, transparent, transparent 2px, rgba(192,192,192,0.3) 2px, rgba(192,192,192,0.3) 4px)'
                  }} />
                </div>
                <div className="absolute -bottom-2 -right-1 h-4 w-8 rounded-sm bg-white shadow-md sm:w-10 md:w-12" />
                <div className="absolute -right-1 -top-2 h-4 w-8 rounded-sm bg-white shadow-md sm:w-10 md:w-12" />
              </div>

              {/* Main Arch Frame */}
              <div className="arch-frame relative h-[400px] w-[300px] overflow-hidden border-4 border-white bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08),_inset_0_2px_8px_rgba(255,255,255,0.9)] backdrop-blur-sm sm:h-[500px] sm:w-[380px] md:h-[520px] md:w-[420px]">
                {/* Glassmorphism Content Area */}
                <div className="flex h-full flex-col items-center justify-center px-6 py-8 text-center sm:px-10 sm:py-12">
                  {/* Decorative top flourish */}
                  <div className="mb-6 text-[#C0C0C0]">
                    <svg className="h-6 w-24 sm:h-8 sm:w-32" viewBox="0 0 120 30" fill="none">
                      <path d="M60 15 C50 5, 30 5, 10 15 M60 15 C70 5, 90 5, 110 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="60" cy="15" r="3" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Brand Name */}
                  <h1 className="mb-2 font-serif text-4xl font-bold tracking-wide text-foreground sm:text-5xl md:text-6xl">
                    LAQTA
                  </h1>
                  <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base">
                    Photobooth
                  </p>

                  {/* Tagline */}
                  <p className="mb-8 max-w-[280px] text-balance font-serif text-lg italic text-foreground/80 sm:text-xl">
                    {t("hero.headline")}
                  </p>

                  {/* Location */}
                  <p className="mb-8 text-sm text-muted-foreground">
                    {t("hero.subheadline")} <span role="img" aria-label="Oman flag">🇴🇲</span>
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <Button
                      size="lg"
                      className="rounded-full bg-[#BC7E8A] px-6 text-white shadow-lg transition-all hover:bg-[#A06974] hover:shadow-xl sm:px-8"
                      asChild
                    >
                      <a href="#packages">
                        {t("hero.viewPackages")}
                      </a>
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-[#C0C0C0] bg-transparent px-6 text-foreground transition-all hover:bg-secondary sm:px-8"
                      asChild
                    >
                      <a
                        href="https://wa.me/96896097724"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <MessageCircle className="size-4" />
                        {t("hero.whatsapp")}
                      </a>
                    </Button>
                  </div>

                  {/* Decorative bottom flourish */}
                  <div className="mt-6 text-[#C0C0C0]">
                    <svg className="h-6 w-24 rotate-180 sm:h-8 sm:w-32" viewBox="0 0 120 30" fill="none">
                      <path d="M60 15 C50 5, 30 5, 10 15 M60 15 C70 5, 90 5, 110 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="60" cy="15" r="3" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Base/Platform */}
            <div className="relative mt-2">
              <div className="mx-auto h-3 w-[320px] rounded-sm bg-gradient-to-b from-white to-gray-100 shadow-md sm:w-[400px] md:w-[440px]" />
              <div className="absolute -bottom-1 left-1/2 h-2 w-[280px] -translate-x-1/2 rounded-full bg-foreground/5 blur-md sm:w-[360px] md:w-[400px]" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 text-muted-foreground sm:mt-12">
          <span className="text-xs uppercase tracking-widest">{isRTL ? 'اكتشف' : 'Explore'}</span>
          <div className="h-8 w-5 rounded-full border border-[#C0C0C0] p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-[#BC7E8A]" />
          </div>
        </div>
      </div>

      {/* Animation Keyframes and Custom Styles */}
      <style jsx>{`
        .arch-frame {
          border-radius: 200px 200px 8px 8px;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(25%); }
        }
      `}</style>
    </section>
  )
}
