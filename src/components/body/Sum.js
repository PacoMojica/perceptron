import React, { useContext, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'
import { StoreContext } from '../../context/StoreContext'

function Sum({ classes, sum }) {
  const { state } = useContext(StoreContext)
  const [ssum] = useState(state.weightedSum)
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
          <Field label={'sum'} value={ssum}>
            {state.weightedSum}
          </Field>
        </Paper>
      </Grid>
    </Grid>
  )
}

Sum.propTypes = {
  classes: PropTypes.object.isRequired,
  sum: PropTypes.number.isRequired,
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