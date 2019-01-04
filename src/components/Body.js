import React from 'react'
import Grid from '@material-ui/core/Grid'
import InputLayer from './body/InputLayer'
import ProductLayer from './body/ProductLayer'
import Sum from './body/Sum'
import Output from './body/Output'

function Body() {  
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignContent='center'
      spacing={16}
    >
      <Grid item xs={12}>
        <InputLayer />
      </Grid>
      <Grid item xs={12}>
        <ProductLayer />
      </Grid>
      <Grid item xs={12}>
        <Sum />
      </Grid>
      <Grid item xs={12}>
        <Output />
      </Grid>
    </Grid>
  )
}

export default Body