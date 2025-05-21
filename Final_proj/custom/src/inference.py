import os
import joblib
import pandas as pd
from lightgbm import LGBMRegressor


def load_model(model_dir: str) -> LGBMRegressor:
    """
    Load the model from the specified directory.
    """
    return joblib.load(os.path.join(model_dir, "model.joblib"))


def predict(body: dict, model: LGBMRegressor) -> dict:
    """
    Generate predictions for the incoming request using the model.
    Supports:
    - {"data": "1.0,2.0,3.0,4.0,5.0"}
    - {"data": ["1.0,2.0,3.0,4.0,5.0", "5.0,4.0,3.0,2.0,1.0"]}
    - {"data": [[1.0, 2.0, 3.0, 4.0, 5.0], [5.0, 4.0, 3.0, 2.0, 1.0]]}
    """
    raw_data = body["data"]

    if isinstance(raw_data, str):
        # Single CSV string → list of floats
        features = [list(map(float, raw_data.split(",")))]
    elif isinstance(raw_data, list):
        if all(isinstance(row, str) for row in raw_data):
            # List of CSV strings → list of list of floats
            features = [list(map(float, row.split(","))) for row in raw_data]
        elif all(isinstance(row, list) for row in raw_data):
            # Already a list of list of numbers
            features = raw_data
        else:
            raise ValueError("List must contain either all strings or all lists of numbers.")
    else:
        raise ValueError("Invalid 'data' format. Must be string, list of strings, or list of lists.")

    df = pd.DataFrame(features)
    predictions = model.predict(df).tolist()
    return {"predictions": predictions}

