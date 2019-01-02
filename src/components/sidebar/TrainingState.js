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

function TrainingState() {
  const { state } = useContext(StoreContext)
  const nextIndex = (state.index + 1) % state.setSize
  const nextItem = state.set[nextIndex]

  return (
    <List dense={true}>
      <Item label='index' value={state.index} />
      <Item label='set size' value={state.setSize} Icon={StraightenIcon} />
      <Item label='current epoch' value={state.epoch} Icon={AccessTimeIcon} />
      <Item label='learning rate' value={state.learningRate} Icon={PhotoSizeSelectSmallIcon} />
      <NestedItems title='Weight Updates' Icon={ChangeHistoryIcon}>
        {state.weightDiff.map((weight, index) => (
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
      <NestedItems title='Next Item' Icon={FastForwardIcon}>
        <Item key='inputs' label='inputs' value={`[ ${nextItem.inputs.slice(0,2).join(', ')} ]`} Icon={ScatterPlotIcon} />
        <Item key='target' label='target' value={nextItem.target} Icon={AdjustIcon} />
      </NestedItems>
    </List>
  )
}

export default TrainingState