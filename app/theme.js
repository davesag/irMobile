import { Platform } from 'react-native'
import { colors } from 'react-native-elements'

export default {
  colors: {
    ...Platform.select({
      android: colors.platform.android,
      default: colors.platform.ios
    })
  }
}
