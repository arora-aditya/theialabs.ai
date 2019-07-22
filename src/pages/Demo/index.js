/* global handleFormSubmit
*/
import React, { Component } from 'react';

import Panel from '../../components/Panel';

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
          <p className='large-heading-text'>
            Take a look!
          </p>
          <div className='youtube'>
            <iframe title='youtube video' src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Panel
            img={'https://i.imgur.com/TQgky1n.png'}
            text='Discover how you can improve you can improve your store today with a free 30 day trial, no additional hardware required.'
            button_text='Request Demo'
            handleClick={this.handleClick}
          />
        </div>

      )
  }
}
