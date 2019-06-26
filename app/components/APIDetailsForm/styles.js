import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 10
  },
  input: {
    fontFamily: Platform.select({
      android: 'monospace',
      ios: 'Courier New'
    })
  }
})
