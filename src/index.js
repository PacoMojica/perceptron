import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { StoreContextProvider as Store } from './context/StoreContext'
import 'typeface-roboto'

ReactDOM.render(<Store><App /></Store>, document.getElementById('root'))

/*
state = {
  weights: [],
  products: [],
  weightedSum: 0,
  output: -1,
  epoch: 0,
  errors: [],
  set: [
    {
      inputs: [],
      targets: [],
    },
  ]
  setSize: 0,
  index: 0,
}
*/