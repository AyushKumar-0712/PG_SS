"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const rooms = {
  ac: [
    {
      sharing: 3,
      label: "3-Sharing (Triple)",
      price: "₹10,000",
      popular: true,
      image: "/images/gallery-1.jpg",
      features: [
        "Comfortable stay",
        "Ample storage",
        "Attached washroom",
        "Wi-Fi access",
        "Common area access",
      ],
    },
    {
      sharing: 4,
      label: "4-Sharing (Quad)",
      price: "₹9,000",
      popular: false,
      image: "/images/gallery-1.jpg",
      features: [
        "Spacious room",
        "Personal locker",
        "Attached washroom",
        "Wi-Fi access",
        "Common area access",
      ],
    },
  ],
  nonac: [
    {
      sharing: 3,
      label: "3-Sharing (Triple)",
      price: "₹9,500",
      popular: true,
      image: "/images/gallery-1.jpg",
      features: [
        "Comfortable stay",
        "Ample storage",
        "Attached washroom",
        "Wi-Fi access",
        "Common area access",
      ],
    },
    {
      sharing: 4,
      label: "4-Sharing (Quad)",
      price: "₹8,500",
      popular: false,
      image: "/images/gallery-1.jpg",
      features: [
        "Spacious room",
        "Personal locker",
        "Attached washroom",
        "Wi-Fi access",
        "Common area access",
      ],
    },
  ],
}

export function Rooms() {
  const [isAC, setIsAC] = useState(true)
  const currentRooms = isAC ? rooms.ac : rooms.nonac

  return (
    <section id="rooms" className="py-12 bg-gradient-to-b from-slate-50 to-cyan-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Room Type
          </h2>
        </motion.div>

        {/* AC / Non-AC Toggle */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setIsAC(true)}
            className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${isAC
                ? "bg-blue-500 text-white shadow-lg"
                : "border-2 border-slate-300 text-slate-600 hover:border-slate-400"
              }`}
          >
            <Check className="h-5 w-5" />
            AC (Air-Conditioned)
          </button>
          <button
            onClick={() => setIsAC(false)}
            className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${!isAC
                ? "bg-blue-500 text-white shadow-lg"
                : "border-2 border-slate-300 text-slate-600 hover:border-slate-400"
              }`}
          >
            Non-AC
          </button>
        </div>

        {/* Room Cards */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {currentRooms.map((room, i) => (
            <motion.div
              key={`${isAC ? 'ac' : 'nonac'}-${room.sharing}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-md transition-shadow hover:shadow-2xl overflow-hidden ${room.popular ? "ring-2 ring-blue-500" : ""
                }`}
            >
              {room.popular && (
                <div className="absolute -top-4 right-4 rounded-full bg-blue-500 text-white px-4 py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}

              {/* Room Image */}
              <div className="mb-6 h-48 rounded-2xl bg-slate-200 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.label}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900">{room.label}</h3>

              {/* Features */}
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-slate-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price Section */}
              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <span className="text-4xl font-bold text-slate-900">{room.price}</span>
                  <span className="text-sm text-slate-600 ml-2">/month</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                className="mt-6 w-full bg-orange-500 text-white hover:bg-orange-600 rounded-xl py-3 font-semibold"
                asChild
              >
                <a href="#contact">
                  Book Now
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-12 text-center text-sm text-slate-600">
          <p>All exclusive (Electricity*, Maintenance) • Deposit Required</p>
        </div>
      </div>
    </section>
  )
}
