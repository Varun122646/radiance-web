'use client'

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm">
      <div className="text-center">
        <div className="font-mono font-bold">{timeLeft.days}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">Days</div>
      </div>
      <div className="text-center">
        <div className="font-mono font-bold">{timeLeft.hours}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">Hours</div>
      </div>
      <div className="text-center">
        <div className="font-mono font-bold">{timeLeft.minutes}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">Mins</div>
      </div>
    </div>
  )
}

