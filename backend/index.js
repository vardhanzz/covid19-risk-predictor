const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

// POST route to accept symptoms data and return prediction
app.post('/predict', (req, res) => {
  const inputData = req.body;

  // Convert inputData to JSON string to pass to Python script
  const inputStr = JSON.stringify(inputData);

  // Spawn Python process to run predict.py and send input JSON as argument
const pythonProcess = spawn('python3', ['predict.py']);

pythonProcess.stdin.write(inputStr);
pythonProcess.stdin.end();
  let result = '';
  let error = '';

  pythonProcess.stdout.on('data', (data) => {
    result += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    error += data.toString();
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0 || error) {
      console.error('Python error:', error);
      return res.status(500).json({ error: 'Prediction error' });
    }

    try {
      const prediction = JSON.parse(result);
      res.json(prediction);
    } catch (e) {
      res.status(500).json({ error: 'Invalid prediction output' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
