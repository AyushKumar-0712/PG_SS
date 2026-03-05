"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Building2 } from "lucide-react"

const landmarks = [
  "City Metro Station - 500m",
  "Tech Park IT Hub - 1.2 km",
  "Central Mall - 800m",
  "Government Hospital - 1 km",
  "Bus Stand - 300m",
]

export function Location() {
  return (
    <section className="py-12 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Location
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perfectly Located for You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Situated in a prime area with easy access to offices, colleges, and daily essentials.
          </p>
        </motion.div>

        <div className="grid items-start gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border shadow-sm order-2 md:order-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SS Gents PG location on Google Maps"
              className="w-full"
            />
          </motion.div>

          {/* Address & Landmarks - Horizontal scroll on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 order-1 md:order-2 overflow-x-auto scrollbar-hide lg:overflow-x-visible"
          >
            <div className="flex flex-col gap-4 min-w-fit lg:min-w-full">
              {/* Address Card */}
              <div className="rounded-2xl border border-border bg-background p-6 w-80 lg:w-auto">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Our Address</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                SS Gents PG, No. 42, 3rd Cross Road,<br />
                Koramangala 4th Block, Bangalore,<br />
                Karnataka - 560034, India
              </p>
            </div>

              {/* Nearby Landmarks */}
              <div className="rounded-2xl border border-border bg-background p-6 w-80 lg:w-auto">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Nearby Landmarks</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {landmarks.map((lm) => (
                  <li key={lm} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Navigation className="h-4 w-4 shrink-0 text-primary" />
                    {lm}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
