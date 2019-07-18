import { Platform, StyleSheet } from 'react-native'

const monospace = Platform.select({
  android: 'monospace',
  ios: 'Courier New'
})

const borderWidth = 0.2
const horizontalPadding = 3

const cellStyle = (index, array, theme, align) => {
  const style = {
    paddingLeft: index === 0 ? 0 : horizontalPadding,
    paddingRight: index === array.length - 1 ? 0 : horizontalPadding,
    marginVertical: 5,
    paddingVertical: -10,
    width: index === 0 ? 50 : 150,
    borderRightWidth: index === array.length - 1 ? 0 : borderWidth,
    borderRightColor: theme.colors.tableBorderColor
  }

  const justifyContent = align
    ? align === 'left'
      ? /* istanbul ignore next */ 'flex-start'
      : 'flex-end'
    : undefined

  return justifyContent
    ? {
        ...style,
        justifyContent
      }
    : style
}

const rowStyle = theme => ({
  paddingHorizontal: horizontalPadding
})

const headerStyle = theme => ({
  ...rowStyle(theme),
  borderBottomWidth: borderWidth * 2,
  borderBottomColor: theme.colors.tableBorderColor
})

const footerStyle = theme => ({
  ...rowStyle(theme),
  borderTopWidth: borderWidth * 2,
  borderTopColor: theme.colors.tableBorderColor
})

export default StyleSheet.create({
  data: {
    fontSize: 9,
    fontFamily: monospace,
    overflow: 'hidden',
    flexWrap: 'nowrap'
  },
  footer: {
    fontSize: 9,
    fontFamily: monospace,
    fontWeight: 'bold'
  },
  cellStyle,
  rowStyle,
  headerStyle,
  footerStyle
})
