import React, { Component } from 'react';
import './UserPanel.css';
import logo from '../../../img/logo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { redirect, setLocal } from '../../../actions/index';

export class UserPanel extends Component {

  render() {   

    return (
      <div className='header_userPanel'>
          <div className='header_logo'>
            {window.location.pathname === '/' 
          ? <img className='logo_img' src={logo} alt='logo'/> 
          : <NavLink path to={'/'}><img onClick={this.props.redirect} className='logo_img' src={logo} alt='logo'/></NavLink>
            }              
          </div>
          <div className='user_panel'>
              <span className='uaButton' >ua</span>
              <span className='ruButton' >ru</span>
              <span className='enButton' >eng</span>           
          </div>        
      </div>
    )
  }
}

export default connect(null, { redirect })(UserPanel);
