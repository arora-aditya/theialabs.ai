import * as React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  render() {
    let color = 'blue';
    if(this.props.color){
      color = this.props.color
    }
    let className = '';
    let onClick = function(){console.log('Button Default onClick');};
    if(this.props.className){
      className = this.props.className;
    }
    if(this.props.onClick){
      onClick = this.props.onClick;
    }
    if(this.props.link){
      return (
          <button className={`button ${color} ${className} btn`} type="button" onClick={onClick}>
            <Link to={this.props.link}>
              <p>
                {this.props.text}
              </p>
            </Link>
          </button>
      )
    }
    return (
      <button className={`button ${color} ${className} btn`} type="button" onClick={onClick}>
        <p>
          {this.props.text}
        </p>
      </button>
    );
  }
}
