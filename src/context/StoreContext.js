import React, { useReducer } from 'react'
import reducer from '../reducers/index'

const StoreContext = React.createContext()

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, {type: 'UPDATE_EPOCH', epoch: 1})
  let value = { state, dispatch }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

const StoreContextConsumer = StoreContext.Consumer

export { StoreContext, StoreContextProvider, StoreContextConsumer }