import formatData from './formatData'

const details = [
  { currency: 'Xbt', balance: 3, fiatPrice: 16839.25, fiatValue: 50517.75 },
  {
    currency: 'Eth',
    balance: 21.62806365,
    fiatPrice: 464.04,
    fiatValue: 10036.286656146001
  },
  {
    currency: 'Xlm',
    balance: 2026.2727175,
    fiatPrice: 0.20787,
    fiatValue: 421.201309786725
  }
]

describe('#formatData', () => {
  const expected = {
    body: [
      ['Xbt', '    3.00000000', '16,839.250', '50,517.75'],
      ['Eth', '   21.62806365', '   464.040', '10,036.29'],
      ['Xlm', '2,026.27271750', '     0.208', '   421.20']
    ],
    footer: ['Total', '', '', '60,975.24']
  }

  let body
  let footer

  beforeAll(() => {
    /* eslint-disable-next-line no-extra-semi */
    ;({ body, footer } = formatData(details))
  })

  it('produced the expected body data', () => {
    expect(body).toEqual(expected.body)
  })

  it('produced the expected footer data', () => {
    expect(footer).toEqual(expected.footer)
  })
})
