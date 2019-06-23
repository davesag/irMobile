import { Platform, StyleSheet } from 'react-native'
import { backgroundTinted } from './colours'

export default StyleSheet.create({
  container: {
    top: Platform.OS === 'ios' ? 40 : /* istanbul ignore next */ 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: backgroundTinted,
    marginBottom: Platform.OS === 'ios' ? 25 : /* istanbul ignore next */ 0
  }
})
