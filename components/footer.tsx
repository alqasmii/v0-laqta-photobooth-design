"use client"

import { useLanguage } from "./language-context"
import { Instagram, MessageCircle } from "lucide-react"
import { CurtainBorder } from "./curtain-border"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-foreground text-background">
      {/* Curtain Border - draped swag effect at top */}
      <CurtainBorder position="top" />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Brand */}
            <h2 className="font-serif text-2xl font-bold tracking-wide">
              LAQTA
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-background/70">
              Photobooth
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/laqta.photobooth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-[#C0C0C0]/50 text-[#C0C0C0] transition-all hover:border-[#BC7E8A] hover:bg-[#BC7E8A] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://wa.me/96896097724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-[#C0C0C0]/50 text-[#C0C0C0] transition-all hover:border-[#BC7E8A] hover:bg-[#BC7E8A] hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-1 text-sm text-background/60">
              <p>Muscat, Oman</p>
              <p>
                <a 
                  href="https://wa.me/96896097724" 
                  className="transition-colors hover:text-[#BC7E8A]"
                >
                  +968 9609 7724
                </a>
              </p>
            </div>

            {/* Decorative divider */}
            <div className="h-px w-16 bg-background/20" />

            {/* Copyright */}
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} Laqta Photobooth. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
