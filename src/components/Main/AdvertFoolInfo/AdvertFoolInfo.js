import React, { Component } from 'react';
import './AdvertFoolInfo.css';

//components
import MyMapComponent from '../MainPage/Map/MapComponent';

export class AdvertFoolInfo extends Component {
  render() {

    const center = {
        lat: 50.1545,
        lng: 30.45188
    }

    let type = this.props.location.search.includes('find') ? 'find' : 'lost';
 
    return (
      <div className='foolInfo_component'>
        <div className={type === 'find' ? 'itemAdressGreen' : 'itemAdressOrange'}>
            <span className={type === 'find' ? 'itemAdress_greenText' : 'itemAdress_orangeText'}>adress</span>
        </div>
        <div className='foolInfo_content'>
            <div className='foolInfo_details'>
                datails
            </div>
            <div className='foolInfoMap'>
                <div className='foolInfo_map'> 
                   <MyMapComponent center={center}/> 
                </div>                                
                <div className='sayInSocial'>
                    sayInSocial
                </div>
            </div>
        </div>
        <div className='foolInfo_communication'>
            <span className={type === 'find' ? 'foolInfo_communication__greenButton' : 'foolInfo_communication__orangeButton'}>i am find</span>
            <div className='foolInf0_communication__form'>
                form
            </div>
        </div>
      </div>
    )
  }
}

export default AdvertFoolInfo
