interface Result {
  periodLength : number,
  trainingDays : number,
  success : 
  
}

const calculateExercises = (dailyExercicesHours: Array<number>): Array<any> => {
  const target = 2
  const numberOfDays = dailyExercicesHours.length
  const numberOfTrainingDays = dailyExercicesHours.filter(d => {
    d >= 0 && d != 0
  }).length
  const average =
    dailyExercicesHours.reduce((prev, curr) => prev + curr) / numberOfDays
  const success = average >= target ? true : false

  return null
}
