"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden hero-gradient">
      {/* Background animated mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:pt-40 lg:pb-32">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
          >
            <Star className="h-4 w-4 text-amber-400" />
            Rated 4.8/5 by 200+ residents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Comfortable Living
            <br />
            <span className="text-gradient">for Modern Gents</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70"
          >
            Premium paying guest accommodation with top-notch amenities.
            Affordable monthly plans with meals, WiFi, laundry, and 24/7 security
            in a prime city location.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
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
              <a href="#rooms">View Rooms</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-2 text-white/60">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">200+ Happy Residents</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">24/7 Security</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Star className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-medium">4.8 Star Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-[#06b6d4]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/hero-room.jpg"
                alt="Premium PG room with modern furnishing"
                width={560}
                height={420}
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="text-xs text-muted-foreground font-medium">Starting from</p>
              <p className="text-2xl font-bold text-foreground">
                {"₹"}4,500<span className="text-sm font-normal text-muted-foreground">/month</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.8C384 39 480 54 576 58.3C672 62.7 768 56.3 864 48.3C960 40.3 1056 30.7 1152 32.5C1248 34.3 1344 47.7 1392 54.3L1440 61V101H1392C1344 101 1248 101 1152 101C1056 101 960 101 864 101C768 101 672 101 576 101C480 101 384 101 288 101C192 101 96 101 48 101H0V50Z"
            fill="#f8fafb"
          />
        </svg>
      </div>
    </section>
  )
}
