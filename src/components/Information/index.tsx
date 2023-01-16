import { DailyWeather } from "@components/DailyWeather"
import { HourlyWeather } from "@components/HourlyWeather"
import React, { useState } from "react"

import {Button, Container } from './styles'


export const Information = () => {
    const [activeWeather, setActiveWeather] = useState<'daily'|'hourly'>('daily')
    const switchWeather = () => {
        if (activeWeather === 'daily'){
            setActiveWeather('hourly')
        } else {
            setActiveWeather('daily')
        }
    }
    return (<Container>
        <Button onClick={switchWeather} disabled={activeWeather === 'daily'}>Daily</Button>
        <Button onClick={switchWeather} disabled={activeWeather === 'hourly'}>Hourly</Button>
    {activeWeather === 'daily' ? <DailyWeather/> : <HourlyWeather/>}
    </Container>)
}