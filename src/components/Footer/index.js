import * as React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

const logo = require('../../assets/TheiaLogo.png');

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className="container">
          <div className="row">
            <div className="col l3 s12">
            <img src={logo} alt="Theia Logo"/>
            </div>
            <div className="col l6 s12">
            We’re a software technology company based in Kitchener, founded by a team of entrepreneurs and engineers from Wilfrid Laurier University and University of Waterloo.
            Our mission is to equip retail businesses with the right tools to understand their customer interactions and storefront performance.
            </div>
            <div className="col l3 s12">
              <ul className='links'>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
            <div class="container center">
            © 2019 Copyright Theia x Sage
            </div>
        </div>
      </footer>
    );
  }
}
