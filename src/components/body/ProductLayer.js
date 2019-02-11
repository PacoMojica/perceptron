import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'
import { StoreContext } from '../../context/StoreContext'

function ProductLayer({ classes }) {
  const { state } = useContext(StoreContext)

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignContent='center'
      spacing={16}
      className={classes.container}
    >
      {state.calculated.products.map((product, index) => (
        <Grid key={index} item>
            <Paper className={classes.paper}>
              {index < 2
                ? <Field label={'product'} value={product} />
                : <Field label={'bias'} value={product} />
              }
            </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

ProductLayer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing.unit,
  },
})

export default withStyles(styles)(ProductLayer)