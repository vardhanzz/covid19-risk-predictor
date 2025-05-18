<h1>🦠 Covid-19 Risk Predictor Web App</h1>

<p>A web-based machine learning app that predicts the probability of a patient testing positive for <strong>Covid-19</strong> based on symptoms and vital stats.</p>

<hr>

<h2>📌 Features</h2>

<ul>
  <li>✅ Predicts whether a person is <strong>Covid Positive</strong> or <strong>Negative</strong></li>
  <li>🧠 Uses <strong>Random Forest Classifier</strong></li>
  <li>📊 <strong>Dataset</strong> contains 2575 patient records with features:
    <ul>
      <li>Age</li>
      <li>Fever</li>
      <li>Body pain</li>
      <li>Runny nose</li>
      <li>Difficulty in breathing</li>
      <li>Infection probability</li>
    </ul>
  </li>
  <li>⚙️ Full-stack setup: React (Frontend), Express.js (Backend), Python (ML Model)</li>
  <li>💾 Model saved and reused using <code>pickle</code></li>
</ul>

<hr>

<h2>🧠 Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Tech Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>⚛️ React.js</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>🔧 Node.js + Express.js</td>
    </tr>
    <tr>
      <td>ML Model</td>
      <td>🐍 Python + scikit-learn</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>📂 <code>covid_symptoms.csv</code></td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🚀 Getting Started</h2>

<h3>📁 Clone the Repository</h3>

<pre><code>git clone https://github.com/vardhanzz/covid19-risk-predictor.git
cd covid19-risk-predictor
</code></pre>

<h3>📦 Install Required Python Packages</h3>

<pre><code>pip install pandas
pip install scikit-learn pandas
</code></pre>

<h3>🧪 Train the Model</h3>

<pre><code>cd backend
python3 trainModel.py
</code></pre>

<h3>🚀 Start the Backend Server</h3>

<pre><code>node index.js
</code></pre>

<h3>💻 Start the Frontend</h3>

<pre><code>cd frontend
npm install
npm start
</code></pre>

<hr>

<h2>📊 Dataset Info</h2>

<ul>
  <li><strong>Total Entries:</strong> 2575 patients</li>
  <li><strong>Attributes:</strong> Age, Fever, Body pain, Runny nose, Difficulty in breathing, Infection probability</li>
  <li><strong>Dataset Source:</strong> <a href="https://www.kaggle.com/datasets/takbiralam/covid19-symptoms-dataset" target="_blank">Covid-19 Symptoms Dataset on Kaggle</a></li>
</ul>
<img width="1370" alt="Screenshot 2025-05-17 at 1 31 36 AM" src="https://github.com/user-attachments/assets/05614d18-7747-449d-aad4-fc83c64f1959" />
