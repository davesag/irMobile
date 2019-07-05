import makeNavigationOptions from './makeNavigationOptions'
import StoryBookUI from '../../storybook'

const useStorybook = (nav, force = process.env.NODE_ENV === 'development') =>
  force
    ? {
        ...nav,
        StoryBook: {
          screen: StoryBookUI,
          navigationOptions: makeNavigationOptions('Storybook', 'book-open')
        }
      }
    : nav

export default useStorybook
