import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fetchPrediction } from "@/lib/api";
import ModelSelector from "./model-selector";
import { ModelType, PredictionState } from "@/pages/home";
import { Loader2, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define form schema with validation
const formSchema = z.object({
  feature1: z.coerce.number({
    required_error: "SDS_Score_Weighted is required",
    invalid_type_error: "SDS_Score_Weighted must be a number",
  }),
  feature2: z.coerce.number({
    required_error: "Internet_Hours_Age is required",
    invalid_type_error: "Internet_Hours_Age must be a number",
  }),
  feature3: z.coerce.number({
    required_error: "Physical-Height_Age is required",
    invalid_type_error: "Physical-Height_Age must be a number",
  }),
  feature4: z.coerce.number({
    required_error: "Basic_Demos-Sex is required",
    invalid_type_error: "Basic_Demos-Sex must be a number",
  }),
  feature5: z.coerce.number({
    required_error: "PreInt_FGC_CU_PU is required",
    invalid_type_error: "PreInt_FGC_CU_PU must be a number",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface FeatureFormProps {
  predictionState: PredictionState;
  setPredictionState: React.Dispatch<React.SetStateAction<PredictionState>>;
}

export default function FeatureForm({ 
  predictionState, 
  setPredictionState 
}: FeatureFormProps) {
  const { toast } = useToast();
  
  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feature1: undefined,
      feature2: undefined,
      feature3: undefined,
      feature4: undefined,
      feature5: undefined,
    },
  });

  const handleModelChange = (model: ModelType) => {
    setPredictionState(prev => ({ ...prev, selectedModel: model }));
  };

  const predictionMutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const featuresArray = [
        values.feature1,
        values.feature2,
        values.feature3,
        values.feature4,
        values.feature5,
      ];
      
      const dataString = featuresArray.join(',');
      
      return fetchPrediction(dataString, predictionState.selectedModel);
    },
    onSuccess: (data) => {
      setPredictionState(prev => ({
        ...prev,
        prediction: data,
        error: null,
        isLoading: false,
        showResults: true,
      }));
    },
    onError: (error: Error) => {
      setPredictionState(prev => ({
        ...prev,
        error,
        prediction: null,
        isLoading: false,
        showResults: true,
      }));
      
      toast({
        title: "Error",
        description: error.message || "Failed to get prediction",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: FormValues) => {
    setPredictionState(prev => ({ ...prev, isLoading: true }));
    predictionMutation.mutate(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Model Selection */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <h2 className="text-xl font-semibold">1. Select Model</h2>
            <Link href="/models">
              <Button variant="ghost" size="icon" className="ml-2" asChild>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-[200px]">Learn more about these models in our Models Overview page</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Button>
            </Link>
          </div>
          <ModelSelector 
            selectedModel={predictionState.selectedModel}
            onChange={handleModelChange}
          />
        </div>

        {/* Feature Inputs Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center mb-3">
              <h2 className="text-xl font-semibold">2. Enter Feature Values</h2>
              <Link href="/wiki">
                <Button variant="ghost" size="icon" className="ml-2" asChild>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px]">Learn about these features in our Feature Wiki</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FormField
                control={form.control}
                name="feature1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SDS_Score_Weighted</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="feature2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Internet_Hours_Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="feature3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Physical-Height_Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="feature4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Basic_Demos-Sex</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="feature5"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>PreInt_FGC_CU_PU</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="w-full md:w-auto"
                disabled={predictionState.isLoading}
              >
                {predictionState.isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Get Prediction'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
