"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is food included in the monthly rent?",
    a: "Yes! All our plans include three nutritious meals a day — breakfast, lunch, and dinner. We serve fresh, homestyle vegetarian and non-vegetarian food. Special diet requests can be accommodated with prior notice.",
  },
  {
    q: "What is the security deposit amount?",
    a: "We charge a refundable security deposit equal to 2 months rent. This is fully refundable when you vacate, provided there is no damage to the property and all dues are cleared.",
  },
  {
    q: "Are visitors allowed?",
    a: "Yes, visitors are allowed in the common area during visiting hours (10 AM to 8 PM). Overnight guests are not permitted for security reasons. You can meet visitors in the lounge or common area.",
  },
  {
    q: "What is the minimum stay period?",
    a: "The minimum stay period is 3 months. However, we offer flexible arrangements for those needing shorter stays. Prorated monthly pricing is available if you move in mid-month.",
  },
  {
    q: "Is WiFi available in all rooms?",
    a: "Absolutely. We provide 100 Mbps high-speed fiber WiFi across the entire property — in rooms, common areas, and even the terrace. Perfect for remote work and streaming.",
  },
  {
    q: "What are the payment modes accepted?",
    a: "We accept UPI, bank transfers (NEFT/IMPS), credit/debit cards, and cash payments. Rent is due on the 1st of every month, and you will receive a digital receipt for every transaction.",
  },
]

export function FAQ() {
  return (
    <section className="py-12 bg-card">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Got questions? We have answers. If you do not find what you are looking for, feel free to contact us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-background px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
