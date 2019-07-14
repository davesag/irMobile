import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { paddingTop: 10 },
  input: {
    fontSize: 7,
    fontFamily: Platform.select({ android: 'monospace', ios: 'Courier New' })
  },
  buttons: { marginTop: 10, flexDirection: 'row', justifyContent: 'flex-end' },
  saveButton: { marginRight: 5 },
  clearButton: { marginLeft: 5, marginRight: 10 },
  error: { color: 'red' },
  switchWrapper: { flexDirection: 'row', alignItems: 'center' },
  switchLabel: { marginLeft: 10 }
})
