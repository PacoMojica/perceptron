import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import TabContainer from './TabContainer'
import SideBar from './SideBar'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { StoreContext } from '../context/StoreContext'
import * as actions from '../actions/index'

function Perceptron({ classes }) {
  const { state, dispatch } = useContext(StoreContext)
  const { snackbar: { open, info } } = state

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(actions.toggleSnackbar(false))
  }

  return (
    <div className={classes.root}>
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TabContainer />
        <Snackbar
          key={info.key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{info.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
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
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar,
  close: {
    padding: theme.spacing.unit / 2,
  },
})

export default withStyles(styles)(Perceptron)