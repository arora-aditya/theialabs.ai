/* global handleFormSubmit
*/
import React, { Component } from 'react';

import Button from '../../components/Button';
import Circle from '../../components/Circle';
import Box from '../../components/Box';
import Panel from '../../components/Panel';
import CentralHeading from '../../components/CentralHeading';
import LeftHeading from '../../components/LeftHeading';
import ImageMap from '../../components/ImageMap';


import './Home.scss';

const demographic = require('../../assets/CircleSVGs/demographic.svg');
const eye = require('../../assets/CircleSVGs/eye.svg');
const flow = require('../../assets/CircleSVGs/flow.svg');
const heatmap = require('../../assets/CircleSVGs/heatmap.svg');
const steps = require('../../assets/CircleSVGs/steps.svg');

const box = require('../../assets/Placeholder(2).jpg');

// const pop = require('../../assets/Card(TBC).png')
const communitech = require('../../assets/Communitech.png');
const laurier = require('../../assets/Laurier.png');
const rbc = require('../../assets/RBC.png');


export default class Home extends Component {
  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    handleFormSubmit(e);
  }

  render() {
    return (
      <div className='home'>
        <div className='container'>
          <p className="flow-text heading-text">
            Gain unparalleled insights into your
            store without the need for
            any additional hardware
          </p>
          <div className='top-buttons'>
              <Button link='/contact' text='Contact Us' color='blue'/>
              <Button link='/demo' text='See the Demo' color='white'/>
          </div>
          <div className='features'>
            <p className="large-heading-text">
              Generate advanced retail analytics of your
              physical stores using security cameras
            </p>
            <div className='features-r1 row'>
              <Circle
                img={steps}
                className='col s6 m4 l4 offset-l2 offset-m2'
                heading='Foot Traffic Counter'
                text='Count the number of visitors in your store to understand real-time conversion rates.'
              />
              <Circle
                img={flow}
                className='col s6 m4 l4'
                heading='Traffic Flow Breakdown'
                text='Understand how customers travel through your store for accurate merchandising.'
              />
            </div>
            <div className='features-r2 row'>
              <Circle
                img={heatmap}
                className='col s6 m4 l4 offset-s3'
                heading='Customer Dwell Times'
                text='Find out where your visitors spend most of their time to be there for all the hard decisions.'
              />
              <Circle
                img={eye}
                className='col s6 m4 l4'
                heading='Customer Gaze Expectation'
                text='Discover where customers look in your store to accurately price retail shelf space or conduct A/B testing.'
              />
              <Circle
                img={demographic}
                className='col s6 m4 l4'
                heading='Age and Gender Estimation'
                text='Break down metrics based on customers’ age or gender for extra precise insights.'
              />
            </div>
          </div>
          <div className='how-it-works'>
            <CentralHeading
              heading='How it works'
              subheading="Request a demo on our website. We will reach out to you with detailed instructions or answer any questions you might have."
            />
            <div className='how-it-works-r1 row'>
              <Box
                img={box}
                className='col s12 m6 l4'
                heading='Find your camera codes'
                text='Send us your NVR or VMS code and you’re good to go. We’re compatible with all standard security cameras.'
              />
              <Box
                img={box}
                className='col s12 m6 l4'
                heading='Try us out for free'
                text='Try Theia Labs for free for 30 days, simply sign up and you’re good to go.'
              />
              <Box
                img={box}
                className='col s12 m6 l4 offset-m3'
                heading='Start saving'
                text='Save up to 60% of what you were paying previously for single use sensors by requesting a quote.'
              />
            </div>
          </div>
          <Panel
            img={'https://i.imgur.com/TQgky1n.png'}
            text='Discover how you can improve you can improve your store today with a free 30 day trial, no additional hardware required.'
            button_text='Request Demo'
            handleClick={this.handleClick}
          />
          <p className="large-heading-text">
            Supported By
          </p>
          <div className='partners valign-wrapper'>
            <div className='row'>
              <div className='col s12 m4 l4'>
                <img src={communitech} alt='communitech logo'/>
              </div>
              <div className='col s12 m4 l4'>
                <img src={laurier}  alt='laurier launchpad logo'/>
              </div>
              <div className='col s12 m4 l4'>
                <img src={rbc} alt='RBC logo'/>
              </div>
            </div>
          </div>
          <ImageMap />

        </div>
      </div>
    )
  }
}
