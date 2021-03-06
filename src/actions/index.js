import * as actions from './actions'

const actionCreator = (type, ...names) => (
  (...values) => {
    const action = { type }
    names.forEach((name, index) => (
        action[name] = values[index]
    ))

    return action
  }
)

export const changeTabIndex = actionCreator(
  actions.CHANGE_TAB_INDEX,
  'tabIndex'
)

export const changeIndex = actionCreator(
  actions.CHANGE_INDEX,
  'index'
)

export const changeTrainingSet = actionCreator(
  actions.CHANGE_TRAINING_SET,
  'trainingSet'
)

export const changeHyperplane = actionCreator(
  actions.CHANGE_HYPERPLANE,
  'hyperplane',
  'trainingSet',
  'errors',
  'weightDiff'
)

export const changeLearningRate = actionCreator(
  actions.CHANGE_LEARNING_RATE,
  'learningRate'
)

export const updateEpoch = actionCreator(
  actions.UPDATE_EPOCH,
  'epoch'
)

export const changeCalculated = actionCreator(
  actions.CHANGE_CALCULATED,
  'calculated',
  'trainingSet',
)

export const train = actionCreator(
  actions.TRAIN,
  'index',
  'weights',
  'products',
  'weightedSum',
  'weightDiff',
  'output',
  'errors',
  'epoch'
)

export const changeSnackbar = actionCreator(
  actions.CHANGE_SNACKBAR,
  'snackbar'
)

export const toggleSnackbar = actionCreator(
  actions.TOGGLE_SNACKBAR,
  'open'
)

export const toggleShowNext = actionCreator(
  actions.TOGGLE_SHOW_NEXT,
  'showNext'
)