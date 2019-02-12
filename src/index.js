import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { StoreContextProvider as Store } from './context/StoreContext'
import 'typeface-roboto'

ReactDOM.render(
  <Store><App /></Store>,
  document.getElementById('root')
)
// a test
/*
state = {
  weights: [0.1, 0.5, -0.2],
  products: [0.6, 0.4, 0.9],
  weightedSum: 7,
  output: 1,
  epoch: 1, 
  errors: [8],
  weightDiff: [.001, 0.4, -0.3],
  hyperplane: [0.8, 0.4, 0.6],
  set: [
    {
      inputs: [1, 2, 1],
      target: 0,
    },
    {
      inputs: [6, 6, 1],
      target: 1,
    },
  ]
  setSize: 2,
  index: 1,
}
*/

/*
state = {
  weights: [],
  products: [],
  weightedSum: 0,
  output: -1,
  epoch: 0,
  errors: [],
  weightDiff: [],
  hyperplane: [],
  set: [
    {
      inputs: [],
      target: 0,
    },
  ]
  setSize: 0,
  index: 0,
}
*/