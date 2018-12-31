import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Field from './Field'

function ProductLayer({ classes, products }) {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignContent='center'
      spacing={16}
      className={classes.container}
    >
      {products.map((product, index) => (
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
  products: PropTypes.array.isRequired,
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(ProductLayer)