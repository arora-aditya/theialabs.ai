import * as React from 'react';
import './index.scss';

import Button from '../Button'

export default class Panel extends React.Component {
  render() {
    return (
      <div className={`panel full-width ${this.props.className?this.props.className:''}`} style={{'backgroundImage':`url('${this.props.img}')`}}>
        <p className='panel-heading' style={{'width': 'min(40vw, 400px)'}}>
        {this.props.text}
        </p>
        <div className='row'>
          <input className='col s12 m6 l3 browser-default validate' id="email_inline" type="email" size="256" placeholder="Your Email"/>
          <Button className='col' text={this.props.button_text} color='pink' />
        </div>
      </div>
    );
  }
}
