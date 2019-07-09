import * as React from 'react';
import './index.scss';

// import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  render() {
    let color = 'blue';
    if(this.props.color){
      color = this.props.color
    }
    if(this.props.link){
      return (
          <button className={`button ${color} btn`} type="button">
            <p>
              {this.props.text}
            </p>
          </button>
      )
    }
    return (

      <button className={`button ${color} btn`} type="button">
        <p>
          {this.props.text}
        </p>
      </button>
    );
  }
}
