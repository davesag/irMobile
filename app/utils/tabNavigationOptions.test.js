import tabNavigationOptions from './tabNavigationOptions'
import { getActiveChildNavigationOptions } from 'react-navigation'

const navigation = 'navigation'
const screenProps = 'screen props'

describe('tabNavigationOptions', () => {
  beforeAll(() => {
    tabNavigationOptions({ navigation, screenProps })
  })

  it('invoked getActiveChildNavigationOptions with the correct params', () => {
    expect(getActiveChildNavigationOptions).toHaveBeenCalledWith(
      navigation,
      screenProps
    )
  })
})
