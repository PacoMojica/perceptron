import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import RemoveIcon from '@material-ui/icons/Remove'

function Item({ classes, label, value, nested = false, Icon = RemoveIcon}) {

  return (
    <ListItem className={nested ? classes.nested : classes.parent }>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography component="span" className={classes.inline} color="textPrimary">
              {value}
            </Typography>
          </React.Fragment>
        }
        secondary={label}
      />
    </ListItem>
  )
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
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
  nested: {
    paddingLeft: theme.spacing.unit * 6,
  }
})

export default withStyles(styles)(Item)