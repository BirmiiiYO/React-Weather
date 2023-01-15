import ApiCalendar from 'react-google-calendar-api'

const config = {
  clientId: `${process.env.GOOGLE_CALENDAR_CLIENT_key}`,
  apiKey: `${process.env.GOOGLE_CALENDAR_API_key}`,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
}

export const apiCalendar = new ApiCalendar(config)