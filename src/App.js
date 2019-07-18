import React from 'react';
import { Route } from 'react-router';

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './pages/Home'
import Solutions from './pages/Solutions'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import BlogContent from './pages/Blog/BlogContent/'
import Demo from './pages/Demo'

import './App.scss';

function App() {
  return (
    // TODO: ADD exact to Route: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md
    <div className="App">
      <Navigation />
      <div className="app-content">
        <Route path="/" component={Home} />
        <Route path="/demo" component={Demo} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" render={(props) => <BlogContent {...props}/>} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
