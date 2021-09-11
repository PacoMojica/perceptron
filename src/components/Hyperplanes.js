import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

const round = (x, n = 3) => {
  const precision = Math.pow(10, n)
  return  Math.round(x * precision) / precision
}

const getLines = (base, perceptron) => {
  const [ a, b, c ] = base
  const [ ap, bp, cp ] = perceptron
  
  return [
    {x: 0, y: round(-c/b), xp: 0, yp: round(-cp/bp)},
    {x: 10, y: round((-10*a - c) / b), xp: 10, yp: round((-10*ap - cp) / bp)},
  ]
}

const getPoints = (set, currentItem, nextItem, showNext) => {
  let classA = []
  let classB = []
  let currentPoint = []
  let nextPoint = []
  
  for(let i = 0; i < set.length; i++) {
    const { inputs: [x, y], target } = set[i]
    const point = {x: x, y: y, z: 1}
    
    if(i === currentItem) {
      currentPoint.push(point)
    } else if(showNext && i === nextItem) {
      nextPoint.push(point)
    } else if(target === 0) {
      classA.push(point)
    } else {
      classB.push(point)
    }
  }

  return { classA, classB, currentPoint, nextPoint }
}

function Hyperplanes() {
  const { state } = useContext(StoreContext)
  const { calculated: {weights, index}, trainingSet, showNext} = state
  const lines = getLines(state.hyperplane, weights)
  const points = getPoints(
    trainingSet,
    index,
    (index + 1) % trainingSet.length,
    showNext
  )

  return (
    <ResponsiveContainer width='100%' height={700}>
      <LineChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line name='base' yAxisId='0' data={lines} type="monotone" dataKey="y" stroke="green" />
        <Line name='perceptron' yAxisId='0' data={lines} type="monotone" dataKey="yp" stroke="blue" />
        <Line name='class a' yAxisId='0' data={points.classA} dataKey='y' isAnimationActive={false} stroke="transparent" dot={{fill: 'black'}} />
        <Line name='class b' yAxisId='0' data={points.classB} dataKey='y' isAnimationActive={false} stroke="transparent" dot={{fill: 'red'}} />
        <Line name='current' yAxisId='0' data={points.currentPoint} dataKey='y' isAnimationActive={false} stroke="transparent" dot={{fill: '#818181', r: 9}} />
        <Line name='next' yAxisId='0' hide={!showNext} data={points.nextPoint} dataKey='y' isAnimationActive={false} stroke="gray" dot={{fill: '#ead42e', r: 9}} />
        <XAxis dataKey="x" type='number' domain={[0, 10]} allowDataOverflow={true} />
        <YAxis yAxisId='0' dataKey='y' type='number' domain={[0, 10]} allowDataOverflow={true} />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Hyperplanes