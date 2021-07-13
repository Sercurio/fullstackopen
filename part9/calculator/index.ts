import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercicesByPost } from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send(String('Hello Full Stack!'));
});

app.get('/bmi', (_req, res) => {
  const height = Number(_req.query.height);
  const weight = Number(_req.query.weight);

  if (
    typeof height !== 'number' ||
    isNaN(height) ||
    typeof weight !== 'number' ||
    isNaN(weight)
  ) {
    res.send({ error: 'malformatted parameters' });
  } else {
    const bmi: string = calculateBmi(height, weight);

    res.send({ weight, height, bmi });
  }
});

app.post('/exercices', (_req, res) => {
  if (
    typeof _req.body.daily_exercises === 'object' &&
    typeof _req.body.target === 'number'
  ) {
    const dailyExercices = _req.body.daily_exercises;
    const target = _req.body.target;

    const result = calculateExercicesByPost(dailyExercices, target);
    res.send(result);
  } else if (!_req.body.daily_exercises || !_req.body.target) {
    res.send({ error: 'parameters missing' });
  } else {
    res.send({ error: 'malformatted parameters' });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
