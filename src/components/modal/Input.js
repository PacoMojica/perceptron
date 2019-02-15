import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import ForwardIcon from '@material-ui/icons/Forward'

function Input({ id, type, label, initState, helperText, dispatch }) {
  const [ value, setValue ] = useState(initState)

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSetChange = () => dispatch(value)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(value)
    }
  }

  return (
    <TextField
      margin="dense"
      id={id}
      label={label}
      type={type}
      value={value}
      variant="filled"
      helperText={helperText}
      fullWidth
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              title="apply change"
              onClick={handleSetChange}
            >
              <ForwardIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initState: PropTypes.any.isRequired,
  helperText: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Input