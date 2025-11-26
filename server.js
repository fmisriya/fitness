const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const reviewRoutes = require('./routes/workoutRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/reviews', reviewRoutes);
app.use('/workouts', workoutRoutes);

app.post('/api/workouts', (req, res) => {
    const newWorkout = req.body;{
        id= Date.now(),
        type= newWorkout.type,
        duration= newWorkout.duration,
        calories= newWorkout.calories
    }
    res.status(201).json(newWorkout);
}
);
app.get('/api/workouts', (req, res) => {
const sampleWorkouts = [
    { id: 1, type: 'Running', duration: 30 },
    { id: 2, type: 'Cycling', duration: 45 },
];
res.json(sampleWorkouts);
}   
);
app.put('/api/workouts', (req, res) => {
   const updatedWorkout = req.body;
   res.json(updatedWorkout);

}
);
app.delete('/api/workouts', (req, res) => {
    res.send('DELETE request to the homepage');
}
);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});