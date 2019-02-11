import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {
  BarChart,
  Bar,
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
      <BarChart data={lines} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Tooltip />
        <Bar name='error' dataKey="y" fill="#8884d8" minPointSize={4} />
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Errors