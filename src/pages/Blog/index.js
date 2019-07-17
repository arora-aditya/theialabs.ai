import React, { Component } from 'react';

import BlogCard from '../../components/BlogCard';

import './Blog.scss';

export default class Blog extends Component {
  render() {
      return (
        <div className='blog container'>
          <p className='large-heading-text'>
            Blog
          </p>
          <div className='blogs'>
            <BlogCard
              heading='Blog Title'
              date='January 1, 1970'
              time='3 minute read'
              text='Blog Subtext'
            />
          </div>
        </div>
      )
  }
}
