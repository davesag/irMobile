const LONGEST = {
  balance: undefined,
  fiatPrice: undefined,
  fiatValue: undefined,
  total: undefined
}

const reset = () => {
  const base = { lhs: 0, rhs: 0 }
  Object.keys(LONGEST).forEach(key => {
    LONGEST[key] = { ...base }
  })
}

const round = (number, decimals = 0) => {
  if (decimals === 0) return number
  const power = Math.pow(10, decimals)
  return Math.round(number * power + Number.EPSILON) / power
}

const toString = (value, decimals) => {
  const localeOptions = { type: 'decimal', maximumFractionDigits: 8 }
  if (decimals) localeOptions.minimumFractionDigits = 2

  return round(value, decimals).toLocaleString('en-AU', localeOptions)
}

const checkLongest = row => (field, decimals) => {
  const value = row[field]
  const string = toString(value, decimals)
  const [lhs, rhs] = string.split('.')
  if (lhs.length > LONGEST[field].lhs) LONGEST[field].lhs = lhs.length
  if (rhs !== undefined && rhs.length > LONGEST[field].rhs)
    LONGEST[field].rhs = rhs.length
  return string
}

const pad = field => string => {
  const [lhs, rhs] = string.split('.')
  const padLeft = lhs.padStart(LONGEST[field].lhs, ' ')
  const padRight = (rhs || '').padEnd(LONGEST[field].rhs, ' ')
  return rhs ? `${padLeft}.${padRight}` : `${padLeft} ${padRight}`
}

const formatData = data => {
  reset()
  const rows = data.map(row => [
    row.currency,
    checkLongest(row)('balance'),
    checkLongest(row)('fiatPrice', 3),
    checkLongest(row)('fiatValue', 2)
  ])

  const fValue = data.reduce((acc, { fiatValue }) => {
    acc = acc + fiatValue
    return acc
  }, 0)
  const total = checkLongest({ fiatValue: fValue })('fiatValue', 2)

  // { currency: 'Eth', balance: 21.62806365, fiatPrice: 464.04, fiatValue: 10036.286656146001 }

  const body = rows.reduce((acc, elem) => {
    const [currency, balance, fiatPrice, fiatValue] = elem
    acc.push([
      currency,
      pad('balance')(balance),
      pad('fiatPrice')(fiatPrice),
      pad('fiatValue')(fiatValue)
    ])
    return acc
  }, [])
  const footer = ['Total', '', '', total]
  return { body, footer }
}

export default formatData
