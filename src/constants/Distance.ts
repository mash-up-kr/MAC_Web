interface Distance {
  name: string
  value: {
    minKilometer: number
    maxKilometer: number
  }
}

export const distanceList: Distance[] = [
  {
    name: '0km ~ 5km',
    value: {
      minKilometer: 0,
      maxKilometer: 5,
    },
  },
  {
    name: '5km ~ 10km',
    value: {
      minKilometer: 5,
      maxKilometer: 10,
    },
  },
  {
    name: '10km ~ 30km',
    value: {
      minKilometer: 10,
      maxKilometer: 30,
    },
  },
  {
    name: '30km ~ 100km',
    value: {
      minKilometer: 30,
      maxKilometer: 100,
    },
  },
  {
    name: '100km ~ 500km',
    value: {
      minKilometer: 100,
      maxKilometer: 500,
    },
  },
  {
    name: '500km ~ 1000km',
    value: {
      minKilometer: 500,
      maxKilometer: 1000,
    },
  },
  {
    name: '1000km ~ 9999km',
    value: {
      minKilometer: 1000,
      maxKilometer: 9999,
    },
  },
  {
    name: '9999km ~ 99999km',
    value: {
      minKilometer: 9999,
      maxKilometer: 99999,
    },
  },
]

export default Distance
