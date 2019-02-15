import * as actions from '../actions/actions'

/**
 * State Handlers
 */
const train = (state, action) => ({
  ...state,
  snackbar: {
    open: true,
    info: {
      message: 'perceptron trained',
      key: new Date().getTime(),
    },
  },
  calculated: {
    ...state.calculated,
    index: action.index,
    weights: action.weights,
    products: action.products,
    weightedSum: action.weightedSum,
    weightDiff: action.weightDiff,
    output: action.output,
    errors: action.errors,
    epoch: action.epoch,
  },
})

const changeHyperplane = (state, action) => ({
  ...state,
  snackbar: {
    open: true,
    info: {
      message: 'the base hyperplane changed',
      key: new Date().getTime(),
    },
  },
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
  snackbar: {
    open: true,
    info: {
      message: 'the training set changed',
      key: new Date().getTime(),
    },
  },
  calculated: {
    ...action.calculated,
  },
  trainingSet: action.trainingSet
})

const changeLearningRate = (state, action) => ({
  ...state,
  snackbar: {
    open: true,
    info: {
      message: 'the learning rate changed',
      key: new Date().getTime(),
    },
  },
  learningRate: action.learningRate
})

export const stateHandler = {
  [actions.TRAIN]: train,
  [actions.CHANGE_HYPERPLANE]: changeHyperplane,
  [actions.CHANGE_CALCULATED]: changeCalculated,
  [actions.CHANGE_LEARNING_RATE]: changeLearningRate,
}

/** 
 * Tab Index Handlers
 */
const changeTabIndex = (state, action) => action.tabIndex

export const tabIndexHandler = {
  [actions.CHANGE_TAB_INDEX]: changeTabIndex,
}

/**
 * Snackbar Handlers
 */
const changeSnackbar = (state, action) => action.snackbar

const toggleSnackbar = (state, action) => ({
  ...state,
  open: action.open
})

export const snackbarHandler = {
  [actions.CHANGE_SNACKBAR]: changeSnackbar,
  [actions.TOGGLE_SNACKBAR]: toggleSnackbar,
}

/**
 * Show Next Handlers
 */
const toggleShowNext = (state, action) => action.showNext

export const showNextHandler = {
  [actions.TOGGLE_SHOW_NEXT]: toggleShowNext,
}

/**
 * Calculated Handlers
 */

export const calculatedHandler = {
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
}