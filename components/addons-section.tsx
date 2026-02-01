"use client"

import { useLanguage } from "./language-context"
import { Sparkles, Zap, Palette, Images } from "lucide-react"

const addons = [
  {
    nameKey: "addons.extraPrints",
    price: 7,
    note: "addons.extraPrintsNote",
    icon: Images,
  },
  {
    nameKey: "addons.digitalGallery",
    price: 7,
    note: null,
    icon: Sparkles,
  },
  {
    nameKey: "addons.expressSetup",
    price: 15,
    note: null,
    icon: Zap,
  },
  {
    nameKey: "addons.customTheme",
    price: "8+",
    note: null,
    icon: Palette,
    isStartingFrom: true,
  },
]

export function AddonsSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative bg-secondary py-16 md:py-24">
      <div>
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("addons.title")}
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-gradient-to-r from-[#BC7E8A] to-[#A06974]" />

          {/* 2-column grid of pill-shaped elements */}
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {addons.map((addon) => {
              const Icon = addon.icon
              return (
                <div
                  key={addon.nameKey}
                  className="group flex items-center gap-4 rounded-full border border-[#C0C0C0]/50 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm transition-all hover:border-[#BC7E8A]/50 hover:shadow-md"
                >
                  {/* Icon in circular container */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-[#BC7E8A]/10">
                    <Icon className="size-5 text-[#BC7E8A]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {t(addon.nameKey)}
                    </h3>
                    {addon.note && (
                      <p className="text-sm text-[#BC7E8A]">
                        {t(addon.note)}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className={`text-end ${isRTL ? 'text-start' : 'text-end'}`}>
                    {addon.isStartingFrom && (
                      <span className="block text-xs text-muted-foreground">
                        {t("addons.startingFrom")}
                      </span>
                    )}
                    <span className="text-lg font-bold text-foreground">
                      {addon.price} <span className="text-sm font-normal text-muted-foreground">RO</span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
