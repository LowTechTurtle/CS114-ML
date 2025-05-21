import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Wiki() {
  return (
    <>
      <Helmet>
        <title>Feature Wiki | ML Model Prediction Tool</title>
        <meta name="description" content="Learn about the features used in our ML prediction models. Detailed explanations for better understanding of the data inputs." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Feature Wiki</h1>
          <p className="text-muted-foreground mb-8">
            Detailed explanations of each feature used in our machine learning models
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Understanding the Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our machine learning models use 5 key features to make predictions. Understanding these features
                helps you provide more accurate inputs and interpret the results better.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="feature1">
                  <AccordionTrigger className="text-lg font-medium">SDS_Score_Weighted</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Description:</strong> SDS_Score_Weighted = SDS-SDS_Total_Raw * SDS_Weight
                      </p>
                      <p>
                        <strong>SDS-SDS_Total_Raw:</strong> The Sleep Disturbance Scale for Children (SDSC) is a 26‑item, parent‑reported questionnaire. Each item is rated on a five‑point Likert scale (1 = “never” to 5 = “always”), and the total raw score is simply the sum of all 26 item scores. This yields a possible range of 26 (minimum) to 130 (maximum), with higher values indicating more severe sleep disturbance.
                      </p>
                      <p>
                        <strong>Response scale:</strong> 1 = “Never”, 2 = “Occasionally”, 3 = “Sometimes”, 4 = “Often”, 5 = “Always (daily)” 
                      </p>
                      <p>
                        <strong>SDS_Weight:</strong> SDS_Weight is calculated by a sigmod function: 
                      </p>
                      <p>
                        def sigmoid_weight(sds, a=0.1, b=35):
                      </p>
                      <p>
                            return 1 / (1 + np.exp(a * (sds - b)))
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feature2">
                  <AccordionTrigger className="text-lg font-medium">Internet_Hours_Age</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Internet_Hours_Age:</strong> PreInt_EduHx-computerinternet_hoursday * Basic_Demos-Age
                      </p>
                      <p>
                        <strong>	PreInt_EduHx-computerinternet_hoursday:</strong> Hours of using computer/internet. Values: 0,1,2,3. 0=Less than 1h/day, 1=Around 1h/day, 2=Around 2hs/day, 3=More than 3hs/day
                      </p>
                      <p>
                        <strong>Basic_Demos-Age:</strong> Age of participant
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feature3">
                  <AccordionTrigger className="text-lg font-medium">Physical-Height_Age</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Physical-Height_Age =</strong> Basic_Demos-Age * Physical-Height

                      </p>
                      <p>
                        <strong>Basic_Demos-Age</strong> Age of Participant
                      </p>
                      <p>
                        <strong>Physical-Height</strong> Height of participant( in inches)
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feature4">
                  <AccordionTrigger className="text-lg font-medium">Basic_Demos-Sexs</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Description:</strong> Female = 1, Male = 0
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feature5">
                  <AccordionTrigger className="text-lg font-medium">PreInt_FGC_CU_PU</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>
                        <strong>PreInt_FGC_CU_PU=</strong> PreInt_EduHx-computerinternet_hoursday * FGC-FGC_CU * FGC-FGC_PU
                      </p>
                      <p>
                        <strong> FGC-FGC_CU</strong> The number of reps participant can do in a curl up exercise
                      </p>
                      <p>
                        <strong> FGC-FGC_PU</strong> The number of reps participant can do in a push up exercise
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to Use These Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                When using our prediction tool, consider these tips for the best results:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Enter values as accurately as possible for the most reliable predictions</li>
                <li>Use decimal points for more precise values when appropriate</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}