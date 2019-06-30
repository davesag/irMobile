export const getKeys = ({ ir: { apiKey, apiSecret, requireAuth } }) => ({
  apiKey,
  apiSecret,
  requireAuth
})

export const getMessage = ({ ir: { message } }) => message
