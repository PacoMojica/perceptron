import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Product from './body/Product'

const items = [
  [
    {type: 'input', label:'X',},
    {type: 'input', label:'Y',},
    {type: 'bias', label:'bias',},
  ],
  [
    {type: 'input', label:'output',},
  ]
]

function Body({ classes }) {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignContent='center'
      spacing={24}
    >
      {items.map((item, index) => 
        <Grid
          key={index}
          container
          direction='row'
          justify='center'
          alignContent='center'
          spacing={24}
          className={classes.container}
        >
          {item.map((el, index) =>
            <Grid key={index} item>
              <Product label={el.label} type={el.type} />
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  )
}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
})

export default withStyles(styles)(Body)