import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Rooms } from "@/components/rooms"
import { Facilities } from "@/components/facilities"
import { Gallery } from "@/components/gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { EnquiryForm } from "@/components/enquiry-form"
import { FAQ } from "@/components/faq"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Rooms />
      <Facilities />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <EnquiryForm />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
