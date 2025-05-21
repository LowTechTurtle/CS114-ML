import { Link } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Child Mind Institute</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/wiki" className="transition-colors hover:text-primary">
              Feature Wiki
            </Link>
            <Link href="/models" className="transition-colors hover:text-primary">
              Model Overview
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Child Mind Institute — Problematic Internet Use.</h3>
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
            <p>© {new Date().getFullYear()} Child Mind Institute — Problematic Internet Use. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}