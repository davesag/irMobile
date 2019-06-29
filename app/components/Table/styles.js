import { Platform, StyleSheet } from 'react-native'

const monospace = Platform.select({
  android: 'monospace',
  ios: 'Courier New'
})

const cell = {
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '25%',
  paddingLeft: 5,
  paddingRight: 5,
  overflow: 'hidden',
  flexWrap: 'nowrap',
  height: 16
}

export default StyleSheet.create({
  table: {
    alignSelf: 'flex-start'
  },
  row: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 5
  },
  headerCell: {
    ...cell,
    fontSize: 11,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 3,
    height: 22
  },
  header: {
    fontWeight: 'bold'
  },
  dataCell: {
    ...cell
  },
  data: {
    fontSize: 10,
    fontFamily: monospace,
    overflow: 'hidden',
    flexWrap: 'nowrap'
  },
  footerCell: {
    ...cell,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    paddingTop: 5,
    paddingBottom: 5,
    height: 20
  },
  footer: {
    fontSize: 10,
    fontFamily: monospace,
    fontWeight: 'bold'
  }
})
