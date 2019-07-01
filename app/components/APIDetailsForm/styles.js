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
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  saveButton: {
    paddingRight: 10
  },
  clearButton: {
    paddingLeft: 10,
    paddingRight: 10
  }
})
