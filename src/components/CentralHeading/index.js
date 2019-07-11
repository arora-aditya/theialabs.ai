import * as React from 'react';
import './index.scss';

export default class CentralHeading extends React.Component {
  render() {
    return (
      <div className={`cheading ${this.props.className?this.props.className:''}`}>
        <p className='heading'>{this.props.heading}</p>
        <p className='subheading'>{this.props.subheading}</p>
      </div>
    );
  }
}
