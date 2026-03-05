"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Wifi,
  UtensilsCrossed,
  WashingMachine,
  Thermometer,
  ShieldCheck,
  Sparkles,
  Car,
  Zap,
  Bath,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const facilities = [
  { icon: Wifi, label: "High-Speed WiFi", desc: "100 Mbps fiber connection in every room", color: "bg-blue-50 text-blue-600" },
  { icon: UtensilsCrossed, label: "Homestyle Meals", desc: "Nutritious breakfast, lunch & dinner daily", color: "bg-orange-50 text-orange-600" },
  { icon: WashingMachine, label: "Laundry Service", desc: "Weekly laundry included in your plan", color: "bg-indigo-50 text-indigo-600" },
  { icon: Thermometer, label: "AC / Fan Rooms", desc: "Climate control options for every room", color: "bg-cyan-50 text-cyan-600" },
  { icon: ShieldCheck, label: "24/7 Security", desc: "CCTV surveillance and secure entry gates", color: "bg-emerald-50 text-emerald-600" },
  { icon: Sparkles, label: "Daily Cleaning", desc: "Professional housekeeping every morning", color: "bg-pink-50 text-pink-600" },
  { icon: Car, label: "Free Parking", desc: "Dedicated two-wheeler & four-wheeler parking", color: "bg-amber-50 text-amber-600" },
  { icon: Zap, label: "Power Backup", desc: "Uninterrupted power supply with generator", color: "bg-yellow-50 text-yellow-600" },
  { icon: Bath, label: "Attached Bathroom", desc: "Clean and hygienic private bathrooms", color: "bg-teal-50 text-teal-600" },
]

export function Facilities() {
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
      const maxIndex = Math.max(0, facilities.length - 1)
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
    <section id="facilities" className="py-8 lg:py-12 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Amenities
          </span>
          <h2 className="mt-4 text-balance text-2xl lg:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need, Included
          </h2>
          <p className="mx-auto mt-3 lg:mt-4 max-w-2xl text-pretty text-sm lg:text-lg leading-relaxed text-muted-foreground">
            We have thought of everything so you can focus on what matters most.
            All facilities are included with zero hidden charges.
          </p>
        </motion.div>

        {/* Desktop Grid - Show all */}
        <div className="hidden lg:grid gap-4 grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={facility.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${facility.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{facility.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{facility.desc}</p>
                </div>
                {/* Hover glow */}
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Carousel - Show one at a time with swipe */}
        {isMobile && (
          <div className="lg:hidden relative">
            <div className="relative min-h-[180px] overflow-hidden cursor-grab active:cursor-grabbing">
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
                    const Icon = facilities[current].icon
                    const facility = facilities[current]
                    return (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-4 transition-shadow hover:shadow-lg"
                      >
                        <div>
                          <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${facility.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-base font-semibold text-foreground">{facility.label}</h3>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{facility.desc}</p>
                        </div>
                        <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </motion.div>
                    )
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Controls */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => paginate(-1)}
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Previous facility"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {facilities.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-border"
                      }`}
                    aria-label={`Go to facility ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => paginate(1)}
                className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Next facility"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
