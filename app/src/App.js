import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/main/Nav";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import SearchNeeds from "./pages/SearchNeeds";
import Needs from "./pages/Needs";
import SearchDonations from "./pages/SearchDonations";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => (
  <Router>
  <div>
    <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/search-needs" component={SearchNeeds} />
        <Route exact path="/needs" component={Needs} />
        <Route exact path="/search-donations" component={SearchDonations} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
  </div>
</Router>

);

export default App;
