import { func, number, shape, string } from 'prop-types'

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

export const errorShape = {
  name: string.isRequired,
  message: string,
  details: shape({
    method: string.isRequired,
    url: string.isRequired
  }),
  status: number
}
