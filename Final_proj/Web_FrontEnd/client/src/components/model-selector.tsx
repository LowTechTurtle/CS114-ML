import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ModelType } from "@/pages/home";

interface ModelSelectorProps {
  selectedModel: ModelType;
  onChange: (model: ModelType) => void;
}

export default function ModelSelector({ selectedModel, onChange }: ModelSelectorProps) {
  return (
    <RadioGroup
      defaultValue={selectedModel}
      value={selectedModel}
      onValueChange={(value) => onChange(value as ModelType)}
      className="flex flex-col sm:flex-row gap-4"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="lightgbm" id="lightgbm" />
        <Label htmlFor="lightgbm" className="font-medium">
          LightGBM
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="xgboost" id="xgboost" />
        <Label htmlFor="xgboost" className="font-medium">
          XGBoost
        </Label>
      </div>
    </RadioGroup>
  );
}
