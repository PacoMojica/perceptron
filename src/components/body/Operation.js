import React from 'react'
import ProptTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

function Operation({ classes }) {
  return (
    <Tooltip title="Add" aria-label="Add">
      <Fab color="primary" size='small' className={classes.fab}>
        <CloseIcon />
      </Fab>
    </Tooltip>
  )
}

Operation.propTypes = {
  classes: ProptTypes.object.isRequired,
}

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  }
})

export default withStyles(styles)(Operation)