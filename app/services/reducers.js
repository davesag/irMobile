import { combineReducers } from 'redux'

import irReducer from './ir/reducer'

const createReducer = combineReducers({
  irReducer
})

export default createReducer
