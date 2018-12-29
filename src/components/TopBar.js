import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function TopBar() {
  return (
    <AppBar position='static'>
      <ToolBar>
        <Typography variant='h5' color='inherit'>
          Perceptron
        </Typography>
      </ToolBar>
    </AppBar>
  )
}

export default TopBar