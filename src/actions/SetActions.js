import {
  CHANGE_INDEX,
  UPDATE_SET,
  UPDATE_HYPERPLANE,
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

export const updateHyperplane = hyperplane => ({
  type: UPDATE_HYPERPLANE,
  hyperplane,
})