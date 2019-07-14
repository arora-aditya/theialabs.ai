import * as React from 'react';
import './index.scss';

import { Redirect, NavLink } from 'react-router-dom';

const logo = require('../../assets/TheiaLogo(x8).png');

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false
    };
  }

  render() {
    return this.state.logout ? <Redirect to="/" /> : (
      <div className="navbar">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <NavLink to="/" className="left">
              <div className="brand-logo left">
                <img src={logo} alt="Theia Logo"/>
              </div>
            </NavLink>
            <ul className="right">
              <li>
                <NavLink to="/demo" exact={true}>
                  Demo
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" exact={true}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/solutions" exact={true}>
                  Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" exact={true}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
