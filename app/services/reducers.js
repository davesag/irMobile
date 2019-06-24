import { combineReducers } from 'redux'

import ir from './ir/reducer'

const createReducer = combineReducers({
  ir
})

export default createReducer
