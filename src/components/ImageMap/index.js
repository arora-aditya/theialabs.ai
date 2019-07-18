/* global $
*/
import * as React from 'react';
import './index.scss';
let ImageMapper = require('react-image-mapper');

const hiw = require('../../assets/how_it_works_diagram.png');

export default class ImageMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hoveredArea: null,
      msg: null,
      width: 1000,
      radius: 10
    }
  }
	enterArea(area) {
		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	}
	leaveArea(area) {
		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	}

  getTipPosition(area) {
      return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  clicked(area) {
		this.setState({
      msg: `You clicked on ${area.shape} at coords ${JSON.stringify(area.coords)} !`,
    });
	}

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let width = $('#root > div > div.app-content > div > div').width();
    let radius = 15;
    if(width < 1200){
      radius = 10
    }
    if(width < 992){
      radius = width/40
    }
    if(width < 600){
      radius = width/12
    }
    this.setState({width: width, radius: radius})
  }

  render() {
    // let URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"
    let MAP = {
      name: "my-map",
      areas: [
        { name: "See how your customers travel through your store and what interests them", shape: "circle", coords: [687,415,this.state.radius],  preFillColor:"rgba(220, 220, 220, 0.1)"},
        { name: "See how your customers travel through your store and what interests them", shape: "circle", coords: [472,523,this.state.radius],  preFillColor:"rgba(220, 220, 220, 0.1)"},
        { name: "Analyze passer-by foot traffic and engagement of display windows", shape: "circle", coords: [160,470,this.state.radius],  preFillColor:"rgba(220, 220, 220, 0.1)"},
        { name: "Understand the demographics that enter your store with out foot traffic counter", shape: "circle", coords: [315,380,this.state.radius],  preFillColor:"rgba(220, 220, 220, 0.1)"},
        { name: "Understand where customers spend most of their time with dwell time estimation and traffic flow breakdown", shape: "circle", coords: [555,255,this.state.radius],  preFillColor:"rgba(220, 220, 220, 0.1)"},
        { name: "Use gaze estimation heatmaps to better price store shelving", shape: "circle", coords: [1120,270,this.state.radius],  preFillColor:"rgba(220, 220, 220, 0.1)"},
      ]
    }
    return (
      <div className="image-map">
            <ImageMapper draggable="false" src={hiw} map={MAP} width={this.state.width} imgWidth={1263}
            	onMouseEnter={area => this.enterArea(area)}
            	onMouseLeave={area => this.leaveArea(area)}
            />
            {
            	this.state.hoveredArea &&
            	<span className="tooltip"
            	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
            		{ this.state.hoveredArea && this.state.hoveredArea.name}
            	</span>
            }
      </div>
    );
  }
}
