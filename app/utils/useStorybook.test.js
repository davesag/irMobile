import useStorybook from './useStorybook'

const nav = {}

describe('force = true', () => {
  it('adds the StoryBook screen', () => {
    expect(useStorybook(nav, true)).toHaveProperty('StoryBook')
  })
})

describe('force is default', () => {
  it('does not add the StoryBook screen', () => {
    expect(useStorybook(nav)).not.toHaveProperty('StoryBook')
  })
})
