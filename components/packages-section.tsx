"use client"

import { useLanguage } from "./language-context"
import { cn } from "@/lib/utils"
import { Clock, ImageIcon } from "lucide-react"


const packages = [
  {
    nameKey: "packages.mini",
    hours: 2,
    prints: 30,
    price: 65,
    popular: false,
  },
  {
    nameKey: "packages.essential",
    hours: 2,
    prints: 50,
    price: 75,
    popular: false,
  },
  {
    nameKey: "packages.standard",
    hours: 3,
    prints: 75,
    price: 85,
    popular: true,
  },
  {
    nameKey: "packages.premium",
    hours: 4,
    prints: 100,
    price: 100,
    popular: false,
  },
  {
    nameKey: "packages.extended",
    hours: 5,
    prints: 125,
    price: 115,
    popular: false,
  },
  {
    nameKey: "packages.fullDay",
    hours: null,
    prints: 200,
    price: 140,
    popular: false,
  },
]

export function PackagesSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="packages" className="relative bg-background py-16 md:py-24">
      <div>
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("packages.title")}
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-gradient-to-r from-[#BC7E8A] to-[#A06974]" />

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className={cn(
            "flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3",
            isRTL && "flex-row-reverse"
          )}>
            {packages.map((pkg) => (
              <ArchCard key={pkg.nameKey} pkg={pkg} t={t} isRTL={isRTL} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchCard({
  pkg,
  t,
  isRTL,
}: {
  pkg: typeof packages[0]
  t: (key: string) => string
  isRTL: boolean
}) {
  return (
    <div
      className={cn(
        "arch-card group relative flex min-w-[260px] flex-shrink-0 snap-center flex-col bg-white p-6 pt-8 text-center shadow-md transition-all hover:shadow-xl md:min-w-0",
        pkg.popular && "ring-2 ring-[#BC7E8A]"
      )}
    >
      {/* Popular ribbon - Silver with text */}
      {pkg.popular && (
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full bg-[#C0C0C0] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm">
            {t("packages.mostPopular")}
          </div>
        </div>
      )}

      {/* Package name - Serif font */}
      <h3 className="mb-6 font-serif text-xl font-bold tracking-wide text-foreground">
        {t(pkg.nameKey)}
      </h3>

      {/* Details with elegant dividers */}
      <div className="mb-6 flex-1 space-y-4">
        {/* Hours */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="size-4 text-[#BC7E8A]" />
          <span>
            {pkg.hours !== null
              ? `${pkg.hours} ${pkg.hours === 1 ? t("packages.hour") : t("packages.hours")}`
              : t("packages.noTimeLimit")}
          </span>
        </div>

        {/* Decorative divider */}
        <div className="mx-auto h-px w-12 bg-[#C0C0C0]" />

        {/* Prints */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <ImageIcon className="size-4 text-[#BC7E8A]" />
          <span>
            {pkg.prints} {t("packages.prints")}
          </span>
        </div>
      </div>

      {/* Price - Prominent */}
      <div className="border-t border-[#C0C0C0]/50 pt-4">
        <p className={cn(
          "text-3xl font-bold",
          pkg.popular ? "text-[#BC7E8A]" : "text-foreground"
        )}>
          {pkg.price} <span className="text-base font-normal text-muted-foreground">RO</span>
        </p>
      </div>

      {/* Inline styles for arch shape */}
      <style jsx>{`
        .arch-card {
          border-radius: 120px 120px 8px 8px;
          border: 1px solid #C0C0C0;
        }
      `}</style>
    </div>
  )
}
