import React, { Component } from 'react';
import './Header.css'

//components
import AddSearchPanel from './AddSearchPanel/AddSearchPanel';
import UserPanel from './UserPanel/UserPanel';

export class Header extends Component {

  render() {
    return (
      <div className='header_panel'>     
        <UserPanel />
        <AddSearchPanel />
      </div>
    )
  }
}


export default Header;
