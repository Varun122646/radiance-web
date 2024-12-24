'use client'

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from 'lucide-react'

export function TestimonialCarousel() {
  return (
    <section className="bg-[#D6CEC4]/50 py-8 md:py-12 lg:py-16">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg">
            Real stories from our happy brides
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <Card className="p-4 sm:p-6">
                  <div className="flex gap-1 mb-2 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <blockquote className="mb-2 sm:mb-4 text-xs sm:text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div>
                      <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "Dr. Prachi and her team were amazing! My skin looks incredible, and I felt so confident on my wedding day!",
    name: "Pooja S.",
    title: "Recent Bride",
    avatar: "/placeholder.svg",
  },
  {
    quote: "The laser treatment was painless and so effective. Radiance Clinic truly exceeded my expectations!",
    name: "Anjali M.",
    title: "Bride-to-Be",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Best decision I made for my wedding prep! The results are amazing and the staff is so professional.",
    name: "Priya R.",
    title: "Recent Bride",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Incredible results! I'm so happy I chose Radiance Clinic for my bridal preparation.",
    name: "Sneha K.",
    title: "Bride-to-Be",
    avatar: "/placeholder.svg",
  },
]

