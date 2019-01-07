import * as handlers from './handlers'

const createReducer = (initialState, handlers) => (
  (state = initialState, action) => (
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state
  )
)

const stateReducer = createReducer({}, handlers.stateHandler)
const calculatedReducer = createReducer({}, handlers.calculatedHandler)
const trainingSetReducer = createReducer([], handlers.trainigSetHandler)
const learningRateReducer = createReducer(0.1, handlers.learningRateHandler)

const reducer = (state = {}, action) => ({
  ...stateReducer(
    {
      ...state,
      calculated: calculatedReducer(state.calculated, action),
      trainingSet: trainingSetReducer(state.trainingSet, action),
      learningRate: learningRateReducer(state.learningRate, action),
    },
    action
  ),
})

export default reducer