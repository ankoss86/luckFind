import React, { Component } from 'react';
import './UserPanel.css';
import logo from '../../../img/logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//actions
import { redirect, setLocal } from '../../../actions/index';

export class UserPanel extends Component {

  state = {
    local: this.props.local,
  }

  componentWillReceiveProps(nextProps){
    this.setState({local: nextProps.local}) 
  }

  handlerChandeLocal = local => {
    localStorage.setItem('local', `${local}`);
    this.props.setLocal(local);
    let path = this.props.location.pathname.split('/');
    path[1] = local;
    let str = path.join('/');
    this.props.history.push(str);
    document.location.reload(true);    
  }  

  render() {
    
    const { local } = this.state;    
    console.log(local)
    return (
      <div className='header_userPanel'>
          <div className='header_logo'>
            {window.location.pathname === '/' 
          ? <img className='logo_img' src={logo} alt='logo'/> 
          : <NavLink path to={`/${local}/`}><img onClick={this.props.redirect} className='logo_img' src={logo} alt='logo'/></NavLink>
            }              
          </div>
          <div className='user_panel'>
              <span className={local === 'ua' ? 'uaButton activ' : 'uaButton'} onClick={()=>this.handlerChandeLocal('ua')} >ua</span>
              <span className={local === 'ru' ? 'ruButton activ' : 'ruButton'} onClick={()=>this.handlerChandeLocal('ru')} >ru</span>
              <span className={local === 'en' ? 'enButton activ' : 'enButton'} onClick={()=>this.handlerChandeLocal('en')} >en</span>
              <span className='faceBook_logIn'><i class="fab fa-facebook-f"></i></span>
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
