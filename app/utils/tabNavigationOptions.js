import { getActiveChildNavigationOptions } from 'react-navigation'

const tabNavigationOptions = ({ navigation, screenProps }) =>
  getActiveChildNavigationOptions(navigation, screenProps)

export default tabNavigationOptions
