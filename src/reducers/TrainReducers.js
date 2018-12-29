import {
  UPDATE_WEIGHTS,
  UPDATE_PRODUCTS,
  UPDATE_WEIGHTED_SUM,
  UPDATE_OUTPUT,
  UPDATE_EPOCH,
  APPEND_ERROR,
  UPDATE_ERRORS,
} from '../actions/actions'

export const weights = (state = [], action) => (
  action.type === UPDATE_WEIGHTS
    ? action.weights
    : state
)

export const products = (state = [], action) => (
  action.type === UPDATE_PRODUCTS
    ? action.products
    : state
)

export const weightedSum = (state = 0, action) => (
  action.type === UPDATE_WEIGHTED_SUM
    ? action.weightedSum
    : state
)

export const output = (state = -1, action) => (
  action.type === UPDATE_OUTPUT
    ? action.weightedSum
    : state
)

export const epoch = (state = 0, action) => (
  action.type === UPDATE_EPOCH
    ? action.epoch
    : state
)

export const errors = (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case APPEND_ERROR:
      return { ...state, errors: [...state.errors, action.error]}
    case UPDATE_ERRORS:
      return { ...state, errors: action.errors}
    default:
      return state
  }
}