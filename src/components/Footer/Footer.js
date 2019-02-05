import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { redirect } from '../../actions/index'; 
import './Footer.css';

export class Footer extends Component {

  state = {
    local: this.props.local,
    content: this.props.content.footer
  }

  render() {

    let { local, content } = this.state;

    return (
      <div className='footer'>
        <div className='footer_items'>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/about`}>{content.about}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/finds`}>{content.finds}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/losses`}>{content.losses}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/blog`}>{content.blog}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/faq`}>{content.faq}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/contacts`}>{content.contacts}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/how-it-works`}>{content.howItWork}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/news`}>{content.news}</NavLink>
          <NavLink onClick={this.props.redirect} className='nav_item' to={`/${local}/work`}>{content.work}</NavLink>
        </div>
        <div className='community'>
          <div className='social_links'>
            <span className='our_comunmunity'>{content.community}</span>
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
          <NavLink className='nav_item' to={`/${local}/`}>luckfind.me</NavLink>
        </div>
      </div>
    )
  }
}

const MSTP = state => {
  return {
    local: state.local.local,
    content: state.localJson
  }
}

export default connect(MSTP, { redirect })(Footer)
