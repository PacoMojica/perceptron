const DEFAULT_SIZE = 20

const normalizedValue = (min, max) => (
  Math.random() * (max - min ) + min
)

export const randomArray = (size = 3, start = -1, end = 1) => (
  Array.from(
    {length: size},
    () => normalizedValue(start, end)
  )
)

const randomCoord = () => Math.floor(Math.random() * 9)

const inSet = (x, y, [a, b, c]) => (y >= (
  (-1 * c) - (x * a)) / b
    ? 1 //true
    : 0 //false
)

const generateSet = (hyperplane, size = DEFAULT_SIZE) => {
  let set = []
  
  for(let i = 0; i < size; i++) {
    let x = randomCoord()
    let y = randomCoord()
    let target = inSet(x, y, hyperplane)

    set.push({
      inputs: [x, y, 1],
      target: target
    })
  }

  return set
}

export const calcProducts = (x, y) => {
  let products = []

  for(let i = 0; i < 3; i++) {
    products.push(x[i] * y[i])
  }

  return products
}

export const initState = () => {
  const hyperplane = randomArray()
  const weights = randomArray()
  const set = generateSet(hyperplane)
  const { inputs, target } = set[0]
  const products = calcProducts(inputs, weights)
  const weightedSum = products.reduce((x, y) => x + y)
  const output = weightedSum >= 0 ? 1 : 0
  const error = target - output
  const learningRate = 0.1
  const weightDiff = weights.map((weight, index) => (
    weight + learningRate * error * inputs[index]
  ))


  return {
    weights: weights,
    products: products,
    weightedSum: weightedSum,
    output: output,
    epoch: 0,
    errors: [[error]],
    weightDiff: weightDiff,
    hyperplane: hyperplane,
    set: set,
    setSize: DEFAULT_SIZE,
    index: 0,
    learningRate: learningRate,
  }
}