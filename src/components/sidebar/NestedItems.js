import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import RemoveIcon from '@material-ui/icons/Remove'

function NestedItems({ classes, children, title, Icon }) {
  const [ open, setOpen ] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <ListItem button className={classes.parent } onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children.map(child =>
            React.cloneElement(child, { nested: true })
          )}
        </List>
      </Collapse>
      
    </div>
  )
}

NestedItems.defaultProps = {
  Icon: RemoveIcon,
}

NestedItems.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func,
}

const styles = theme => ({
  inline: {
    display: 'inline',
    paddingLeft: 8,
  },
  parent: {
    paddingLeft: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(NestedItems)