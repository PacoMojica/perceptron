import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import Item from './Item'
import * as util from '../../util/stateUtil'
import * as actions from '../../actions/index'
import { StoreContext } from '../../context/StoreContext'

function Controls() {
  const { state, dispatch } = useContext(StoreContext)
  const { errors, index, weights, weightDiff, epoch } = state.calculated
  const setSize = state.trainingSet.length

  const feedNeuron = () => {
    const newWeights = util.calcNewWeights(weights, weightDiff)
    const nextIndex = (index + 1) % setSize
    const nextEpoch = ((!nextIndex && epoch + 1) || epoch)
    const { inputs, target } = state.trainingSet[nextIndex]
    const products = util.calcProducts(inputs, newWeights)
    const weightedSum = util.calcWeightedSum(products)
    const output = util.calcOutput(weightedSum)
    const newError = util.calcError(target, output)
    const newErrors = [...errors, newError]
    const newWeightDiff = util.calcWeightDiff(inputs, newError, state.learningRate)
    
    dispatch(actions.train(
      nextIndex,
      newWeights,
      products,
      weightedSum,
      newWeightDiff,
      output,
      newErrors,
      nextEpoch,
    ))
  }
  
  return (
    <List dense={true}>
      <Item label='' value={'Feed Neuron'} button={true} onClick={() => feedNeuron()} />
    </List>
  )
}

export default Controls