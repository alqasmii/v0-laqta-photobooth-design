"use client"

import { useLanguage } from "./language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const policyKeys = [
  "policies.booking",
  "policies.deposit",
  "policies.delivery",
  "policies.noLimit",
]

export function PoliciesSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="policies" className="rounded-lg border border-silver/50 bg-white px-6 shadow-sm">
              <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:text-dusty-rose">
                {t("policies.title")}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4 pb-2">
                  {policyKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 block size-2 shrink-0 rounded-full bg-dusty-rose" />
                      <span className="leading-relaxed">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
