/* global handleFormSubmit
*/
import React, { Component } from 'react';

import Panel from '../../components/Panel';
import CentralHeading from '../../components/CentralHeading';

import './Demo.scss';

export default class Demo extends Component {
  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    handleFormSubmit(e);
  }

  render() {
      return (
        <div className='demo container'>
          <h1 className='heading-text'>
              Take a look at a demo of Theia Analytics technology in action.
          </h1>
          <div className='youtube'>
            <iframe title="youtube video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <CentralHeading
                heading="Our software runs on existing security cameras and provides advanced traffic metrics through our beautiful Theia dashboard."
                subheading=""
            />
            <Panel
            img={'https://i.imgur.com/TQgky1n.png'}
            text='Discover how you can improve your store today with a free 30 day trial, no additional hardware required.'
            button_text='Request Demo'
            handleClick={this.handleClick}
          />
        </div>

      )
  }
}
