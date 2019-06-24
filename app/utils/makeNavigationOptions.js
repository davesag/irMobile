const makeNavigationOptions = ({
  header = null,
  title = null,
  ...fields
} = {}) => () => ({
  header,
  title,
  ...fields
})

module.exports = makeNavigationOptions
