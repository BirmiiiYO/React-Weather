import { Hour } from 'interfaces/StormGlass'

export const filterPerFourHour = (hours: Hour[]) =>
  hours?.filter((_hour, i) => {
    if (i === 0 || i % 4 === 0) {
      return true
    }
    return false
  })
