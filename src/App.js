import React from 'react';
import { Route } from 'react-router';

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Home from './pages/Home'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="app-content">
        <Route exact strict path="/" component={Home} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
