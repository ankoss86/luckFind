import React, { Component } from 'react';
import './AddFind.css';

export class AddFind extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className='addAdverts_component'>
        <div>
          <form className='addFindForm'>
            <div className='inputsWraper'>
            <span className='findStep'>Шаг-1</span>
              <input></input>
              <input></input>
              <textarea></textarea>
            </div>
            <div className='inputsWraper'>
            <span className='findStep'>Шаг-2</span>
              <input></input>
              <input></input>
              <input></input>
            </div>
            <div className='inputsWraper'>
            <span className='findStep'>Шаг-3</span>
              <input></input>
              <input></input>
              <input></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddFind
