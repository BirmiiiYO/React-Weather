import { IEventItem } from "interfaces/Calendar";

export interface ICalendarState {
    isLogin: boolean
    events:  IEventItem[]

}

export enum ECalendarActionType {
  GET_EVENTS = 'GET_EVENTS',
  SET_EVENTS = 'SET_EVENTS',
  LOGIN_USER = 'LOGIN_USER'
}

export interface ICalendarGet {
  type: ECalendarActionType.GET_EVENTS;
}

export interface ICalendarSet {
  type: ECalendarActionType.SET_EVENTS;
  payload: IEventItem[];
}

export interface changeLoginUser {
  type: ECalendarActionType.LOGIN_USER;
}

export type TCalendarType = ICalendarSet | ICalendarGet | changeLoginUser;