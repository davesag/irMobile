import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import {
  _dangerousClearAll,
  getData,
  storeData,
  clearData
} from './persistence'

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)

const key = 'some-key'
const data = { some: 'data', more: 'better data' }
const json = JSON.stringify(data)

let result

const resetMocks = () => {
  mockAsyncStorage.getItem.mockClear()
  mockAsyncStorage.setItem.mockClear()
  mockAsyncStorage.removeItem.mockClear()
}

describe('#getData', () => {
  describe('when there is data', () => {
    beforeAll(async () => {
      mockAsyncStorage.getItem.mockResolvedValue(json)
      result = await getData(key)
    })

    afterAll(resetMocks)

    it('called AsyncStorage.getItem with the key', () => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(key)
    })

    it('returned the expected data', () => {
      expect(result).toEqual(data)
    })
  })

  describe('when there is no data', () => {
    beforeAll(async () => {
      mockAsyncStorage.getItem.mockResolvedValue()
      result = await getData(key)
    })

    afterAll(resetMocks)

    it('called AsyncStorage.getItem with the key', () => {
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith(key)
    })

    it('returned null', () => {
      expect(result).toBeNull()
    })
  })
})

describe('#storeData', () => {
  describe('when there is no data', () => {
    beforeAll(async () => {
      await storeData(key)
    })

    afterAll(resetMocks)

    it('called AsyncStorage.setItem with the key and data', () => {
      expect(mockAsyncStorage.setItem).not.toHaveBeenCalled()
    })
  })

  describe('when saving data', () => {
    beforeAll(async () => {
      await storeData(key, data)
    })

    afterAll(resetMocks)

    it('called AsyncStorage.setItem with the key and data', () => {
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(key, json)
    })
  })
})

describe('#clearData', () => {
  beforeAll(async () => {
    await clearData(key)
  })

  afterAll(resetMocks)

  it('called AsyncStorage.removeItem with the key', () => {
    expect(mockAsyncStorage.removeItem).toHaveBeenCalledWith(key)
  })
})

describe('#_dangerousClearAll', () => {
  beforeAll(async () => {
    await _dangerousClearAll()
  })

  it('called AsyncStorage.clear', () => {
    expect(mockAsyncStorage.clear).toHaveBeenCalled()
  })
})
