import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './LastAdverts.css';
import * as settings from './SliderSettings';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//components
import AdvertItem from '../../AdvertItem/AdvertItem';

const sliderSettings = settings.sliderSettings;

export class LastAdverts extends Component {

  state = {
    local: this.props.local,
    content: this.props.content,
    adverts: [
      {
        id: 1,
        content: 'passport',
        type: 'lost'
      },
      {
        id: 2,
        content: 'passport',
        type: 'find'
      },
      {
        id: 3,
        content: 'passport',
        type: 'lost'
      },
      {
        id: 4,
        content: 'passport',
        type: 'lost'
      },
      {
        id: 5,
        content: 'passport',
        type: 'find'
      },
      {
        id: 6,
        content: 'passport',
        type: 'lost'
      },
      {
        id: 7,
        content: 'passport',
        type: 'find'
      },

    ]
  }

  displayLastAdverts = () => (
      this.state.adverts.map(advert=>(
        <AdvertItem content={this.state.content} key={advert.id} props={advert} local={this.state.local}/>
      ))
  )

  render() {

    let { content } = this.state;

    return (
      <div className='lastAdverts_component'>
        <h2 className='sliderTitle'>{content.lastAdverts}</h2>
        <Slider className='slider' {...sliderSettings}>
          {this.displayLastAdverts()}         
        </Slider>
      </div>
    )
  }
}

const MSTP = state => {
  return {
    local: state.local.local
  }
}

export default withRouter(connect(MSTP)(LastAdverts));
