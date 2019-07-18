import { cleanKey, cleanSecret } from './clean'

const handlers = ({ handleChange, values }) => ({
  handleChangeKey: value => {
    handleChange('apiKey')(cleanKey(value))
  },

  handleChangeSecret: value => {
    handleChange('apiSecret')(cleanSecret(value))
  },

  handleFocusKey: () => {
    if (values.apiKey) handleChange('apiKey')(null)
  },

  handleFocusSecret: () => {
    if (values.apiSecret) handleChange('apiSecret')(null)
  }
})

export default handlers
