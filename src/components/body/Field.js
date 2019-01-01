import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

function Field({ classes, children, label, value }) {
  return (
    <Grid item>
    {children}
      <TextField
        label={label}
        defaultValue={value}
        className={classes.textField}
        margin='none'
        variant='standard'
        InputProps={{
          readOnly: true,
        }}
      />
    </Grid>
  )
}

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
    width: 200,
  },
})

Field.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
}

export default withStyles(styles)(Field)