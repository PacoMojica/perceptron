import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import TabContainer from './TabContainer'
import SideBar from './SideBar'

function Perceptron({ classes }) {
  return (
    <div className={classes.root}>
      <SideBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <TabContainer />
      </main>
    </div>
  )
}

Perceptron.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,  
})

export default withStyles(styles)(Perceptron)