interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const calculateExercises = (dailyExercicesHours: Array<number>): Result => {
  if (dailyExercicesHours.length == 0) {
    throw Error('empty array')
  }
  const target = 2

  const periodLength = dailyExercicesHours.length - 1

  const trainingDays =
    dailyExercicesHours.filter(d => d >= 0 && d != 0).length - 1

  const average =
    dailyExercicesHours.reduce((prev, curr) => prev + curr) / periodLength

  const success = trainingDays >= target ? true : false

  const rating = (3 * trainingDays) / 7

  var ratingDescription: string
  if (rating >= 0 && rating < 1) {
    ratingDescription = "It's bad, ur not gonna get cheeks this summer"
  } else if (rating >= 1 && rating < 2) {
    ratingDescription = 'Good point sir and body :wink wink:'
  } else {
    ratingDescription = 'Ur perfect, change nothing'
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

try {
  var i = 0
  var dailyExercicesHours: Array<number> = []
  process.argv.forEach(arg => {
    if (i > 1) {
      dailyExercicesHours.push(Number(arg))
    }
    i++
  })
  console.log(calculateExercises(dailyExercicesHours))
} catch (e) {
  console.error(e)
}
