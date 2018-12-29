import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Perceptron from './Perceptron'
import TopBar from './TopBar'

function App({ classes }) {
  return (

    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <div className={classes.container}>
        <Perceptron />
      </div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    flexGrow: 1,
    margin: theme.spacing.unit * 3,
  }
})

export default withStyles(styles)(App)