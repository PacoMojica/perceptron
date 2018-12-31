import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'

function Input({ classes, input, weight }) {
  return (
    <Grid item>
      <Paper className={classes.paper}>
        <Field label={'input'} value={input} />
        <Field label={'weight'} value={weight} />
      </Paper>
    </Grid>
  )
}

Input.propTypes = {
  input: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(Input)