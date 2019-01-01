import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'
import { StoreContext } from '../../context/StoreContext';

function Output({ classes }) {
  const { state } = useContext(StoreContext)
  const currentItem = state.set[state.index]
  const error = state.errors[state.epoch][state.index]

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
          <Field label={'output'} value={state.output} />
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