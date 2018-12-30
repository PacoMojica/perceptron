import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Input from './Input'
import Bias from './Bias'

function Inputlayer({ classes, inputs, weights }) {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignContent='center'
      spacing={16}
      className={classes.container}
    >
      {inputs.map((input, index) => {
        if(index < 2) {
          return <Input key={index} input={input} weight={weights[index]} />
        } else {
          return <Bias key={index} bias={weights[index]} />
        }
      })}
    </Grid>
  )
}

Inputlayer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
  },
})

export default withStyles(styles)(Inputlayer)