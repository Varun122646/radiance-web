import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Timer, Star, CheckCircle, Phone, Calendar, MessageCircle } from 'lucide-react'
import { BookingForm } from "./booking-form"
import { FAQAccordion } from "./faq-accordion"
import { TestimonialCarousel } from "./testimonial-carousel"
import { BeforeAfterGallery } from "./before-after-gallery"
import { CountdownTimer } from "./countdown-timer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#F5F1EB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1EB]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Radiance Clinic Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span className="text-xl font-semibold">Radiance Clinic</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm hover:text-[#8B5E3C]">
              <Phone className="h-4 w-4" />
              +91-XXXXXXXXXX
            </a>
            <Button size="sm">Book Consultation</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container px-4 py-12 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Get Bridal-Ready with Painless Laser Hair Removal
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Step into your big day with smooth, flawless skin. Expert-led treatments for lasting results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-[#8B5E3C] hover:bg-[#8B5E3C]/90">
                  Book Your Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <p className="text-sm text-muted-foreground">
                  Trusted by 1000+ happy brides in Mumbai
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src="/placeholder.svg"
                alt="Bridal Beauty"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <Card className="absolute bottom-4 left-4 right-4 p-4 bg-[#F5F1EB]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1EB]/60">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-[#8B5E3C]">Exclusive Bridal Offer</p>
                    <p className="text-2xl font-bold">Flat 25% Off</p>
                  </div>
                  <CountdownTimer targetDate="2024-01-31" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y bg-[#D6CEC4]/50">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-sm text-muted-foreground">Happy Brides</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className="text-sm text-muted-foreground">Treatments Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Laser Hair Removal at Radiance Clinic?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the gold standard in bridal beauty treatments
            </p>
          </div>
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <CheckCircle className="h-12 w-12 text-[#8B5E3C] mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="p-6 md:p-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Book Your Free Consultation Today
                </h2>
                <p className="text-muted-foreground mb-6">
                  Take the first step towards flawless skin for your special day. Our experts are ready to create your
                  personalized treatment plan.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#8B5E3C]" />
                    <span>Flexible appointment slots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-[#8B5E3C]" />
                    <span>Free consultation with experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-[#8B5E3C]" />
                    <span>Quick response time</span>
                  </div>
                </div>
              </div>
              <BookingForm />
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Footer */}
      <footer className="border-t bg-[#D6CEC4]/50">
        <div className="container py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Radiance Clinic Logo"
                  width={32}
                  height={32}
                  className="dark:invert"
                />
                <span className="font-semibold">Radiance Clinic</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Led by Dr. Prachi Khakhar, Radiance Clinic is Mumbai's premier destination for advanced laser hair removal
                and skincare treatments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Radiance Clinic, Versova, Mumbai</p>
                <p>Phone: +91-XXXXXXXXXX</p>
                <p>Email: info@radianceclinic.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
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

