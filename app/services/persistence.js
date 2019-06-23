/*
  TODO: replace with secure persistence using https://github.com/oblador/react-native-keychain
  TODO: only allow access if user has authenticated
  see https://medium.com/react-native-training/integrate-touch-id-and-face-id-to-your-react-native-app-707e7db17edc
*/

import AsyncStorage from '@react-native-community/async-storage'

export const storeData = async (key, value) =>
  value ? AsyncStorage.setItem(key, JSON.stringify(value)) : undefined

export const getData = async key => {
  const value = await AsyncStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export const clearData = async key => AsyncStorage.removeItem(key)

// NOTE: Erases all AsyncStorage for all clients, libraries, etc.
// You almost never want to use this but it's handy for resetting the local-store
// while debugging.
// see https://facebook.github.io/react-native/docs/asyncstorage#clear
export const _dangerousClearAll = async () => AsyncStorage.clear()
