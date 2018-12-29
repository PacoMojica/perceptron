import { index, set, setSize } from './SetReducers'
import {
  weights,
  products,
  weightedSum,
  output,
  epoch,
  errors,
} from './TrainReducers'

const reducer = (state = {}, action) => ({
  weights: weights(state.weights, action),
  products: products(state.products, action),
  weightedSum: weightedSum(state.weightedSum, action),
  output: output(state.output, action),
  epoch: epoch(state.epoch, action),
  errors: errors(state.errors, action),
  index: index(state.index, action),
  set: set(state.set, action),
  setSize: setSize(state.setSize, action),
})

export default reducer