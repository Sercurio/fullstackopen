const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (((height / 100) * height) / 100)

  if (bmi < 15) {
    return 'Very severely underweight'
  } else if (bmi >= 15 && bmi < 16) {
    return 'Severely underweight'
  } else if (bmi >= 16 && bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal (healthy weight)'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight'
  } else if (bmi >= 30 && bmi < 35) {
    return 'Obese Class I (Moderately obese)'
  } else if (bmi >= 35 && bmi < 40) {
    return 'Obese Class II (Severely obese)'
  } else if (bmi >= 40) {
    return 'Obese Class III (Very severely obese)'
  } else {
    return 'Weirdooo state'
  }
}

try {
  const bmi = calculateBmi(Number(process.argv[2]), Number(process.argv[3]))
  console.log(bmi)
} catch (e) {
  console.error(e)
}
