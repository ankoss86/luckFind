import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AdvertItem.css';

export class AdvertItem extends Component {

state = {
    local: this.props.local,
    advert: this.props.props,
    textContent: this.props.content,
}

  render() {

    let { local, textContent, advert } = this.state;
    let { id, content, type } = advert;
  
    return (      
        <div className={type === 'lost' ? 'advertLostItemInSlide' : 'advertFindItemInSlide'}>
          <NavLink type={type} to={`/${local}/advert/${id}?type=${type}`}>
            <span className={type === 'lost' ? 'lostMarker' : 'findMarker'}>{type === 'lost' ? textContent.lostMarker : textContent.findMarker}</span>
            <h3>{content}</h3>
          </NavLink>
        </div>
      
    )
  }
}

export default AdvertItem;
