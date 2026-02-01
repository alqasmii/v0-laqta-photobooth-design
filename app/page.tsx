"use client"

import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PackagesSection } from "@/components/packages-section"
import { AddonsSection } from "@/components/addons-section"
import { PoliciesSection } from "@/components/policies-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <PackagesSection />
          <AddonsSection />
          <PoliciesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
