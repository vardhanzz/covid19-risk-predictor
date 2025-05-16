import sys
import pickle
import json
import pandas as pd  # ✅ Add this

model = pickle.load(open("model.pkl", "rb"))

input_data = json.loads(sys.stdin.read())

# ✅ Convert to DataFrame with column names
X_test = pd.DataFrame([{
    'age': input_data['age'],
    'fever': input_data['fever'],
    'bodyPain': input_data['bodyPain'],
    'runnyNose': input_data['runnyNose'],
    'diffBreath': input_data['diffBreath']
}])

prediction = model.predict(X_test)[0]
print(json.dumps({"prediction": int(prediction)}))
