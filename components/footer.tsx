import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="hero-gradient text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                SS
              </div>
              <span className="text-lg font-bold tracking-tight">SS Gents PG</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Premium paying guest accommodation for modern gentlemen.
              Comfortable, safe, and affordable living in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact Info</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                No. 42, 3rd Cross Road, Koramangala 4th Block, Bangalore - 560034
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@ssgentspg.com" className="hover:text-primary">
                  info@ssgentspg.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
            <p className="mb-4 text-sm text-white/60">
              Stay updated with the latest from SS Gents PG.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            {"© 2026 SS Gents PG. All rights reserved. Designed with care for comfortable living."}
          </p>
        </div>
      </div>
    </footer>
  )
}
