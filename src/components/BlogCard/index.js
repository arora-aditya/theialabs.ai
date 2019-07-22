import * as React from 'react';

import BlogDetails from '../BlogDetails'

import './index.scss';

import { Link } from 'react-router-dom';

function joinAbsoluteUrlPath(...args: string[]) {
    return "/" + args.map( pathPart => pathPart.replace(/(^\/|\/$)/g, "") ).join("/");
}

export default class BlogCard extends React.Component {
  render() {
    const href = this.props.href?joinAbsoluteUrlPath('blog/', this.props.href):'#'
    return (
      <Link to={href} className={`blog-card ${this.props.className?this.props.className:''}`}>
        <h1 className='caption-heading'>{this.props.heading}</h1>
        <BlogDetails {...this.props}/>
        <p className='caption-text'>{this.props.text.length>300?this.props.text.substring(0,300-3)+'...':this.props.text}</p>
      </Link>
    );
  }
}
