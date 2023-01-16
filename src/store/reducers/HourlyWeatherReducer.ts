import { EHourlyWeatherActionType, IHourlyWeatherState,THourlyWeatherType } from "@store/models/HourlyWeather.model";

const initialState: IHourlyWeatherState = {
hours:[]
};

export const HourlyWeatherReducer = (
  state = initialState,
  action: THourlyWeatherType,
): IHourlyWeatherState => {
  switch (action.type) {
    case EHourlyWeatherActionType.SET_HOURLY_WEATHER:
        return {...action.payload}
    default:
      return state;
  }
};