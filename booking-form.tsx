'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "./hooks/use-toast"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Consultation Request Received!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" id="booking-form">
      <div className="grid gap-3 sm:gap-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-[#F5F1EB] text-sm"
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="bg-[#F5F1EB] text-sm"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="bg-[#F5F1EB] text-sm"
        />
        <Input
          type="date"
          name="preferred_date"
          required
          className="bg-[#F5F1EB] text-sm"
        />
        <Textarea
          name="message"
          placeholder="Any specific concerns? (Optional)"
          className="bg-[#F5F1EB] text-sm"
        />
      </div>
      <Button type="submit" className="w-full bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-[#F5F1EB] text-sm" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Book Free Consultation"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to our terms and privacy policy.
      </p>
    </form>
  )
}

