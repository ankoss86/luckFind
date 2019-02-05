import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css'

//components
import MapContainer from './Map/Map';
import LastAdverts from './LastAdverts/LastAdverts';

export class MainPage extends Component {
  render() {
    return (
      <div className='main_panel'>
        <MapContainer content={this.props.content.main.mainPage}/>
        <LastAdverts content={this.props.content.main.mainPage}/>
      </div>
    )
  }
}

const MSTP = state => {
  return {
    content: state.localJson
  }
}

export default connect(MSTP)(MainPage)
