"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import Image from "next/image"

const images = [
  { src: "/images/gallery-1.jpg", alt: "Spacious shared room with modern furniture", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Clean and hygienic attached bathroom", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Common area and lounge", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Dining area with fresh meals", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Study desk and workspace setup", span: "" },
  { src: "/images/gallery-6.jpg", alt: "Building exterior and entrance", span: "md:col-span-2" },
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-12 section-gradient">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Gallery
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Take a Look Inside
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Real photos from our accommodation. What you see is what you get.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-3 auto-rows-[150px] md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setLightboxIndex(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${img.span}`}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30">
                <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                className="h-auto max-h-[80vh] w-auto object-contain"
              />
            </motion.div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxIndex(i)
                  }}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === lightboxIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
