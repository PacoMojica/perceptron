import * as handlers from './handlers'

const createReducer = (initialState, handlers) => (
  (state = initialState, action) => (
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state
  )
)

const calculatedReducer = createReducer({}, handlers.calculatedHandler)
const trainingSetReducer = createReducer([], handlers.trainigSetHandler)
const hyperplaneReducer = createReducer([], handlers.hyperplaneHandler)
const learningRateReducer = createReducer(0.1, handlers.learningRateHandler)

const reducer = (state = {}, action) => ({
  calculated: calculatedReducer(state.calculated, action),
  trainingSet: trainingSetReducer(state.trainingSet, action),
  hyperplane: hyperplaneReducer(state.hyperplane, action),
  learningRate: learningRateReducer(state.learningRate, action),
})

export default reducer