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
import Image from "next/image"

export function TestimonialCarousel() {
  return (
    <section className="bg-[#D6CEC4]/50 py-12 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
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

