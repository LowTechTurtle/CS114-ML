import xgboost as xgb
import numpy as np
from xgboost import XGBClassifier


# Load the saved model
model = xgb.Booster()
model.load_model("xgboost-model")  # or "model.bin", etc.

# Example input (replace with your real input)
X = np.array([[1.4, 5.1, 3.5, 1.4, 0.2]])  # shape: (n_samples, n_features)

# Convert to DMatrix
dtest = xgb.DMatrix(X)

# Predict using the loaded model
preds = model.predict(dtest)

print(preds)  # array of prediction scores
