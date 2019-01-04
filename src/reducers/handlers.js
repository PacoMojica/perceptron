import * as actions from '../actions/actions'

const train = (state, action) => ({
  ...state,
  index: action.index,
  weights: action.weights,
  products: action.products,
  weightedSum: action.weightedSum,
  weightDiff: action.weightDiff,
  output: action.output,
  errors: action.errors,
  epoch: action.epoch,
})

export const calculatedHandler = {
  [actions.TRAIN]: train,
}

export const trainigSetHandler = {
  [actions.CHANGE_TRAINING_SET]: (state, action) => action.trainigSet,
}

export const hyperplaneHandler = {
  [actions.CHANGE_HYPERPLANE]: (state, action) => action.hyperplane,
}
export const learningRateHandler = {
  [actions.CHANGE_LEARNING_RATE]: (state, action) => action.learningRate,
}