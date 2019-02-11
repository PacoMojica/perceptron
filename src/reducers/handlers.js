import * as actions from '../actions/actions'

/**
 * State Handlers
 */
const changeHyperplane = (state, action) => ({
  ...state,
  calculated: {
    ...state.calculated,
    weightDiff: action.weightDiff,
    errors: action.errors,
  },
  hyperplane: action.hyperplane,
  trainingSet: action.trainingSet,
})

const changeCalculated = (state, action) => ({
  ...state,
  calculated: {
    ...action.calculated,
  },
  trainingSet: action.trainingSet
})

export const stateHandler = {
  [actions.CHANGE_HYPERPLANE]: changeHyperplane,
  [actions.CHANGE_CALCULATED]: changeCalculated,
}

/** 
 * Tab Index Handlers
 */
const changeTabIndex = (state, action) => action.tabIndex

export const tabIndexHandler = {
  [actions.CHANGE_TAB_INDEX]: changeTabIndex,
}

/**
 * Calculated Handlers
 */
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

/**
 * Training Set Handlers
 */
export const trainigSetHandler = {
  [actions.CHANGE_TRAINING_SET]: (state, action) => action.trainigSet,
}

/**
 * Learning Rate Handlers
 */
export const learningRateHandler = {
  [actions.CHANGE_LEARNING_RATE]: (state, action) => action.learningRate,
}