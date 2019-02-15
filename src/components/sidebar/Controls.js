import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import Item from './Item'
import * as util from '../../util/stateUtil'
import * as actions from '../../actions/index'
import { StoreContext } from '../../context/StoreContext'

function Controls() {
  const { state, dispatch } = useContext(StoreContext)
  const { learningRate, hyperplane } = state
  const { errors, index, weights, weightDiff, epoch } = state.calculated
  const setSize = state.trainingSet.length

  const train = () => {
    const newWeights = util.calcNewWeights(weights, weightDiff)
    const nextIndex = (index + 1) % setSize
    const nextEpoch = ((!nextIndex && epoch + 1) || epoch)
    const { inputs, target } = state.trainingSet[nextIndex]
    const products = util.calcProducts(inputs, newWeights)
    const weightedSum = util.calcWeightedSum(products)
    const output = util.calcOutput(weightedSum)
    const newError = util.calcError(target, output)
    const newErrors = [...errors, newError]
    const newWeightDiff = util.calcWeightDiff(inputs, newError, learningRate)
    
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

  const changeHyperplane = () => {
    const newHyperplane = util.randomArray()
    const newTrainingSet = state.trainingSet.map(({inputs}) => ({
      inputs: [...inputs],
      target: util.inSet(
        inputs[0],
        inputs[1],
        newHyperplane
      ),
    }))
    const { inputs, target } = newTrainingSet[index]
    const newError = util.calcError(target, state.calculated.output)
    const newErrors = [
      ...errors.filter((e, index) => index !== errors.length-1),
      newError
    ]
    const newWeightDiff = util.calcWeightDiff(inputs, newError, learningRate)

    dispatch(actions.changeHyperplane(
      newHyperplane,
      newTrainingSet,
      newErrors,
      newWeightDiff
    ))
  }

  const changeTrainingSet = () => {
    const newSet = util.generateSet(hyperplane, setSize)
    const { inputs, target } = newSet[0]
    const products = util.calcProducts(inputs, weights)
    const weightedSum = util.calcWeightedSum(products)
    const output = util.calcOutput(weightedSum)
    const error = util.calcError(target, output)
    const weightDiff = util.calcWeightDiff(inputs, error, learningRate)
    
    dispatch(actions.changeCalculated({
        index: 0,
        weights: weights,
        products: products,
        weightedSum: weightedSum,
        weightDiff: weightDiff,
        output: output,
        errors: [error],
        epoch: 0,
      },
      newSet
    ))
  }
  
  return (
    <List dense={true}>
      <Item value={'Train'} button={true} onClick={() => train()} />
      <Item value={'Change Base Hyperplane'} button={true} onClick={() => changeHyperplane()} />
      <Item value={'Change Training Set'} button={true} onClick={() => changeTrainingSet()} />
    </List>
  )
}

export default Controls