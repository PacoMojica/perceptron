import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Field from './Field'
import Operation from './Operation'

function Product({ type, label, classes }) {
  return (
    <Card className={classes.container}>
      <CardContent>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Field label={`${label} input`} type='input' />
          </Grid>
          <Grid item>
            <Operation />
          </Grid>
          <Grid item>
            <Field label={`${label} weight`} type='weight' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Product.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  container: {
    
  }
})

export default withStyles(styles)(Product)