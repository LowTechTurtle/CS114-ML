import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import { PredictionState } from "@/pages/home";

interface ResultsDisplayProps {
  predictionState: PredictionState;
  onNewPrediction: () => void;
}

export default function ResultsDisplay({ 
  predictionState, 
  onNewPrediction 
}: ResultsDisplayProps) {
  const { prediction, error, selectedModel } = predictionState;
  const hasError = !!error;
  
  const modelDisplayName = selectedModel === 'lightgbm' ? 'LightGBM' : 'XGBoost';

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Results</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Success Result */}
        {!hasError && prediction && (
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-900/20 rounded-full p-2 mr-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium">Model Prediction</h3>
                <p className="text-muted-foreground">{modelDisplayName}</p>
              </div>
            </div>
            
            <div className="bg-background/50 border border-border rounded-md p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Predicted Value:</span>
                <span className="font-semibold text-lg bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">{prediction.prediction}</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Error Result */}
        {hasError && (
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-900/20 rounded-full p-2 mr-3">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium">Error</h3>
                <p className="text-muted-foreground">Unable to get prediction</p>
              </div>
            </div>
            
            <div className="bg-red-950/20 border border-red-900/20 rounded-md p-4 mb-4">
              <p className="text-red-500">{error.message}</p>
            </div>
          </div>
        )}
        
        <Button
          variant="outline"
          className="mt-2 flex items-center"
          onClick={onNewPrediction}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Make another prediction
        </Button>
      </CardContent>
    </Card>
  );
}
