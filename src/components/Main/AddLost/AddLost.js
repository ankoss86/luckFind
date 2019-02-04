import React, { Component } from 'react';
import './AddLost.css';

import MyMapComponent from '../MainPage/Map/MapComponent';

export class AddLost extends Component {
  render() {
    return (
      <div className='addAdverts_component'>
      
        <div>
          <form className='addLostForm'>
            <div className='inputsWraper'>
            <span className='lostStep'>Шаг-1</span>
              <input></input>
              <input></input>
              <textarea></textarea>
            </div>
            <div className='inputsWraper'>
            <span className='lostStep'>Шаг-1</span>
              <input></input>
              <input></input>
              <input></input>
            </div>
            <div className='inputsWraper'>
            <span className='lostStep'>Шаг-1</span>
              <input></input>
              <input></input>
              <input></input>
            </div>
          </form>
        </div>
        <MyMapComponent />
      </div>
    )
  }
}


export default(AddLost)  
