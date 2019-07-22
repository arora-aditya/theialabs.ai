/*global M
$*/
import * as React from 'react';
import './index.scss';

import { Redirect, NavLink } from 'react-router-dom';

// const icon_svg = require('../../assets/TheiaLogo/Icon_OnWhite.svg');
const logo_svg = require('../../assets/TheiaLogo/Logo_OnWhite.svg');
const menu = require('../../assets/menu.svg');

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false
    };
  }

  componentDidMount(){
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {edge: 'right'});
  }

  render() {
    return this.state.logout ? <Redirect to="/" /> : (
      <div className="navbar z-depth-0">
        <nav>
          <div className="nav-wrapper z-depth-0">
            <NavLink to="/" className="left">
              <div className="brand-logo left">
                <img src={logo_svg} alt="Theia Logo"/>
              </div>
            </NavLink>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger brand-logo right">
              <img src={menu} alt='menu' style={{padding: "10px 0"}}/>
            </a>
            <ul className="right hide-on-small-only">
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

        <ul className="sidenav left" id="mobile-demo">
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

    );
  }
}
