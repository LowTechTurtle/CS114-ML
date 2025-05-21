import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Wiki from "@/pages/wiki";
import Models from "@/pages/models";
import About from "@/pages/about";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wiki" component={Wiki} />
      <Route path="/models" component={Models} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" forcedTheme="dark">
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
