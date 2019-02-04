import React, { Component } from 'react';
import './Main.css'

//components
import MapContainer from './Map/Map';
import LastAdverts from './LastAdverts/LastAdverts';

export class MainPage extends Component {
  render() {
    return (
      <div className='main_panel'>
        <MapContainer />
        <LastAdverts />
      </div>
    )
  }
}

export default MainPage
