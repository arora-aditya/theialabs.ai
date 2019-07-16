import * as React from 'react';
import './index.scss';

import Button from '../Button'

export default class Panel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: false
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClickPanel = this.handleClickPanel.bind(this);
  }
  handleClickPanel(e){
    this.props.handleClick(e);
    this.setState({submitted: true});
  }
  render() {
    let googleActionScript = 'https://script.google.com/macros/s/AKfycbyiO3Hucvm7wZJk4ym4Px2Qds1POvvqdo5LRZciFilQgwCRcJm3/exec';
    if(!this.state.submitted){
      return (
        <div className={`panel full-width ${this.props.className?this.props.className:''}`} style={{'backgroundImage':`url('${this.props.img}')`}}>
          <p className='panel-heading' style={{'width': 'min(40vw, 400px)'}}>
          {this.props.text}
          </p>
          <div className='row'>
            <form id='gform' className='gform' method='POST' data-email="jointhesage@gmail.com" action={googleActionScript}>
              <input name='email' className='col s12 m6 l3 browser-default validate' id="email_inline" type="email" size="256" placeholder="Your Email"/>
              <input id="honeypot" type="text" name="honeypot" defaultValue="" />
              <Button className='col' text={this.props.button_text} color='pink' onClick={this.handleClickPanel}/>
            </form>
          </div>
        </div>
      );
    } else {
      return (
          <div className={`panel full-width ${this.props.className?this.props.className:''}`} style={{'backgroundImage':`url('${this.props.img}')`}}>
            <p className='panel-heading' style={{'width': 'min(40vw, 400px)'}}>
            {this.props.text}
            </p>
            <div className='row'>
            <p id='submitted-text'>We'll reach out to you soon!</p>
            </div>
          </div>
      );
    }

  }
}
