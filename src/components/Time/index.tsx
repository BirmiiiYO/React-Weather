import React, { useEffect, useState } from 'react'

import { getCurrentTime } from '@store/actions/TimeActions'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'

import { weekDays } from 'constants/weekDays'
import { months } from 'constants/months'

import { convertDateTimeToHours } from '@utils/convertDateTimeToHours'

import { Wrapper, DateInfo, Time } from './styles'

export const Clock = () => {
  const [time, setTime] = useState<Date>(() => new Date())

  useEffect(() => {
    const timeChange = setInterval(() => {
      const date = new Date()
      date.getMinutes() !== time.getMinutes() && setTime(date)
    }, 1000)

    return () => clearInterval(timeChange)
  }, [time])
  return (
    <Wrapper>
      <Time>{convertDateTimeToHours(time)}</Time>
      <DateInfo>{`${weekDays[time.getDay()]}, ${months[time.getMonth()]}
         ${time.getDate()}, ${time.getFullYear()}`}</DateInfo>
    </Wrapper>
  )
}
