'use client'

import { useState, useEffect } from "react"
import { InlineWidget } from "react-calendly"
import { useToast } from "@/hooks/use-toast"

export function BookingForm() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleEventScheduled = () => {
    toast({
      title: "Consultation Scheduled!",
      description: "We look forward to meeting with you.",
    })
  }

  return (
    <div className="space-y-4">
      {!isLoaded && (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5E3C]"></div>
        </div>
      )}
      <InlineWidget
        url="https://calendly.com/varun-bartergram/30min" // Replace with your actual Calendly link
        styles={{
          height: '630px',
          visibility: isLoaded ? 'visible' : 'hidden'
        }}
        pageSettings={{
          backgroundColor: '#F5F1EB',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#8B5E3C',
          textColor: '#1C1C1C'
        }}
        prefill={{
          email: "",
          firstName: "",
          lastName: "",
          name: ""
        }}
        utm={{
          utmCampaign: "Spring Promo",
          utmContent: "Booking Form",
          utmMedium: "Website",
          utmSource: "Radiance Clinic",
          utmTerm: "Laser Hair Removal"
        }}
        onEventScheduled={handleEventScheduled}
      />
      <p className="text-xs text-center text-muted-foreground">
        By scheduling a consultation, you agree to our terms and privacy policy.
      </p>
    </div>
  )
}

