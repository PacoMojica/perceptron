import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import TrainingState from './sidebar/TrainingState'
import Controls from './sidebar/Controls'

function SideBar({ classes }) {

  return (
    <nav className={classes.drawer}>
      <Drawer
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <TrainingState />
        <Divider />
        <Controls />
      </Drawer>
    </nav>
  )
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const DRAWER_WIDTH = 300
const styles = theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
})

export default withStyles(styles, { withTheme: true })(SideBar)