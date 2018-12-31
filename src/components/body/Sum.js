import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'

function Sum({ classes, sum }) {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignContent='center'
      spacing={16}
      className={classes.container}
    >
      <Grid item>
        <Paper className={classes.paper}>
          <Field label={'sum'} value={sum} />
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
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(Sum)