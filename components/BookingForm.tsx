// 'use client'

// import { useState, useEffect } from "react"
// import { InlineWidget, useCalendlyEventListener } from "react-calendly"
// import React from "react"
// import { useRouter } from 'next/navigation'

// interface BookingFormProps {
//   ref?: React.RefObject<HTMLDivElement>
// }

// // Define the proper types for the InlineWidget props
// interface CalendlyProps {
//   url: string;
//   styles: {
//     height: string;
//     visibility: "visible" | "hidden";
//   };
//   pageSettings: {
//     backgroundColor: string;
//     hideEventTypeDetails: boolean;
//     hideLandingPageDetails: boolean;
//     primaryColor: string;
//     textColor: string;
//   };
//   prefill: {
//     email: string;
//     firstName: string;
//     lastName: string;
//     name: string;
//   };
//   utm: {
//     utmCampaign: string;
//     utmContent: string;
//     utmMedium: string;
//     utmSource: string;
//     utmTerm: string;
//   };
// }

// export const BookingForm = React.forwardRef<HTMLDivElement, BookingFormProps>(
//   (props, ref) => {
//   const [isLoaded, setIsLoaded] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     // Simulate loading delay
//     const timer = setTimeout(() => setIsLoaded(true), 1000)
//     return () => clearTimeout(timer)
//   }, [])

//     // Add Calendly event listener
//     useCalendlyEventListener({
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       onEventScheduled: (_e) => {
//         // Redirect to thank you page after successful booking
//         router.push('/thankyou')

//       }
//     })

//   const calendlyProps: CalendlyProps = {
//     url: process.env.NEXT_PUBLIC_CALENDLY_LINK || 'https://calendly.com/radiancecosmetic-in',
//     styles: {
//       height: '630px',
//       visibility: isLoaded ? 'visible' : 'hidden'
//     },
//     pageSettings: {
//       backgroundColor: '#F5F1EB',
//       hideEventTypeDetails: false,
//       hideLandingPageDetails: false,
//       primaryColor: '#8B5E3C',
//       textColor: '#1C1C1C'
//     },
//     prefill: {
//       email: "",
//       firstName: "",
//       lastName: "",
//       name: ""
//     },
//     utm: {
//       utmCampaign: "Spring Promo",
//       utmContent: "Booking Form",
//       utmMedium: "Website",
//       utmSource: "Radiance Clinic",
//       utmTerm: "Laser Hair Removal"
//     }
//   }

//   return (
//     <div ref={ref} className="space-y-4">
//       {!isLoaded && (
//         <div className="flex items-center justify-center h-96">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5E3C]"></div>
//         </div>
//       )}
//       <InlineWidget {...calendlyProps} />
//       <p className="text-xs text-center text-muted-foreground">
//         By scheduling a consultation, you agree to our terms and privacy policy.
//       </p>
//     </div>
//   )
// })

// BookingForm.displayName = "BookingForm"
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Router from "next/router";
import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("whatsapp"),
    };

    try {
      const response = await fetch(
        "https://api.bartergram.co/api/v1/radiance-quotes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting quote request");
      }

      const result = await response.json();
      setSuccess(result.message);
      form.reset();
      Router.push("/thankyou");

      setTimeout(() => {
        setSuccess(null);
      }, 5000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5F1EB] p-8 rounded-lg shadow-md max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-[#1C1C1C] font-semibold">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            className="mt-1 bg-white border-[#8B5E3C] focus:ring-[#8B5E3C] focus:border-[#8B5E3C]"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-[#1C1C1C] font-semibold">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 bg-white border-[#8B5E3C] focus:ring-[#8B5E3C] focus:border-[#8B5E3C]"
          />
        </div>
        <div>
          <Label htmlFor="whatsapp" className="text-[#1C1C1C] font-semibold">
            Number
          </Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            className="mt-1 bg-white border-[#8B5E3C] focus:ring-[#8B5E3C] focus:border-[#8B5E3C]"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8B5E3C] hover:bg-[#7A4E2C] text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          {isSubmitting ? "Submitting..." : "Get Quote"}
        </Button>
        {error && (
          <p className="text-red-500 text-xs text-center mt-4">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-xs text-center mt-4">{success}</p>
        )}
        <p className="text-xs text-center text-[#1C1C1C] mt-4">
          By submitting this form, you agree to our terms and privacy policy.
        </p>
      </form>
    </div>
  );
}
