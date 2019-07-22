import React, { lazy, Component, Suspense } from 'react';

import BlogDetails from '../../../../src/components/BlogDetails/index.js'
import BlogConstants from '../BlogConstants.js';

import '../Blog.scss';

import { importMDX } from 'mdx.macro';

const sampleBlogPost1 = lazy(() => importMDX('./markdown/sample-blog-post.mdx'));
const sampleBlogPost2 = lazy(() => importMDX('./markdown/sample-blog-post-2.mdx'));



const mapping = {
  'sample-blog-post': sampleBlogPost1,
  'sample-blog-post-2': sampleBlogPost2
}

export default class BlogContent extends Component {
  render() {
    let Content;;
    let key = this.props.match.params.id;
    if(key in mapping){
      Content = mapping[key];
    }else {
      Content = lazy(() => importMDX('./markdown/404.mdx'));
    }
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='container'>
            <div className='blog-details-container' style={{"paddingTop": "10vh"}}>
              <h1>{BlogConstants[key].heading}</h1>
              <BlogDetails
                categories={BlogConstants[key].categories}
                date={BlogConstants[key].date}
                time={BlogConstants[key].time}
              />
            </div>
            <div className='blog-container'>
              <Content />
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
}
