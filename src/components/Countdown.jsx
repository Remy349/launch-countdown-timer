import React, { useEffect, useState } from 'react'
import Count from './Count'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '',
    minutes: '',
    hours: '',
    seconds: ''
  })

  const countdown = () => {
    const currentYear = new Date().getFullYear()
    const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

    const currentTime = new Date()
    const diff = newYearTime - currentTime

    setTimeLeft({
      days: Math.floor(diff / DAY),
      hours: ('0' + (Math.floor(diff / HOUR) % 24)).slice(-2),
      minutes: ('0' + (Math.floor(diff / MINUTE) % 60)).slice(-2),
      seconds: ('0' + (Math.floor(diff / SECOND) % 60)).slice(-2)
    })
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      countdown()
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft])

  return (
    <section className='launch__countdown'>
      <Count text='Days' time={timeLeft.days} />
      <Count text='Hours' time={timeLeft.hours} />
      <Count text='Minutes' time={timeLeft.minutes} />
      <Count text='Seconds' time={timeLeft.seconds} />
    </section>
  )
}

export default Countdown
