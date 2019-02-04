import React, { Component } from 'react';
import './UserPanel.css';
import logo from '../../../img/logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { redirect, setLocal } from '../../../actions/index';

export class UserPanel extends Component {

  state = {
    local: '',
  }

  componentWillReceiveProps(nextProps){
    this.setState({local: nextProps.local}) 
  }

  handlerChandeLocal = local => {
    localStorage.setItem('local', `${local}`);
    this.props.setLocal(local)
  }  

  render() {

    const { local } = this.state;    

    return ( local &&
      <div className='header_userPanel'>
          <div className='header_logo'>
            {window.location.pathname === '/' 
          ? <img className='logo_img' src={logo} alt='logo'/> 
          : <NavLink path to={`/${local}`}><img onClick={this.props.redirect} className='logo_img' src={logo} alt='logo'/></NavLink>
            }              
          </div>
          <div className='user_panel'>
              <span className='uaButton' onClick={()=>this.handlerChandeLocal('ua')} >ua</span>
              <span className='ruButton' onClick={()=>this.handlerChandeLocal('ru')} >ru</span>
              <span className='enButton' onClick={()=>this.handlerChandeLocal('en')} >en</span>   
              <p>{this.props.local}</p>        
          </div>        
      </div>
    )
  }
}

const MSTP = state => {
  return {
    local: state.local.local
  }
}

const MDTP = dispatch => {
  return{
    setLocal: local => dispatch(setLocal(local)), 
    redirect: function(){
      dispatch(redirect())
    }     
  }
}

export default withRouter(connect(MSTP, MDTP)(UserPanel));
