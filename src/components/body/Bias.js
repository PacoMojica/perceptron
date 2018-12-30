import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'

function Bias({ classes, bias }) {
  return (
    <Grid item>
      <Grid item>
        <Paper className={classes.paper}>
          <Field label={'bias'} value={bias} />
        </Paper>
      </Grid>
    </Grid>
  )
}

Bias.propTypes = {
  bias: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
  }
})

export default withStyles(styles)(Bias)