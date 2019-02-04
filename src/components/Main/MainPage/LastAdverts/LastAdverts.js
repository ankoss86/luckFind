import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './LastAdverts.css';
import * as settings from './SliderSettings';

const sliderSettings = settings.sliderSettings;

export class LastAdverts extends Component {
  render() {
    return (
      <div className='lastAdverts_component'>
        <h2 className='sliderTitle'>Последние объявления:</h2>
        <Slider className='slider' {...sliderSettings}>
          <div className='advertLostItemInSlide'>
          <span className='lostMarker'>потеря</span>
            <h3>1</h3>
          </div>
          <div className='advertFindItemInSlide'>
          <span className='findMarker'>находка</span>
            <h3>2</h3>
          </div>
          <div className='advertFindItemInSlide'>
          <span className='findMarker'>находка</span>
            <h3>3</h3>
          </div>
          <div className='advertFindItemInSlide'>
          <span className='findMarker'>находка</span>
            <h3>4</h3>
          </div>
          <div className='advertLostItemInSlide'>
          <span className='lostMarker'>потеря</span>
            <h3>5</h3>
          </div>
          <div className='advertFindItemInSlide'>
          <span className='findMarker'>находка</span>
            <h3>6</h3>
          </div>
          <div className='advertFindItemInSlide'>
          <span className='findMarker'>находка</span>
            <h3>7</h3>
          </div>
          <div className='advertFindItemInSlide'>
          <span className='findMarker'>находка</span>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default LastAdverts
