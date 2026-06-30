
import { Router, Route } from "@solidjs/router";
import Home from "./home/HomePage.jsx";
import About from "./about/AboutPage.jsx";
import QuoteRoutes from "./quote/QuoteRoutes.jsx";
 
export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <QuoteRoutes />
    </Router>
  );
}
 

