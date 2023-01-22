import axios from 'axios'

import { getCurrentTimeFromAPI } from '@API/getCurrentTime'

jest.mock('axios')

describe('get time', () => {
  it('should return', async () => {
    const result = await getCurrentTimeFromAPI({ lat: 35, lon: 60 })
    expect(axios.get).toHaveBeenCalledTimes(1)
    console.log(result)
  })
})