import onlyWithBalance from './onlyWithBalance'

const data = [{ availableBalance: 0, id: 1 }, { availableBalance: 1, id: 2 }]

const expected = [{ availableBalance: 1, id: 2 }]

it('filters the data as expected', () => {
  expect(data.filter(onlyWithBalance)).toEqual(expected)
})
