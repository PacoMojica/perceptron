import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'
import { StoreContext } from '../../context/StoreContext'

function Sum({ classes }) {
  const { state } = useContext(StoreContext)
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
          <Field label={'sum'} value={state.calculated.weightedSum} />
        </Paper>
      </Grid>
    </Grid>
  )
}

Sum.propTypes = {
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

export default withStyles(styles)(Sum)