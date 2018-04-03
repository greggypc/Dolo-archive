import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Donations from "./components/Donations";
import SearchNeeds from "./components/pages/SearchNeeds";
import Needs from "./components/pages/Needs";
import SearchDonations from "./components/pages/SearchDonations";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

const App = () => (
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
