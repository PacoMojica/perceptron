import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import Item from './Item'
import NestedItems from './NestedItems'
import { StoreContext } from '../../context/StoreContext'
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp'
import TrendingDownSharpIcon from '@material-ui/icons/TrendingDownSharp'
import TrendingFlatSharpIcon from '@material-ui/icons/TrendingFlatSharp'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import FastForwardIcon from '@material-ui/icons/FastForward'
import AdjustIcon from '@material-ui/icons/Adjust'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import StraightenIcon from '@material-ui/icons/Straighten'
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall'
import * as actions from '../../actions/index'

function TrainingState() {
  const { state, dispatch } = useContext(StoreContext)
  const { index, epoch, weightDiff } = state.calculated
  const setSize = state.trainingSet.length
  const nextIndex = (index + 1) % setSize
  const nextItem = state.trainingSet[nextIndex]

  const handleMouseEnterNextItem = () => {
    dispatch(actions.toggleShowNext(true))
  }

  const handleMouseLeaveNextItem = () => {
    dispatch(actions.toggleShowNext(false))
  }

  return (
    <List dense={true}>
      <NestedItems title='Weight Updates' Icon={ChangeHistoryIcon} startOpen={true}>
        {weightDiff.map((weight, index) => (
          <Item
            key={index}
            label={index < 2 ? 'weight' : 'bias'}
            value={weight}
            Icon={weight === 0
              ? TrendingFlatSharpIcon
              : weight > 0
                ? TrendingUpSharpIcon
                : TrendingDownSharpIcon}
          />
        ))}
      </NestedItems>
      <NestedItems title='Training Info'>
        <Item key='index' label='index' value={index} />
        <Item key='set size' label='set size' value={setSize} Icon={StraightenIcon} />
        <Item key='current epoch' label='current epoch' value={epoch} Icon={AccessTimeIcon} />
        <Item key='learning rate' label='learning rate' value={state.learningRate} Icon={PhotoSizeSelectSmallIcon} />
      </NestedItems>
      <NestedItems
        title='Next Item'
        Icon={FastForwardIcon}
        handleMouseEnter={handleMouseEnterNextItem}
        handleMouseLeave={handleMouseLeaveNextItem}
      >
        <Item key='input 1' label='input 1' value={nextItem.inputs[0]} Icon={ScatterPlotIcon} />
        <Item key='input 2' label='input 2' value={nextItem.inputs[1]} Icon={ScatterPlotIcon} />
        <Item key='target' label='target' value={nextItem.target} Icon={AdjustIcon} />
      </NestedItems>
    </List>
  )
}

export default TrainingState