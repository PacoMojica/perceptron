import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Input from './Input'

function Inputlayer({ classes, inputs, weights }) {
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignContent='center'
      spacing={16}
      className={classes.container}
    >
      {inputs.slice(0, 2).map((input, index) => (
        <Input key={index} input={input} weight={weights[index]} />
      ))}
    </Grid>
  )
}

Inputlayer.propTypes = {
  classes: PropTypes.object.isRequired,
  inputs: PropTypes.array.isRequired,
  weights: PropTypes.array.isRequired,
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

export default withStyles(styles)(Inputlayer)