import { Hour } from 'interfaces/StormGlass'

export interface IHourlyWeatherState {
  hours: Hour[]
}

export enum EHourlyWeatherActionType {
  SET_HOURLY_WEATHER = 'SET_HOURLY_WEATHER',
  GET_HOURLY_WEATHER = 'GET_HOURLY_WEATHER',
}

interface IHourlyWeatherGet {
  type: EHourlyWeatherActionType.GET_HOURLY_WEATHER
}

interface IHourlyWeatherSet {
  type: EHourlyWeatherActionType.SET_HOURLY_WEATHER
  payload: IHourlyWeatherState
}

export type THourlyWeatherType = IHourlyWeatherSet | IHourlyWeatherGet
