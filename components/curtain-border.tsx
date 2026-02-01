"use client"

import { cn } from "@/lib/utils"

interface CurtainBorderProps {
  position?: "top" | "bottom"
  className?: string
}

export function CurtainBorder({ 
  position = "bottom", 
  className 
}: CurtainBorderProps) {
  const isBottom = position === "bottom"
  
  return (
    <div 
      className={cn(
        "pointer-events-none w-full overflow-hidden",
        className
      )}
    >
      {/* Main horizontal column bar - fluted neoclassical style */}
      <div 
        className={cn(
          "relative h-3 w-full",
          isBottom 
            ? "bg-gradient-to-b from-[#f8f8f8] via-[#e8e8e8] to-[#d8d8d8] shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
            : "bg-gradient-to-t from-[#f8f8f8] via-[#e8e8e8] to-[#d8d8d8] shadow-[0_-2px_4px_rgba(0,0,0,0.08)]"
        )}
      >
        {/* Fluted column effect - subtle horizontal grooves */}
        <div 
          className="absolute inset-0" 
          style={{
            background: isBottom
              ? 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.05) 100%)'
              : 'linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.05) 100%)'
          }} 
        />
      </div>
    </div>
  )
}
