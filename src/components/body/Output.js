import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'
import { StoreContext } from '../../context/StoreContext';

function Output({ classes }) {
  const { state } = useContext(StoreContext)
  const { index, errors, epoch, output } = state.calculated
  const setSize = state.trainingSet.length
  const currentItem = state.trainingSet[index]
  const error = errors[epoch * setSize + index]

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignContent='center'
      spacing={16}
      className={classes.container}
    >
      <Grid item>
        <Paper className={classes.paper}>
          <Field label={'target'} value={currentItem.target} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <Field label={'output'} value={output} />
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <Field label={'error'} value={error} />
        </Paper>
      </Grid>
    </Grid>
  )
}

Output.propTypes = {
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

export default withStyles(styles)(Output)