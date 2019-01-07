import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

function Errors() {
  const { state } = useContext(StoreContext)

  const { errors, epoch } = state.calculated
  const setSize = state.trainingSet.length
  const lines = errors
    .filter((error, index) => (
      index >= epoch * setSize && index < errors.length
    ))
    .map((error, index) => (
      {x: index, y: error}
    ))

  return (
    <ResponsiveContainer width='100%' height={500}>
      <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Tooltip />
        <Line name='error' data={lines} type="monotone" dataKey="y" />
        <XAxis dataKey="x" type='number' domain={[0, 21]} allowDataOverflow={true} />
        <YAxis dataKey='y' type='number' domain={[-1.5, 1.5]} allowDataOverflow={true} />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Errors