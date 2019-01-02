import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import Item from './Item'
import * as util from '../../util/stateUtil'
import * as actions from '../../actions/index'
import { StoreContext } from '../../context/StoreContext'

function Controls() {
  const { state, dispatch } = useContext(StoreContext)
  const { errors, index, weights, weightDiff, setSize, epoch } = state
  
  const feedNeuron = () => {
    const currentError = errors[epoch * setSize + index]
    const newWeights = currentError !== 0
      ? util.calcNewWeights(weights, weightDiff)
      : weights
    const nextIndex = (index + 1) % setSize
    const nextEpoch = ((!nextIndex && epoch + 1) || epoch)
    const { inputs, target } = state.set[nextIndex]
    const products = util.calcProducts(inputs, newWeights)
    const weightedSum = util.calcWeightedSum(products)
    const output = util.calcOutput(weightedSum)
    const newError = util.calcError(target, output)
    const newWeightDiff = newError === 0
      ? [0, 0, 0]
      : util.calcWeightDiff(newWeights, inputs, newError, state.learningRate)

    dispatch(actions.changeIndex(nextIndex))
    dispatch(actions.updateEpoch(nextEpoch))
    dispatch(actions.updateWeights(newWeights, newWeightDiff))
    dispatch(actions.updateProducts(products))
    dispatch(actions.updateWeightedSum(weightedSum))
    dispatch(actions.updateOutput(output))
    dispatch(actions.appendError(newError))
  }
  
  return (
    <List dense={true}>
      <Item label='' value={'Feed Neuron'} button={true} onClick={() => feedNeuron()} />
    </List>
  )
}

export default Controls