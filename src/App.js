import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import MyNavbar from "./components/MyNavbar";
import Home from "./components/pages/Home";
import Donations from "./components/pages/Donations";
import SearchNeeds from "./components/pages/SearchNeeds";
import Needs from "./components/pages/Needs";
import SearchDonations from "./components/pages/SearchDonations";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

class App extends Component {


  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">DoLo - Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary" className="btn-margin" onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn" bsStyle="primary" className="btn-margin" onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn" bsStyle="primary" className="btn-margin" onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  

  <Router>
  <div>
    <MyNavbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/donations" component={Donations} />
    <Route exact path="/search-needs" component={SearchNeeds} />
    <Route exact path="/needs" component={Needs} />
    <Route exact path="/search-donations" component={SearchDonations} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
</Router>

  }
};

export default App;
