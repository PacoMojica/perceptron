import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import TrainingState from './sidebar/TrainingState'
import { StoreContext } from '../context/StoreContext'

function SideBar({ classes, theme }) {
  const { state, dispatch } = useContext(StoreContext)
  const nextIndex = (state.index + 1) % state.setSize
  const nextItem = state.set[nextIndex]

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
        <TrainingState
          index={state.index}
          setSize={state.setSize}
          epoch={state.epoch}
          learningRate={state.learningRate}
          weightDiff={state.weightDiff}
          nextItem={nextItem}
        />
        <Divider />
      </Drawer>
    </nav>
  )
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

const DRAWER_WIDTH = 300
const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
})

export default withStyles(styles, { withTheme: true })(SideBar)