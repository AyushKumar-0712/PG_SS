"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    text: "Best PG I have ever stayed in. The rooms are clean, food is homestyle, and the management is super responsive. Feels like a second home.",
  },
  {
    name: "Vikram Patel",
    role: "MBA Student",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    text: "Great location near my college and the metro. WiFi is super fast, and the food quality has been consistently good for the 8 months I have been here.",
  },
  {
    name: "Arjun Mehta",
    role: "Marketing Executive",
    avatar: "/images/avatar-3.jpg",
    rating: 4,
    text: "Affordable and clean. The double sharing room is spacious enough for two people. Parking facility is a huge plus for me. Highly recommended.",
  },
  {
    name: "Karthik Rao",
    role: "Data Analyst",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    text: "Moved in 2 months ago and it is been amazing. The 24/7 security gives my parents peace of mind. The community here is friendly and professional.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [paginate])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="py-12 section-gradient">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Residents Say
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <Quote className="absolute -top-4 left-0 h-16 w-16 text-primary/10" />

          <div className="relative min-h-[280px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[current].rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-pretty text-lg leading-relaxed text-foreground md:text-xl">
                  {`"${testimonials[current].text}"`}
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
