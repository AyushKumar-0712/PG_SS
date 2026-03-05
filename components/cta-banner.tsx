"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="py-12 section-gradient">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl hero-gradient px-8 py-16 text-center shadow-2xl md:px-16"
        >
          {/* Background glow */}
          <div
            className="absolute -top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(13,148,136,0.4) 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Book Your Comfortable Stay Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              Join 200+ happy residents who call SS Gents PG home.
              Limited rooms available — secure your spot now.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-xl"
                asChild
              >
                <a href="#contact">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base px-8 py-6 rounded-xl bg-transparent"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
