import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../routes';
import { connect } from 'react-redux';
import { redirect } from '../../actions/index'; 
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer_items'>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.ABOUT}>О проекте</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.FINDS}>Находки</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.LOSSES}>Потери</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.BLOG}>Блог</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.FAQ}>ЧАВО</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.CONTACTS}>Контакты</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.HOW_IT_WORKS}>Как это работает</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.NEWS}>Новости сервиса</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={routes.WORK}>Вакансии</NavLink>
        </div>
        <div className='community'>
          <div className='social_links'>
            <span className='our_comunmunity'>Наши соовщества:</span>
            <span className='fb_icon'><a href='https://www.facebook.com/luckfind.me/'><i class="fb_icon_awesome fab fa-facebook-square"></i></a></span>
          </div>
          <div className='social_buttons'>
            <div className="fb-like" data-href="https://www.facebook.com/luckfind.me/" data-layout="button_count" 
              data-action="like" data-size="small" data-show-faces="true" data-share="false">
            </div>
          </div>
        </div>
        <div className='copyright'>
          <span className='copyright_text'>Copyright  ©  2019</span>
          <NavLink className='nav_item' to='/'>luckfind.me</NavLink>
        </div>
      </div>
    )
  }
}

export default connect(null, { redirect })(Footer)
