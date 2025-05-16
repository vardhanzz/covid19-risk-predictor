import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle

df = pd.read_csv("covid_data.csv")
X = df[['age', 'fever', 'bodyPain', 'runnyNose', 'diffBreath']]
y = df['infectionProb']

model = RandomForestClassifier()
model.fit(X, y)

with open("model.pkl", "wb") as f:
    pickle.dump(model, f)
