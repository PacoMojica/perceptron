import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function TopBar({ classes }) {
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <ToolBar>
        <Typography variant='h5' color='inherit'>
          Perceptron
        </Typography>
      </ToolBar>
    </AppBar>
  )
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme =>  ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
})

export default withStyles(styles)(TopBar)