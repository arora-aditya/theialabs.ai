import React, { Component } from 'react';

import BlogCard from '../../components/BlogCard';
import BlogConstants from './BlogConstants.js';

import './Blog.scss';

export default class Blog extends Component {
  render() {
      const BlogCards = Object.keys(BlogConstants).map((key, index) => <BlogCard
        key={BlogConstants[key].href}
        heading={BlogConstants[key].heading}
        date={BlogConstants[key].date}
        time={BlogConstants[key].time}
        text={BlogConstants[key].text}
        href={BlogConstants[key].href}
        categories={BlogConstants[key].categories}
      />);
      return (
        <div className='blog container'>
          {/* Add this back if you need the heading
          <p className='large-heading-text'>
            Blog
          </p>
          */}
          <div className='blogs'>
            {BlogCards}
          </div>
        </div>
      )
  }
}
