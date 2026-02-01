"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Header
    "nav.bookNow": "Book Now",
    
    // Hero
    "hero.headline": "Preserve your memories with Laqta Photobooth",
    "hero.subheadline": "Based in Oman",
    "hero.viewPackages": "View Packages",
    "hero.whatsapp": "WhatsApp Us",
    
    // Packages
    "packages.title": "Our Packages",
    "packages.mostPopular": "Most Popular",
    "packages.hours": "Hours",
    "packages.hour": "Hour",
    "packages.prints": "Prints",
    "packages.noTimeLimit": "No time limit",
    "packages.mini": "Mini",
    "packages.essential": "Essential",
    "packages.standard": "Standard",
    "packages.premium": "Premium",
    "packages.extended": "Extended",
    "packages.fullDay": "Full-Day",
    
    // Add-ons
    "addons.title": "Add-Ons & Extras",
    "addons.extraPrints": "Extra 10 Prints",
    "addons.extraPrintsNote": "Premium+ Only 5 RO",
    "addons.digitalGallery": "Digital Gallery",
    "addons.expressSetup": "Express Setup",
    "addons.customTheme": "Custom Theme",
    "addons.startingFrom": "Starting from",
    
    // Policies
    "policies.title": "Rental Policies",
    "policies.booking": "Bookings must be made 3 days in advance.",
    "policies.deposit": "50% Non-refundable deposit required.",
    "policies.delivery": "Delivery fees apply outside Muscat.",
    "policies.noLimit": "No time limit for packages with 200+ photos.",
    
    // Footer
    "footer.contact": "Book through Instagram DMs or via WhatsApp",
  },
  ar: {
    // Header
    "nav.bookNow": "احجز الآن",
    
    // Hero
    "hero.headline": "احفظ ذكرياتك مع لقطة فوتوبوث",
    "hero.subheadline": "في عُمان",
    "hero.viewPackages": "عرض الباقات",
    "hero.whatsapp": "تواصل عبر واتساب",
    
    // Packages
    "packages.title": "باقاتنا",
    "packages.mostPopular": "الأكثر شعبية",
    "packages.hours": "ساعات",
    "packages.hour": "ساعة",
    "packages.prints": "صورة",
    "packages.noTimeLimit": "بدون حد زمني",
    "packages.mini": "ميني",
    "packages.essential": "أساسي",
    "packages.standard": "ستاندرد",
    "packages.premium": "بريميوم",
    "packages.extended": "ممتد",
    "packages.fullDay": "يوم كامل",
    
    // Add-ons
    "addons.title": "الإضافات",
    "addons.extraPrints": "١٠ صور إضافية",
    "addons.extraPrintsNote": "بريميوم+ فقط ٥ ر.ع",
    "addons.digitalGallery": "معرض رقمي",
    "addons.expressSetup": "تركيب سريع",
    "addons.customTheme": "ثيم مخصص",
    "addons.startingFrom": "يبدأ من",
    
    // Policies
    "policies.title": "سياسات الإيجار",
    "policies.booking": "يجب الحجز قبل ٣ أيام مقدماً.",
    "policies.deposit": "مطلوب دفع ٥٠٪ عربون غير قابل للاسترداد.",
    "policies.delivery": "رسوم التوصيل تطبق خارج مسقط.",
    "policies.noLimit": "بدون حد زمني للباقات التي تشمل ٢٠٠+ صورة.",
    
    // Footer
    "footer.contact": "احجز عبر رسائل انستغرام أو واتساب",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const isRTL = language === "ar"

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    
    // Switch font family based on language
    if (isRTL) {
      document.body.style.fontFamily = "var(--font-arabic-text), 'Amiri', system-ui, sans-serif"
    } else {
      document.body.style.fontFamily = "var(--font-body), 'Lato', system-ui, sans-serif"
    }
  }, [language, isRTL])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
