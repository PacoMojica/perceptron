import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { StoreContext } from '../context/StoreContext'
import { changeTabIndex } from '../actions/index'

function TopBar({ classes }) {
  const { state, dispatch } = useContext(StoreContext)

  const handleChange = (e, index) => {
    dispatch(changeTabIndex(index))
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <ToolBar>
        <Typography variant='h5' color='inherit' className={classes.title}>
          Perceptron
        </Typography>
        <Tabs value={state.tabIndex} onChange={handleChange}>
          <Tab label='Hyperplanes' />
          <Tab label='Inputs & Weigths' />
          <Tab label='Error Graph' />
        </Tabs>
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
  },
  title: {
    width: 300,
  }
})

export default withStyles(styles)(TopBar)