import * as handlers from './handlers'

const createReducer = (initialState : any, handlers) => (
  (state = initialState, action) => (
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state
  )
)

const stateReducer = createReducer({}, handlers.stateHandler)
const tabIndexReducer = createReducer(0, handlers.tabIndexHandler)
const calculatedReducer = createReducer({}, handlers.calculatedHandler)
const trainingSetReducer = createReducer([], handlers.trainigSetHandler)
const learningRateReducer = createReducer(0.1, handlers.learningRateHandler)

const reducer = (state = {}, action) => ({
  ...stateReducer(
    {
      ...state,
      tabIndex: tabIndexReducer(state.tabIndex, action),
      calculated: calculatedReducer(state.calculated, action),
      trainingSet: trainingSetReducer(state.trainingSet, action),
      learningRate: learningRateReducer(state.learningRate, action),
    },
    action
  ),
})

export default reducer