import React, { Component } from 'react';

import CentralHeading from '../../components/CentralHeading';
import LeftHeading from '../../components/LeftHeading';

import './Solutions.scss';

export default class Solutions extends Component {
  render() {
      return (
        <div className='solutions container'>
          <div className='info'>
          <p className='large-heading-text'>
            Industry Solution
          </p>
            <CentralHeading
              heading=''
              subheading="Request a demo on our website. We will reach out to you with detailed instructions or answer any questions you might have."
            />
            <LeftHeading
              heading='Grocers'
              subheading="Grocery store managers spend hours every day watching how people browse through their store isles to find ways how they can improve product placement and increase sales. Making store managers watch the isles is inefficient and prone to biases. Equip your stores with the right tools to help your store managers make the right decisions and increase sales."
            />
            <LeftHeading
              heading='Fashion retail'
              subheading="The old school door-mounted traffic counters are inaccurate and provide very primitive metrics. With Theia Labs you can track advanced metrics that make sense for your store. Instead of tracking conversion rates blind to demographic factors, you can set specific targets per age groups and gender. In addition, perform product placement A/B testing to maximize sales."
            />
            <LeftHeading
              heading='Malls'
              subheading="Use gaze estimation to find out what stores patrons look into. Combine gaze insights with actual foot traffic and customer paths to find organic sales drivers and inform your leasing decisions."
            />
          </div>
        </div>

      )
  }
}
