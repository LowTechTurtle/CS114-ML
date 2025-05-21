import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | ML Model Prediction Tool</title>
        <meta name="description" content="Learn about the team behind the ML Model Prediction Tool and the technology that powers it." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">About the Project</h1>
          <p className="text-muted-foreground mb-8">
            Meet the team behind child mind institute project
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Author 1 */}
              <Card className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mt-6">
                  <span className="text-2xl font-bold text-white">NN</span>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-1">Nguyen Thien Nhan</h3>
                  <p className="text-sm text-muted-foreground mb-3">23520183</p>
                  <p className="text-sm">
                    EDA, Preprocessing Data, Feature Engineering, Model Training
                  </p>
                </CardContent>
              </Card>

              {/* Author 2 */}
              <Card className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mt-6">
                  <span className="text-2xl font-bold text-white">QN</span>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-1">Nguyen Dinh Thien Quang</h3>
                  <p className="text-sm text-muted-foreground mb-3">23521285</p>
                  <p className="text-sm">
                    Feature Engineering, Coding XGBoost, LightGBM from Scratch
                  </p>
                </CardContent>
              </Card>

              {/* Author 3 */}
              <Card className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mt-6">
                  <span className="text-2xl font-bold text-white">TD</span>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-1">Dong Quoc Thang</h3>
                  <p className="text-sm text-muted-foreground mb-3">23521421</p>
                  <p className="text-sm">
                    EDA, Preprocessing, Model Training, Deploy Model on AWS( Full Serverless)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-10">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="mb-4">
                In today’s digital age, problematic internet use among children and adolescents is a growing concern. Better understanding this issue is crucial for addressing mental health problems such as depression and anxiety.
              </p>

              <p className="mb-4">
                Current methods for measuring problematic internet use in children and adolescents are often complex and require professional assessments. This creates access, cultural, and linguistic barriers for many families. Due to these limitations, problematic internet use is often not measured directly, but is instead associated with issues such as depression and anxiety in youth.
              </p>

              <p className="mb-4">
                Conversely, physical & fitness measures are extremely accessible and widely available with minimal intervention or clinical expertise. Changes in physical habits, such as poorer posture, irregular diet, and reduced physical activity, are common in excessive technology users. We propose using these easily obtainable physical fitness indicators as proxies for identifying problematic internet use, especially in contexts lacking clinical expertise or suitable assessment tools.
              </p>

              <p className="mb-4">
                We've implemented two popular gradient boosting frameworks (LightGBM and XGBoost) and deployed them 
                as serverless endpoints on AWS, allowing for efficient scaling and cost-effective operation. The frontend 
                application is built using modern web technologies and designed to be deployed as a static website on 
                AWS S3 with CloudFront distribution for global availability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Frontend</h3>
                  <p>React, TypeScript, Tailwind CSS, shadcn UI components</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Machine Learning</h3>
                  <p>LightGBM, XGBoost, scikit-learn, pandas, numpy</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Cloud Infrastructure</h3>
                  <p>AWS S3, CloudFront, API Gateway, Lambda, SageMaker, ECR</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}