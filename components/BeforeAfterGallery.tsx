'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ba from "@/public/BA/1.png"

export function BeforeAfterGallery() {
  return (
    <section className="container-custom py-8 md:py-12 lg:py-16">
      <div className="text-center space-y-4 mb-8 sm:mb-12">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-balance">
          Real Results
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg">
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
            <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
              <Card className="p-2 sm:p-4 bg-[#F5F1EB] text-[#1C1C1C]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={ba}
                    alt={`Before and After - ${image.area}`}
                    fill
                    className="object-cover rounded"
                  />
                  <button className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors">
                    <span className="sr-only">View before/after image</span>
                  </button>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
                    <p className="text-xs sm:text-sm font-medium bg-white/90 rounded-full px-2 py-1 sm:px-4 sm:py-2">
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
  { area: "Upper Lip" },
  { area: "Full Arms" },
  { area: "Full Legs" },
  { area: "Underarms" },
]

