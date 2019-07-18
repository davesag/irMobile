import { Platform } from 'react-native'
import { DefaultTheme } from 'react-native-paper'

// lifted from react-native-elements/src/config/colors.js
const platform = {
  ios: {
    primary: '#007aff',
    secondary: '#5856d6',
    success: '#4cd964',
    error: '#ff3b30',
    warning: '#ffcc00'
  },
  android: {
    primary: '#2196f3',
    secondary: '#9C27B0',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ffeb3b'
  }
}

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...(platform[Platform.OS] || {}),
    accent: platform[Platform.OS]
      ? platform[Platform.OS].primary
      : DefaultTheme.colors.accent,
    startup: '#325691'
  }
}
