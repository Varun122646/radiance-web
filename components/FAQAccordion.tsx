'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQAccordion() {
  return (
    <section className="container-custom py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 sm:text-3xl md:text-4xl text-balance">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-sm sm:text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "Is the procedure painful?",
    answer: "Not at all! Our advanced laser technology ensures a comfortable experience. Most clients describe the sensation as a mild tingling or warm feeling.",
  },
  {
    question: "How many sessions will I need?",
    answer: "Typically, 6-8 sessions are recommended for optimal results, spaced 4-6 weeks apart. The exact number may vary based on your hair type and treatment area.",
  },
  {
    question: "Is it safe for sensitive skin?",
    answer: "Yes, our treatments are safe for all skin types. We use state-of-the-art equipment that's gentle on sensitive skin while remaining effective.",
  },
  {
    question: "How long does each session take?",
    answer: "Most sessions take 15-30 minutes, depending on the treatment area. We work efficiently to accommodate your busy schedule.",
  },
  {
    question: "When should I start treatment before my wedding?",
    answer: "We recommend starting your treatment 6-8 months before your wedding for the best results. This allows time for the complete treatment cycle.",
  },
]

