import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Donations from "./components/pages/Donations";
import SearchNeeds from "./components/pages/SearchNeeds";
import Needs from "./components/pages/Needs";
import SearchDonations from "./components/pages/SearchDonations";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

const App = () => (
  <Router>
  <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/donations" component={Donations} />
    <Route exact path="/search-needs" component={SearchNeeds} />
    <Route exact path="/needs" component={Needs} />
    <Route exact path="/search-donations" component={SearchDonations} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
</Router>
);

export default App;
