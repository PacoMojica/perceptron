import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Body from './Body'
import Hyperplanes from './Hyperplanes'
import Errors from './Errors'
import { StoreContext } from '../context/StoreContext'

const TabItem = ({ children }) => (
  <Typography component="div" style={{ padding: 8 * 3, minHeight: 500, }}>
    {children}
  </Typography>
)

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
}

function TabContainer({ classes }) {
  const { state } = useContext(StoreContext)

  return (
    <div className={classes.root}>
      {state.tabIndex === 0 && <TabItem><Hyperplanes /></TabItem>}
      {state.tabIndex === 1 && <TabItem><Body /></TabItem>}
      {state.tabIndex === 2 && <TabItem><Errors /></TabItem>}
    </div>
  )
}

TabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

export default withStyles(styles)(TabContainer)