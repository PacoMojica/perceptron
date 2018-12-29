import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TabContainer from '../containers/TabContainer'
import ControlBar from './ControlBar'

function Perceptron({ classes }) {
  return (
    <Grid container spacing={16} className={classes.container}>
      <Grid item xs={3}>
        <ControlBar />
      </Grid>
      <Grid item xs={9}>
        <TabContainer />
      </Grid>
    </Grid>
  )
}

Perceptron.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  container: {
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  }
})

export default withStyles(styles)(Perceptron)