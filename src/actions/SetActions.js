import {
  CHANGE_INDEX,
  UPDATE_SET,
} from './actions'

export const changeIndex = index => ({
  type: CHANGE_INDEX,
  index,
})

export const resetSet = (set, setSize) => ({
  type: UPDATE_SET,
  set,
  setSize,
})