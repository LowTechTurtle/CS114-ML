import { PredictionResult } from "@/pages/home";

// API endpoints for the ML models
const API_ENDPOINTS = {
  lightgbm: 'https://rk49jc2zug.execute-api.us-east-1.amazonaws.com/prod/child-mind/lightgbm',
  xgboost: 'https://rk49jc2zug.execute-api.us-east-1.amazonaws.com/prod/child-mind/xgboost'
};

/**
 * Fetches a prediction from the specified ML model API
 * @param dataString Comma-separated feature values (e.g. "1.0,2.0,3.0,4.0,5.0")
 * @param modelType The model to use ('lightgbm' or 'xgboost')
 * @returns The prediction result
 */
export async function fetchPrediction(
  dataString: string,
  modelType: 'lightgbm' | 'xgboost'
): Promise<PredictionResult> {
  try {
    const response = await fetch(API_ENDPOINTS[modelType], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: dataString })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} ${errorText || response.statusText}`);
    }

    // Parse the response which has the nested structure
    const apiResponse = await response.json();
    
    // The actual prediction is in the body field which is a stringified JSON
    if (apiResponse.body) {
      // Check if body is a string that needs parsing
      if (typeof apiResponse.body === 'string') {
        return JSON.parse(apiResponse.body) as PredictionResult;
      } 
      // If body is already an object
      else if (typeof apiResponse.body === 'object') {
        return apiResponse.body as PredictionResult;
      }
    }
    
    // Fallback to returning the whole response if the expected structure isn't found
    return apiResponse as PredictionResult;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}
