'use client'

import { useState, useEffect } from "react"
import { InlineWidget } from "react-calendly"
import React from "react"

interface BookingFormProps {
  ref?: React.RefObject<HTMLDivElement>
}

// Define the proper types for the InlineWidget props
interface CalendlyProps {
  url: string;
  styles: {
    height: string;
    visibility: "visible" | "hidden";
  };
  pageSettings: {
    backgroundColor: string;
    hideEventTypeDetails: boolean;
    hideLandingPageDetails: boolean;
    primaryColor: string;
    textColor: string;
  };
  prefill: {
    email: string;
    firstName: string;
    lastName: string;
    name: string;
  };
  utm: {
    utmCampaign: string;
    utmContent: string;
    utmMedium: string;
    utmSource: string;
    utmTerm: string;
  };
}

export const BookingForm = React.forwardRef<HTMLDivElement, BookingFormProps>(
  (props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])


  const calendlyProps: CalendlyProps = {
    url: process.env.NEXT_PUBLIC_CALENDLY_LINK || 'https://calendly.com/varun-bartergram/30min',
    styles: {
      height: '630px',
      visibility: isLoaded ? 'visible' : 'hidden'
    },
    pageSettings: {
      backgroundColor: '#F5F1EB',
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      primaryColor: '#8B5E3C',
      textColor: '#1C1C1C'
    },
    prefill: {
      email: "",
      firstName: "",
      lastName: "",
      name: ""
    },
    utm: {
      utmCampaign: "Spring Promo",
      utmContent: "Booking Form",
      utmMedium: "Website",
      utmSource: "Radiance Clinic",
      utmTerm: "Laser Hair Removal"
    }
  }

  return (
    <div ref={ref} className="space-y-4">
      {!isLoaded && (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5E3C]"></div>
        </div>
      )}
      <InlineWidget {...calendlyProps} />
      <p className="text-xs text-center text-muted-foreground">
        By scheduling a consultation, you agree to our terms and privacy policy.
      </p>
    </div>
  )
})

BookingForm.displayName = "BookingForm"

