import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Item from './Item'
import NestedItems from './NestedItems'

function Controls({ feedNeuron }) {
  return (
    <List dense={true}>
      <Item label='' value={'Feed Neuron'} button={true} onClick={() => feedNeuron()} />
    </List>
  )
}

Controls.propTypes = {
  feedNeuron: PropTypes.func.isRequired,
}

export default Controls