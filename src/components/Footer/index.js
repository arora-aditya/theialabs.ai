import * as React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

const logo = require('../../assets/TheiaLogo(x8).png');

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-container'>
          <div className="row">
            <div className="footer-logo col l2 s12">
              <img src={logo} alt="Theia Logo"/>
            </div>
            <div className="footer-text col l8 s6">
              <p>
                We’re a software technology company based in Kitchener, founded by a team of entrepreneurs and engineers from Wilfrid Laurier University and University of Waterloo.
                Our mission is to equip retail businesses with the right tools to understand their customer interactions and storefront performance.
              </p>
            </div>
            <div className="footer-links col l2 s6">
              <ul className='links'>
                <li><Link to="/blog"><p>Blog</p></Link></li>
                <li><Link to="/demo"><p>Demo</p></Link></li>
                <li><Link to="/contact"><p>Contact</p></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
            <div className="container center">
            © 2019 Copyright Theia Labs x Sage Co
            </div>
        </div>
      </footer>
    );
  }
}
