import { errorAtDailyWeather } from './../../store/actions/ErrorActions';
import { RootState } from '@store/index';
import { IOpenWeather } from '@types/OpenWeather.weather';
import { select, takeEvery, put, call } from 'redux-saga/effects';
import { getDailyWeather } from './../../API/getDailyWeather';
import {EDailyWeatherActionType} from '@store/models/DailyWeather.model'
import { setDailyWeather } from '@store/actions/DailyWeatherActions';
export function* workerDailyWeather() {
try {
    const {lat, lon} = yield select((state: RootState) => state.Location)
    const data: IOpenWeather= yield call(getDailyWeather, {lat, lon})
    yield put(setDailyWeather({city: data.city,list: data.list}))
} catch (error) {
    yield put(errorAtDailyWeather('Ошибка при запросе времени по дням'))
}
}

export function* watcherDailyWeather() {
    yield takeEvery(EDailyWeatherActionType.GET_DAILY_WEATHER, workerDailyWeather)
}