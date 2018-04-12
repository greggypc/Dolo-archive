// auth0 router
import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App0App from './auth/Auth0App';
import Home0 from './auth/Home/Home';
import Profile from './auth/Profile/Profile';
import Callback from './auth/Callback/Callback';
import Auth from './auth/Auth/Auth';
import history from './history';

// my router
// ***changed import { BrowserRouter as ...} to :
//import { Router as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/main/Nav";
// import Home from "./pages/Home";
// import Donations from "./pages/Donations";
// import SearchNeeds from "./pages/SearchNeeds";
// import Needs from "./pages/Needs";
// import SearchDonations from "./pages/SearchDonations";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeAuthRoutes = () => {
  return (
    <Router history={history}>
    <div>
    
    <Route path="/" render={(props) => <App0App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home0 auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/> 
          
          {/* <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/search-needs" component={SearchNeeds} />
        <Route exact path="/needs" component={Needs} />
        <Route exact path="/search-donations" component={SearchDonations} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch> */}
               
        </div>
      </Router>
  );
}
