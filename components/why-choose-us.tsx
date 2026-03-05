"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, MapPin, IndianRupee, Home, Clock, Headphones, ChevronLeft, ChevronRight } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "CCTV surveillance, biometric entry, and security guards round the clock for your peace of mind.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges. Everything from meals to WiFi is included in one simple rent.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Located near major IT hubs, metro stations, and shopping areas. Easy commute to work and entertainment.",
  },
  {
    icon: Home,
    title: "Comfortable Rooms",
    desc: "Well-furnished rooms with quality mattresses, storage space, and natural lighting for a homely experience.",
  },
  {
    icon: Clock,
    title: "Flexible Move-In",
    desc: "Move in any day of the month with prorated pricing. No long lock-in periods or complicated paperwork.",
  },
  {
    icon: Headphones,
    title: "Responsive Management",
    desc: "Dedicated support team available 24/7. Any issue gets resolved within hours, guaranteed.",
  },
]

export function WhyChooseUs() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(true)

  // Detect screen size - carousel only on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      let next = prev + newDirection
      const maxIndex = Math.max(0, reasons.length - 1)
      if (next < 0) next = maxIndex
      if (next > maxIndex) next = 0
      return next
    })
  }, [])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section className="py-12 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Why SS Gents PG
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why 200+ Residents Trust Us
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              We are not just a PG. We are a community built on trust,
              comfort, and care. Here is what makes us different from the rest.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "4.8", label: "Star Rating" },
                { value: "200+", label: "Residents" },
                { value: "5+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Desktop Grid - Show all 6 cards */}
          <div className="hidden lg:grid gap-4 grid-cols-2">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="group rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Right: Mobile Carousel - Show one at a time with swipe */}
          {isMobile && (
            <div className="lg:hidden relative">
              <div className="relative min-h-[200px] overflow-hidden cursor-grab active:cursor-grabbing">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    drag="x"
                    dragElastic={0.2}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500
                      if (swipe) {
                        paginate(offset.x < 0 ? 1 : -1)
                      }
                    }}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {(() => {
                      const reason = reasons[current]
                      const Icon = reason.icon
                      return (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="group rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-semibold text-foreground">{reason.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
                        </motion.div>
                      )
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile Controls */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => paginate(-1)}
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Previous reason"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {reasons.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1)
                        setCurrent(i)
                      }}
                      className={`h-2 rounded-full transition-all ${
                        i === current ? "w-8 bg-primary" : "w-2 bg-border"
                      }`}
                      aria-label={`Go to reason ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => paginate(1)}
                  className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Next reason"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
