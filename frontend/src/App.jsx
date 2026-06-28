import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Sleep from "./pages/Sleep.jsx";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sleep" component={Sleep} />
    </Router>
  );
}
