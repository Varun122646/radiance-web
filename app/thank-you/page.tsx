'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import logo from '@/public/Asset 8@4x.png'

export default function ThankYou() {
  return (
    <div className="container-custom py-16 md:py-24 lg:py-32 min-h-[80vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/Asset 8@4x.png"
            alt="Radiance Cosmetic Centre"
            fill
            className="object-contain"
          />
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="w-16 h-16 bg-[#A31621]/10 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle className="w-8 h-8 text-[#A31621]" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#A31621]">
            Thank You for Choosing Radiance!
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            We've received your booking request and we're excited to help you on your beauty journey. You'll receive a confirmation email shortly with all the details.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mt-8 space-y-4">
          <h2 className="font-semibold text-gray-900">What's Next?</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✨ Check your email for booking confirmation</li>
            <li>✨ Review your appointment details</li>
            <li>✨ Save the date in your calendar</li>
            <li>✨ Also you'll recieve a call from our end!</li>
          </ul>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            variant="outline"
            className="border-[#A31621] text-[#A31621] hover:bg-[#A31621] hover:text-white"
            asChild
          >
            <Link href="/services">
              Browse More Services
            </Link>
          </Button>
          <Button 
            className="bg-[#A31621] hover:bg-[#A31621]/90"
            asChild
          >
            <Link href="/dashboard">
              View My Bookings
            </Link>
          </Button>
        </div> */}
      </motion.div>
    </div>
  )
}

