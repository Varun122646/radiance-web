'use client'

import { useEffect, useState } from "react"

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 13,
    minutes: 30,
    seconds: 21
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          // Reset to 24 hours when timer reaches 0
          return {
            hours: 24,
            minutes: 0,
            seconds: 0
          }
        }

        let newSeconds = prevTime.seconds - 1
        let newMinutes = prevTime.minutes
        let newHours = prevTime.hours

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm">
      <div className="text-center">
        <div className="font-mono font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">Hours</div>
      </div>
      <div className="text-center">
        <div className="font-mono font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">Mins</div>
      </div>
      <div className="text-center">
        <div className="font-mono font-bold text-red-500">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-[10px] sm:text-xs text-muted-foreground">Secs</div>
      </div>
    </div>
  )
}

