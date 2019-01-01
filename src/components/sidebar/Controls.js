import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import Item from './Item'
import * as util from '../../util/stateUtil'
import * as actions from '../../actions/index'
import { StoreContext } from '../../context/StoreContext'

function Controls() {
  const { state, dispatch } = useContext(StoreContext)
  
  const feedNeuron = () => {
    const nextIndex = (state.index + 1) % state.setSize
    const nextEpoch = ((!nextIndex && state.epoch + 1) || state.epoch)
    const newWeights = util.calcNewWeights(state.weights, state.weightDiff)
    const { inputs, target } = state.set[nextIndex]
    const products = util.calcProducts(inputs, newWeights)
    const weightedSum = util.calcWeightedSum(products)
    const output = util.calcOutput(weightedSum)
    const error = util.calcError(target, output)
    const weightDiff = util.calcWeightDiff(newWeights, inputs, error, state.learningRate)

    dispatch(actions.changeIndex(nextIndex))
    dispatch(actions.updateEpoch(nextEpoch))
    dispatch(actions.updateWeights(newWeights, weightDiff))
    dispatch(actions.updateProducts(products))
    dispatch(actions.updateWeightedSum(weightedSum))
    dispatch(actions.appendError(error))
  }
  
  return (
    <List dense={true}>
      <Item label='' value={'Feed Neuron'} button={true} onClick={() => feedNeuron()} />
    </List>
  )
}

export default Controls