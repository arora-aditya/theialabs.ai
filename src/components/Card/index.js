import * as React from 'react';
import './index.scss';

export default class Card extends React.Component {
  render() {
    return (
      <div className={`card-comp ${this.props.className?this.props.className:''}`}>
          <div className="card large">
            <div className="card-image">
              <img src={this.props.img} alt={"card"}/>
            </div>
            <div className="card-content">
              <span className="card-title">{this.props.title}</span>
              <p>{this.props.text}</p>
            </div>
            <div className="card-action">
              <a href={this.props.href?this.props.href:'#'}>{this.props.a}</a>
            </div>
          </div>
      </div>
    );
  }
}
