import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    age: 30,
    fever: 98,
    bodyPain: 0,
    runnyNose: 0,
    diffBreath: 0,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: parseInt(e.target.value)});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setResult(data.prediction === 1 ? "COVID Positive" : "COVID Negative");
  };

  return (
    <form onSubmit={handleSubmit} className="covid-form">
      <input name="age" type="number" placeholder="Age" onChange={handleChange} />
      <input name="fever" type="number" placeholder="Fever (°F)" onChange={handleChange} />
      
      <select name="bodyPain" onChange={handleChange}>
        <option value="0">No Body Pain</option>
        <option value="1">Body Pain</option>
      </select>

      <select name="runnyNose" onChange={handleChange}>
        <option value="0">No Runny Nose</option>
        <option value="1">Runny Nose</option>
      </select>

      <select name="diffBreath" onChange={handleChange}>
        <option value="-1">No Difficulty</option>
        <option value="0">Moderate</option>
        <option value="1">Severe</option>
      </select>

      <button type="submit">Predict</button>
      {result && <h2>Result: {result}</h2>}
    </form>
  );
}

export default Form;
