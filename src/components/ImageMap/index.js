import * as React from 'react';
import './index.scss';
let ImageMapper = require('react-image-mapper');

const hiw = require('../../assets/how_it_works_diagram.png');

const centerMap = {
  margin: 0,
}

export default class ImageMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hoveredArea: null,
      msg: null
    }
  }
  load() {
		this.setState({ msg: 'Interact with image !' });
	}
  clickedOutside(evt) {
		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({ msg: `You clicked on the image at coords ${JSON.stringify(coords)} !` });
	}
	moveOnImage(evt) {
		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({ moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !` });
	}
	enterArea(area) {
		this.setState({ hoveredArea: area, msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	}
	leaveArea(area) {
		this.setState({ hoveredArea: null, msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(area.coords)} !` });
	}
	moveOnArea(area, evt) {
		const coords = {x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({ moveMsg: `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(coords)} !` });
	}

  getTipPosition(area) {
      return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  clicked(area) {
		this.setState({ msg: `You clicked on ${area.shape} at coords ${JSON.stringify(area.coords)} !`});
	}

  render() {
    // let URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"
    let MAP = {
      name: "my-map",
      areas: [
        { name: "See how your customers travel through your store and what interests them", shape: "circle", coords: [370,400,10],  preFillColor:"red"},
        { name: "See how your customers travel through your store and what interests them", shape: "circle", coords: [540,325,10],  preFillColor:"red"},
        { name: "Analyze passer-by foot traffic and engagement of display windows", shape: "circle", coords: [137,365,10],  preFillColor:"red"},
      ]
    }
    return (
      <div className="image-map">
        <div className="container" style={centerMap}>
            <ImageMapper src={hiw} map={MAP} width={1000}
            	onLoad={() => this.load()}
            	onClick={area => this.clicked(area)}
            	onMouseEnter={area => this.enterArea(area)}
            	onMouseLeave={area => this.leaveArea(area)}
            	onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
            	onImageClick={evt => this.clickedOutside(evt)}
            	onImageMouseMove={evt => this.moveOnImage(evt)}
            />
            {
            	this.state.hoveredArea &&
            	<span className="tooltip"
            	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
            		{ this.state.hoveredArea && this.state.hoveredArea.name}
            	</span>
            }
        </div>
      </div>
    );
  }
}
