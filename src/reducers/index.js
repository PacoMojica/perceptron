import { index, set, setSize, hyperplane } from './SetReducers'
import {
  weights,
  weightDiff,
  products,
  weightedSum,
  output,
  epoch,
  errors,
  learningRate,
} from './TrainReducers'

const reducer = (state = {}, action) => ({
  weights: weights(state.weights, action),
  products: products(state.products, action),
  weightedSum: weightedSum(state.weightedSum, action),
  output: output(state.output, action),
  epoch: epoch(state.epoch, action),
  errors: errors(state.errors, action),
  weightDiff: weightDiff(state.weightDiff, action),
  index: index(state.index, action),
  hyperplane: hyperplane(state.hyperplane, action),
  set: set(state.set, action),
  setSize: setSize(state.setSize, action),
  learningRate: learningRate(state.learningRate, action),
})

export default reducer