import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Input from './modal/Input'
import { StoreContext } from '../context/StoreContext'
import {changeLearningRate, changeCalculated} from '../actions/index'
import * as util from '../util/stateUtil'

function Modal({ isOpen, handleClose, classes }) {
  const { state, dispatch } = useContext(StoreContext)
  const { hyperplane, learningRate } = state
  const { weights } = state.calculated

  const changeTrainingSet = (size) => {
    size = size > 0 ? size : 1
    const newSet = util.generateSet(hyperplane, size)
    const { inputs, target } = newSet[0]
    const products = util.calcProducts(inputs, weights)
    const weightedSum = util.calcWeightedSum(products)
    const output = util.calcOutput(weightedSum)
    const error = util.calcError(target, output)
    const weightDiff = util.calcWeightDiff(inputs, error, learningRate)
    
    dispatch(changeCalculated({
        index: 0,
        weights: weights,
        products: products,
        weightedSum: weightedSum,
        weightDiff: weightDiff,
        output: output,
        errors: [error],
        epoch: 0,
      },
      newSet
    ))
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => handleClose(!isOpen)}
      aria-labelledby="form-dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-title">Settings</DialogTitle>
      <DialogContent>
        <Input
          id="learningRate"
          type="number"
          label="Learning Rate"
          initState={learningRate}
          helperText="changes how quickly or how slowly you want to update the weights"
          dispatch={v => dispatch(changeLearningRate(v))}
        />
        <Input
          id="trainingSetSize"
          type="number"
          label="Training Set Size"
          initState={state.trainingSet.length}
          helperText="generates a new training set with the supplied size"
          dispatch={(v) => changeTrainingSet(v)}
        />
        <Typography align="center" className={classes.link}>
          <Link
            href='https://github.com/PacoMojica/perceptron'
            target="_blank"
            rel="noopener noreferrer"
            variant="body1"
          >
            View on GitHub
          </Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(!isOpen)} color="primary">
          close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  link: {
    paddingTop: theme.spacing.unit,
  },
})

export default withStyles(styles, { withTheme: true })(Modal)