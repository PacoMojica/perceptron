import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { StoreContext } from '../context/StoreContext'
import InputLayer from './body/InputLayer'
import ProductLayer from './body/ProductLayer'
import Sum from './body/Sum'
import Output from './body/Output'

function Body({ classes }) {
  const { state } = useContext(StoreContext)
  const { inputs, target } = state.set[state.index]
  
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignContent='center'
      spacing={16}
    >
      <Grid item xs={12}>
        <InputLayer inputs={inputs} weights={state.weights} />
      </Grid>
      <Grid item xs={12}>
        <ProductLayer products={state.products}    />
      </Grid>
      <Grid item xs={12}>
        <Sum sum={state.weightedSum} />
      </Grid>
      <Grid item xs={12}>
        <Output output={state.output} target={target} error={state.errors[state.epoch][state.index]} />
      </Grid>
    </Grid>
  )
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  
})

export default withStyles(styles)(Body)