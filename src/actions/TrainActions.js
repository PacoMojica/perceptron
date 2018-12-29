import {
  UPDATE_WEIGHTS,
  UPDATE_PRODUCTS,
  UPDATE_WEIGHTED_SUM,
  UPDATE_OUTPUT,
  UPDATE_EPOCH,
  APPEND_ERROR,
  UPDATE_ERRORS,
} from './actions'

export const updateWeights = weights => ({
  type: UPDATE_WEIGHTS,
  weights,
})

export const updateProducts = products => ({
  type: UPDATE_PRODUCTS,
  products,
})

export const updateWeightedSum = weightedSum => ({
  type: UPDATE_WEIGHTED_SUM,
  weightedSum,
})

export const updateOutput = weightedSum => ({
  type: UPDATE_OUTPUT,
  weightedSum,
})

export const updateEpoch = epoch => ({
  type: UPDATE_EPOCH,
  epoch,
})

export const appendError = error => ({
  type: APPEND_ERROR,
  error,
})

export const updateErrors = errors => ({
  type: UPDATE_ERRORS,
  errors,
})