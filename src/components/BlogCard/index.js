import * as React from 'react';
import './index.scss';

export default class BlogCard extends React.Component {
  render() {
    return (
      <div className={`blog-card ${this.props.className?this.props.className:''}`}>
        <p className='caption-heading'>{this.props.heading}</p>
        <p className='caption-date'>{this.props.date}</p>
        <p className='caption-time'>{this.props.time}</p>
        <p className='caption-text'>{this.props.text}</p>
      </div>
    );
  }
}
