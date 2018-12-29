import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function Field({ label, type, classes }) {

  return (
    <Typography>{`${label} - ${type}`}</Typography>
  )
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(styles)(Field)