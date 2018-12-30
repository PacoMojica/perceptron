import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

function Field({ classes, label, value }) {
  return (
    <Grid container className={classes.container} justify='space-evenly' alignContent='center'>
      <Grid item xs={2} className={classes.wrapper}>
        <Typography color='textSecondary'>
          {label}:
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.value}>
        <Typography align='center'>
          {value}
        </Typography>
        <Divider />
      </Grid>
    </Grid>
  )
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapper: {
    marginBottom: theme.spacing.unit,
  },
  value: {
    paddingLeft: theme.spacing.unit * 2,
  }
})

Field.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Field)