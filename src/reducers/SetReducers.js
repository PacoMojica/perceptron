import {
  CHANGE_INDEX,
  UPDATE_SET,
} from '../actions/actions'

export const index = (state = 0, action) => (
  action.type === CHANGE_INDEX
    ? action.index
    : state
)

export const set = (state = [], action) => (
  action.type === UPDATE_SET
    ? action.set
    : state
)

export const setSize = (state = 0, action) => (
  action.type === UPDATE_SET
    ? action.setSize
    : state
)