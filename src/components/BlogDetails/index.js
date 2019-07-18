import * as React from 'react';

import './index.scss';

export default class BlogDetails extends React.Component {
  render() {
    const categories = this.props.categories;
    const categories_labels = categories.map((d) => <span className='categories' key={d}>{d}</span>);
    let coffee_string = '☕️';
    if(this.props.time >= 9){
      coffee_string = coffee_string + coffee_string;
    }

    return (
      <div className='blog-details'>
        <p>
        <span className='caption-date'>{this.props.date} • </span>
        <span className='caption-time'>{coffee_string} {this.props.time} min read</span>
        </p>
        <div className='categories-container'>
          {categories_labels}
        </div>
      </div>
    );
  }
}
