'use client'
import Image from "next/image"
import { Timer, Star, CheckCircle, MessageCircle, Youtube, Mail, PhoneCall } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/BookingForm"
import { FAQAccordion } from "@/components/FAQAccordion"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery"
import { CountdownTimer } from "@/components/CountdownTimer"
import logo from "@/public/Logo.png"
import hero2 from "@/public/Laser 2_2.1.2.jpg"
import { useRef } from "react"
import { Instagram, } from 'lucide-react'


export default function Home() {
  const bookingFormRef = useRef<HTMLDivElement>(null)

  const scrollToBookingForm = () => {
    bookingFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full p-3 border-b bg-[#F5F1EB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1EB]/60">
        <div className="container-custom flex h-10 items-center justify-between">
          <div className="flex items-center gap-2 ">
            <Image
              src={logo}
              alt="Radiance Clinic Logo"
              width={50}
              height={30}
              className="dark:invert contrast-50	p-1"
            />
            <span className="md:text-2xl font-bold text-[#8f4955]">Radiance Clinic</span>
          </div>
          <div className="flex items-center gap-4 ">
            <Button className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90" size="sm" onClick={scrollToBookingForm}>Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container-custom py-8 md:py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-balance">
                  Smooth, Flawless Skin with Painless Laser Hair Removal
                </h1>
                <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-lg">
                  Step into your big day with smooth, flawless skin. Expert-led treatments for lasting results.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="sm" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90" onClick={scrollToBookingForm}>
                  Get Quote Now
                </Button>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Trusted by 100+ happy customers in Mumbai
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src={hero2}
                alt="Bridal Beauty"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <Card className="absolute bottom-4 left-4 right-4 p-4 bg-[#F5F1EB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1EB]/60">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-[#8B5E3C] text-sm">Exclusive New Year Offer</p>
                    <p className="text-lg font-bold sm:text-xl">Flat 25% Off</p>
                  </div>
                  <CountdownTimer />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y bg-[#D6CEC4]/50">
        <div className="container-custom py-6 md:py-8">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl text-balance">100+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl text-balance">10+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl text-balance">99%</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl text-balance">900+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Treatments Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container-custom py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-balance">
              Why Choose Laser Hair Removal at Radiance Clinic?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg">
              Experience the gold standard in cosmetic beauty treatments
            </p>
          </div>
          <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-4 sm:p-6">
                <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 text-[#8B5E3C] mb-2 sm:mb-4" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-balance">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Testimonials */}
      <section className="border-y bg-[#D6CEC4]/50">
        <TestimonialCarousel />
      </section>

      {/* Booking Form Section */}
      <section ref={bookingFormRef} className="container-custom py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4 sm:text-3xl md:text-4xl text-balance">
                  Get a Free Quote Today
                </h2>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                  Take the first step towards flawless skin for your special day. Our experts are ready to create your
                  personalized treatment plan.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]" />
                    <span className="text-sm sm:text-base">Get a free quote over the phone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]" />
                    <span className="text-sm sm:text-base">Free consultation with experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4 sm:h-5 sm:w-5 text-[#8B5E3C]" />
                    <span className="text-sm sm:text-base">Quick response time</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Footer */}
      <footer className="border-t bg-[#D6CEC4]/50">
        <div className="container-custom py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={logo}
                  alt="Radiance Clinic Logo"
                  width={32}
                  height={32}
                  className="dark:invert contrast-50	p-1"
                />
                <span className="font-semibold">Radiance Clinic</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
              Radiance Cosmetics led by Dr. Prachi is your one-stop solution in Versova for all cosmetic and beauty needs. From advanced laser treatments to expert skincare, we are dedicated to helping you look and feel your best
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-balance">Contact Us</h3>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>Plot No. 180, Janki Devi School Road, SVP Nagar, Mhada Rd, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053</p>
                <p>Phone: +91-7900126384.</p>
                <p>Email: radiancecosmetic.in@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-balance">Follow Us</h3>
              <div className="flex gap-4">
                {/* Add social media icons/links here */}

                <a href="https://www.instagram.com/drprachikhakhar/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-[#8B5E3C] hover:text-[#8B5E3C]/80" />
                </a>
                <a href="https://www.youtube.com/@Dr.PrachiKhakhar" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6 text-[#8B5E3C] hover:text-[#8B5E3C]/80" />
                </a>
                <a href="mailto:radiancecosmetic.in@gmail.com">
                  <Mail className="h-6 w-6 text-[#8B5E3C] hover:text-[#8B5E3C]/80" />
                </a>

              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>© 2024 Radiance Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const benefits = [
  {
    title: "Safe & Painless",
    description: "Advanced technology ensures a comfortable, pain-free experience with every session",
  },
  {
    title: "Long-Lasting Results",
    description: "Say goodbye to regular waxing and shaving with our permanent hair reduction solution",
  },
  {
    title: "Expert Care",
    description: "Led by Dr. Prachi Khakhar with years of experience in laser treatments",
  },
  {
    title: "Quick Sessions",
    description: "Most treatments take under 30 minutes, perfect for your busy schedule",
  },
]

