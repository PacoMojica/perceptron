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

const randomCoord = () => (Math.random() * 9)

export const inSet = (x, y, [a, b, c]) => (y >= (
  (-1 * c) - (x * a)) / b
    ? 1 //true
    : 0 //false
)

export const generateSet = (hyperplane, size = DEFAULT_SIZE) => {
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

export const calcWeightedSum = (products) => (
  products.reduce((x, y) => x + y)
)

export const calcOutput = (weightedSum) => (
  weightedSum >= 0 ? 1 : 0
)

export const calcError = (target, output) => (
  target - output
)

export const calcWeightDiff = (inputs, error, learningRate) => {
  if(error === 0)
    return [0, 0, 0]

  let weightDiff = []

  for(let i = 0; i < 3; i++) {
    weightDiff.push(
      learningRate * error * inputs[i]
    )
  }

  return weightDiff
}

export const calcNewWeights = (weights, weightDiff) => {
  let newWeights = []

  for(let i = 0; i < 3; i++) {
    newWeights.push(
      weights[i] + weightDiff[i]
    )
  }
  
  return newWeights
}

export const initState = () => {
  const hyperplane = randomArray()
  const weights = randomArray()
  const trainingSet = generateSet(hyperplane)
  const { inputs, target } = trainingSet[0]
  const products = calcProducts(inputs, weights)
  const weightedSum = calcWeightedSum(products)
  const output = calcOutput(weightedSum)
  const error = calcError(target, output)
  const learningRate = 0.1
  const weightDiff = calcWeightDiff(inputs, error, learningRate)


  return {
    calculated: {
      index: 0,
      weights: weights,
      products: products,
      weightedSum: weightedSum,
      weightDiff: weightDiff,
      output: output,
      errors: [error],
      epoch: 0,
    },
    hyperplane: hyperplane,
    trainingSet: trainingSet,
    learningRate: learningRate,
  }
}