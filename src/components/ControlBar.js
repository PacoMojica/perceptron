import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import Paper from '@material-ui/core/Paper'
import { StoreContext } from '../context/StoreContext'
import { randomArray } from '../util/stateUtil'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

function ControlBar({ classes }) {
  const { state, dispatch } = useContext(StoreContext)

  return (
    <Paper className={classes.root}>
      <List component="nav">
        <ListItem button onClick={() => dispatch({type: 'UPDATE_WEIGHTS', weights: randomArray()})}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </Paper>
  )
}

ControlBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
})

export default withStyles(styles)(ControlBar)