import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Child Mind Institute — Problematic Internet Use</h3>
            <p className="text-sm text-muted-foreground">
              Predictive model that analyzes children's physical activity and fitness data to identify early signs of problematic internet use.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/wiki" className="text-muted-foreground hover:text-primary transition-colors">
                  Feature Wiki
                </Link>
              </li>
              <li>
                <Link href="/models" className="text-muted-foreground hover:text-primary transition-colors">
                  Model Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">AWS Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://aws.amazon.com/sagemaker/serverless-inference/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SageMaker Serverless Inference
                </a>
              </li>
              <li>
                <a 
                  href="https://aws.amazon.com/api-gateway/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  API Gateway
                </a>
              </li>
              <li>
                <a 
                  href="https://aws.amazon.com/lambda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lambda Function
                </a>
              </li>
              <li>
                <a 
                  href="https://aws.amazon.com/ecr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Elastic Container Registry
                </a>
              </li>
              <li>
                <a 
                  href="https://aws.amazon.com/s3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  S3 Buckets
                </a>
              </li>
              <li>
                <a 
                  href="https://aws.amazon.com/cloudfront/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  CloudFront
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Child Mind Institute — Problematic Internet Use. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}