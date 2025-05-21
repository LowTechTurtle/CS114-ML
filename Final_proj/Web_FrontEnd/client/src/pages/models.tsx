import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Models() {
  return (
    <>
      <Helmet>
        <title>Model Overview | ML Model Prediction Tool</title>
        <meta name="description" content="Learn about the LightGBM and XGBoost machine learning models used for predictions in our tool." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Model Overview</h1>
          <p className="text-muted-foreground mb-8">
            Detailed information about the machine learning models used in our prediction tool
          </p>

          <Tabs defaultValue="lightgbm" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="lightgbm">LightGBM</TabsTrigger>
              <TabsTrigger value="xgboost">XGBoost</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lightgbm">
              <Card>
                <CardHeader>
                  <CardTitle>LightGBM Model</CardTitle>
                  <CardDescription>
                    A gradient boosting framework that uses tree-based learning algorithms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p>
                      LightGBM (Light Gradient Boosting Machine) is a gradient boosting framework developed by Microsoft
                      that uses tree-based learning algorithms. It is designed to be distributed and efficient with
                      faster training speed and higher efficiency, lower memory usage, and better accuracy.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Faster Training Speed:</strong> Optimized for performance with histogram-based algorithm</li>
                      <li><strong>Lower Memory Usage:</strong> Uses a leaf-wise tree growth strategy instead of level-wise</li>
                      <li><strong>Better Accuracy:</strong> Implements categorical feature support for better prediction</li>
                      <li><strong>Handles Large Datasets:</strong> Designed for efficiency with large-scale data</li>
                      <li><strong>Optimization Features:</strong> Includes parallel learning, GPU learning, and network communication minimization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">When to Use</h3>
                    <p>
                      LightGBM is particularly effective for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Datasets with a large number of features</li>
                      <li>Scenarios requiring faster training speed</li>
                      <li>Applications with limited memory resources</li>
                      <li>Problems with categorical features</li>
                      <li>When accuracy on large datasets is critical</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Model Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-4">Parameter</th>
                            <th className="text-left py-2 px-4">Value</th>
                            <th className="text-left py-2 px-4">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">num_leaves</td>
                            <td className="py-2 px-4">478</td>
                            <td className="py-2 px-4">Maximum number of leaves in one tree</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">learning_rate</td>
                            <td className="py-2 px-4">0.046</td>
                            <td className="py-2 px-4">Controls the step size in gradient descent</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">n_estimators</td>
                            <td className="py-2 px-4">300</td>
                            <td className="py-2 px-4">Number of boosted trees to fit</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">max_depth</td>
                            <td className="py-2 px-4">12</td>
                            <td className="py-2 px-4">Maximum tree depth for base learners (-1 means no limit)</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">subsample</td>
                            <td className="py-2 px-4">0.8</td>
                            <td className="py-2 px-4">Subsample ratio of the training instances</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">min_data_in_leaf</td>
                            <td className="py-2 px-4">13</td>
                            <td className="py-2 px-4">Minimum number of data points a leaf must have. Used to prevent overfitting on small datasets.</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">feature_fraction</td>
                            <td className="py-2 px-4">0.893</td>
                            <td className="py-2 px-4">Fraction of features randomly chosen for each tree.</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">bagging_fraction</td>
                            <td className="py-2 px-4">0.784</td>
                            <td className="py-2 px-4">Fraction of data randomly sampled for each iteration.</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">bagging_freq</td>
                            <td className="py-2 px-4">4</td>
                            <td className="py-2 px-4">Frequency (in iterations) at which bagging is performed</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">lambda_l1</td>
                            <td className="py-2 px-4">10</td>
                            <td className="py-2 px-4">L1 regularization term on weights</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">lambda_l2</td>
                            <td className="py-2 px-4">0.01</td>
                            <td className="py-2 px-4">L2 regularization term on weights</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="xgboost">
              <Card>
                <CardHeader>
                  <CardTitle>XGBoost Model</CardTitle>
                  <CardDescription>
                    An optimized distributed gradient boosting library
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p>
                      XGBoost (eXtreme Gradient Boosting) is an optimized distributed gradient boosting library designed
                      to be highly efficient, flexible, and portable. It implements machine learning algorithms under the
                      Gradient Boosting framework, providing a parallel tree boosting approach that solves many data science
                      problems quickly and accurately.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Speed and Performance:</strong> Optimized algorithms for faster training and evaluation</li>
                      <li><strong>Regularization:</strong> Built-in regularization to prevent overfitting</li>
                      <li><strong>Cross-Validation:</strong> Built-in cross-validation capabilities</li>
                      <li><strong>Handling Missing Values:</strong> Able to automatically handle missing data</li>
                      <li><strong>Parallel Processing:</strong> Support for distributed and parallel computing</li>
                      <li><strong>Early Stopping:</strong> Implementation of early stopping to avoid overfitting</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">When to Use</h3>
                    <p>
                      XGBoost is particularly effective for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Problems requiring high predictive accuracy</li>
                      <li>Scenarios with complex feature interactions</li>
                      <li>Datasets with missing values</li>
                      <li>Applications requiring robust model generalization</li>
                      <li>When avoiding overfitting is a priority</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Model Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-4">Parameter</th>
                            <th className="text-left py-2 px-4">Value</th>
                            <th className="text-left py-2 px-4">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">max_depth</td>
                            <td className="py-2 px-4">5</td>
                            <td className="py-2 px-4">Maximum depth of a tree</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">learning_rate</td>
                            <td className="py-2 px-4">0.01</td>
                            <td className="py-2 px-4">Step size shrinkage used to prevent overfitting</td>
                          </tr>
                          <tr className="border-blambda_l2 border-border">
                            <td className="py-2 px-4">n_estimators</td>
                            <td className="py-2 px-4">300</td>
                            <td className="py-2 px-4">Number of gradient boosted trees</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">subsample</td>
                            <td className="py-2 px-4">0.8</td>
                            <td className="py-2 px-4">Subsample ratio of the training instances</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">reg_alpha</td>
                            <td className="py-2 px-4">5</td>
                            <td className="py-2 px-4">L1 regularization term on weights</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">reg_lambda</td>
                            <td className="py-2 px-4">10</td>
                            <td className="py-2 px-4">L2 regularization term on weights.</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 px-4">colsample_bytree</td>
                            <td className="py-2 px-4">0.8</td>
                            <td className="py-2 px-4">Fraction of features randomly sampled for each tree.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Model Comparison</h3>
                    <p>
                      Compared to LightGBM, XGBoost typically:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>May require more memory for the same dataset size</li>
                      <li>Often has more robust handling of different data types</li>
                      <li>Provides more extensive regularization options</li>
                      <li>Has a more mature ecosystem and broader adoption</li>
                      <li>Can be slightly slower for very large datasets</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}