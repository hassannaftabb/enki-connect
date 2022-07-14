import React, { useState, useEffect } from 'react'

import './timer.css'

const Timer = () => {
  const countdownDate = new Date('May 24, 2022 00:00:00 GMT+10:00').getTime()
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => calculateCountdownFromNow(countdownDate))

  useEffect(() => {
    if (expired) return undefined
    const intervalId = setInterval(() => setResult(calculateCountdownFromNow(countdownDate)), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [expired, countdownDate])
  return (
    <div className='componentFirst timerAnimation'>
      <div className='timer componentSecond'>
        <div className='timerCounter'>
          <div className='timerContainer'>
            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + days).slice(-2)}</div>
              <div className='timerBoxText'>Days</div>
            </div>

            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + hours).slice(-2)}</div>
              <div className='timerBoxText'>Hours</div>
            </div>

            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + minutes).slice(-2)}</div>
              <div className='timerBoxText'>Minutes</div>
            </div>

            <div className='timerBox'>
              <div className='timerBoxValue'>{('0' + seconds).slice(-2)}</div>
              <div className='timerBoxText'>Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer

export const calculateCountdownFromNow = (nextDate) => {
  const now = new Date().getTime()

  const distance = new Date(nextDate).getTime() - now

  if (distance < 0) {
    return {
      expired: true,
      values: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    }
  }

  return {
    expired: false,
    values: {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    },
  }
}
