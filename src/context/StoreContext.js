import React, { useReducer } from 'react'
import reducer from '../reducers/index'
import { initState } from '../util/stateUtil'

const StoreContext = React.createContext()

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState())
  let value = { state, dispatch }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

const StoreContextConsumer = StoreContext.Consumer

export { StoreContext, StoreContextProvider, StoreContextConsumer }