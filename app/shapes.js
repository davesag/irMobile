import { func, number, string } from 'prop-types'

export const navigationShape = {
  goBack: func.isRequired,
  navigate: func.isRequired
}

export const keysShape = {
  apiKey: string.isRequired,
  apiSecret: string.isRequired
}

export const balancesShape = {
  currency: string.isRequired,
  balance: number.isRequired,
  fiatPrice: number.isRequired,
  fiatValue: number.isRequired
}
