import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'
import { StoreContext } from '../../context/StoreContext'

function Inputlayer({ classes }) {
  const { state } = useContext(StoreContext)
  const { index, weights } = state.calculated
  const { inputs } = state.trainingSet[index]

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
        <Grid key={index} item>
          <Paper className={classes.paper}>
            <Field label={'input'} value={input} />
            <Field label={'weight'} value={weights[index]} />
          </Paper>
        </Grid>
      ))}
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
  },
  paper: {
    padding: theme.spacing.unit,
  },
})

export default withStyles(styles)(Inputlayer)