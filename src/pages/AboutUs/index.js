import React, { Component } from 'react';

import Circle from '../../components/Circle';

import './AboutUs.scss';

const griffin = require('../../assets/griffin.jpg');
const ruslan = require('../../assets/ruslan.png');

export default class AboutUs extends Component {
  render() {
      return (
        <div className='about-us container'>
          <div className='info'>
          <p className='large-heading-text'>
            The People
          </p>
          <div className='row'>
            <Circle
              img={ruslan}
              className='col s12 m5 offset-m1'
              heading='Ruslan Nikolaev'
              text='Ex. Uber ATG, Shopify'
            />
            <Circle
              img={griffin}
              className='col s12 m5 offset-m1'
              heading='Griffin Keglevich'
              text='Ex. Shopify Plus, KPMG'
            />
          </div>
          <div class='text'>
            We’re a software technology company based in Kitchener, founded by a team of entrepreneurs and engineers from Wilfrid Laurier University and University of Waterloo.
            Our mission is to equip retail businesses with the right tools to understand their customer interactions and storefront performance.
          </div>


          </div>
        </div>

      )
  }
}
