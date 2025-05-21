import numpy as np
import joblib


# Load the saved model
model = joblib.load("model.joblib")
# Example input (replace with your real input)
X = np.array([[1.4, 5.1, 3.5, 1.4, 0.2]])  # shape: (n_samples, n_features)

# Predict using the loaded model
preds = model.predict(X)

print(preds)  # array of prediction scores
