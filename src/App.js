import React from 'react';
import { Route } from 'react-router';

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './pages/Home'
import Solutions from './pages/Solutions'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Demo from './pages/Demo'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="app-content">
        <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/blog" component={Blog} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
