import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Body from '../components/Body'

function TabItem({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

function TabContainer({ classes }) {
  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color='default'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Inputs & Weigths' />
          <Tab label='Error Graph' />
          <Tab label='Lines Described' />
        </Tabs>
      </AppBar>
      {value === 0 && <TabItem><Body /></TabItem>}
      {value === 1 && <TabItem>Item Two</TabItem>}
      {value === 2 && <TabItem>Item Three</TabItem>}
    </div>
  )
}

TabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
})

export default withStyles(styles)(TabContainer)