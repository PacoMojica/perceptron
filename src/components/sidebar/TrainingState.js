import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Item from './Item'
import NestedItems from './NestedItems'
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp'
import TrendingDownSharpIcon from '@material-ui/icons/TrendingDownSharp'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import FastForwardIcon from '@material-ui/icons/FastForward'
import AdjustIcon from '@material-ui/icons/Adjust'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import StraightenIcon from '@material-ui/icons/Straighten'
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall'

function TrainingState(props) {
  const { 
    index,
    setSize,
    epoch,
    learningRate,
    weightDiff,
    nextItem,
  } = props

  return (
    <List dense={true}>
      <Item label='index' value={index} />
      <Item label='set size' value={setSize} Icon={StraightenIcon} />
      <Item label='current epoch' value={epoch} Icon={AccessTimeIcon} />
      <Item label='learning rate' value={learningRate} Icon={PhotoSizeSelectSmallIcon} />
      <NestedItems title='Weight Updates' Icon={ChangeHistoryIcon}>
        {weightDiff.map((weight, index) => (
          <Item
            key={index}
            label={index < 2 ? 'weight' : 'bias'}
            value={weight}
            Icon={weight > 0 ? TrendingUpSharpIcon : TrendingDownSharpIcon}
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

TrainingState.propTypes = {
  index: PropTypes.number.isRequired,
  epoch: PropTypes.number.isRequired,
  weightDiff: PropTypes.array.isRequired,
  nextItem: PropTypes.object.isRequired,
}

export default TrainingState