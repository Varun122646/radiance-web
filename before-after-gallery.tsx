'use client'

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function BeforeAfterGallery() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Real Results
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          See the transformation our clients experience
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
          {beforeAfterImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 bg-[#F5F1EB] text-[#1C1C1C]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={activeImage === index ? image.after : image.before}
                    alt={`Before and After - ${image.area}`}
                    fill
                    className="object-cover rounded"
                  />
                  <button
                    className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"
                    onMouseEnter={() => setActiveImage(index)}
                    onMouseLeave={() => setActiveImage(-1)}
                  >
                    <span className="sr-only">Toggle before/after</span>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-sm font-medium bg-white/90 rounded-full px-4 py-2">
                      {image.area}
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
    </section>
  )
}

const beforeAfterImages = [
  {
    before: "/placeholder.svg",
    after: "/placeholder.svg",
    area: "Upper Lip",
  },
  {
    before: "/placeholder.svg",
    after: "/placeholder.svg",
    area: "Full Arms",
  },
  {
    before: "/placeholder.svg",
    after: "/placeholder.svg",
    area: "Full Legs",
  },
  {
    before: "/placeholder.svg",
    after: "/placeholder.svg",
    area: "Underarms",
  },
]

