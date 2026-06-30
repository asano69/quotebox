
import { Router, Route } from "@solidjs/router";
import Home from "./features/home/HomePage.jsx";
import About from "./features/about/AboutPage.jsx";
import QuoteRoutes from "./features/quote/QuoteRoutes.jsx";
 
export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <QuoteRoutes />
    </Router>
  );
}
 

