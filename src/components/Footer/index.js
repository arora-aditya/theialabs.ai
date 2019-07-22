import * as React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

const logo = require('../../assets/TheiaLogo/Logo_OnWhite.svg');
const linkedin = require('../../assets/icons/linkedin.svg');
const twitter = require('../../assets/icons/twitter.svg');
const slack = require('../../assets/icons/slack.svg');

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-container'>
          <div className="row">
            <div className="footer-logo col l4 s12">
              <img src={logo} alt="Theia Logo"/>
            </div>
            <div className="footer-text col l6 s6">
            </div>
            <div className="footer-links col l2 s6">
              <ul className='links'>
                <li><Link to="/demo"><p>Demo</p></Link></li>
                <li><Link to="/blog"><p>Blog</p></Link></li>
                <li><Link to="/solutions"><p>Solutions</p></Link></li>
                <li><Link to="/aboutus"><p>About Us</p></Link></li>
                <li>

                  <a rel="noopener noreferrer" href="https://www.linkedin.com/company/theialabs/" target="_blank">
                    <img src={linkedin} alt="Linkedin Logo"/>
                  </a>
                  <a rel="noopener noreferrer" href="https://www.twitter.com/company/theialabs/" target="_blank">
                    <img src={twitter} alt="Twitter Logo"/>
                  </a>
                  <a rel="noopener noreferrer" href="theialabs.slack.com" target="_blank">
                    <img src={slack} alt="Slack Logo"/>
                  </a>
                </li>
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
