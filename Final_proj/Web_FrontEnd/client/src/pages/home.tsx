import { Helmet } from "react-helmet";
import FeatureForm from "@/components/feature-form";
import { useState } from "react";
import ResultsDisplay from "@/components/results-display";

export type ModelType = "lightgbm" | "xgboost";

export interface PredictionResult {
  prediction: string;
}

export type PredictionState = {
  isLoading: boolean;
  prediction: PredictionResult | null;
  error: Error | null;
  selectedModel: ModelType;
  showResults: boolean;
};

export default function Home() {
  const [predictionState, setPredictionState] = useState<PredictionState>({
    isLoading: false,
    prediction: null,
    error: null,
    selectedModel: "lightgbm",
    showResults: false,
  });

  const handleReset = () => {
    setPredictionState((prev) => ({
      ...prev,
      showResults: false,
      error: null,
      prediction: null,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Child Mind Wellness Prediction</title>
        <meta name="description" content="Make predictions using LightGBM and XGBoost machine learning models. Enter feature values and get instant predictions." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Child Mind Wellness Prediction</h1>
            <p className="text-muted-foreground">
              Enter feature values and select a model to get predictions
            </p>
          </header>

          {!predictionState.showResults ? (
            <FeatureForm 
              predictionState={predictionState} 
              setPredictionState={setPredictionState} 
            />
          ) : (
            <ResultsDisplay 
              predictionState={predictionState} 
              onNewPrediction={handleReset} 
            />
          )}
        </div>
      </div>
    </>
  );
}
