import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './AddSearchPanel.css';

//actions
import { redirect } from '../../../actions/index';

export class AddSearchPanel extends Component {

state = {
    local: this.props.local.local,
    content: this.props.content.header.searchPanel
}

  render() {

    const { local, content } = this.state;
 
    return (
        <div className='addSearch_component'>
            <NavLink to={`/${local}/addFind`}  className='addFindButton'>{content.findButton}</NavLink>
                <form className='searchForm'>
                    <input className='searchInput' type='text' placeholder={content.headerPlaceholder}></input> 
                    <span className='searchIcon'><i className="fas fa-search"></i></span>
                </form>            
            <NavLink to={`/${local}/addLost`}  className='addLostButton' >{content.lostButton}</NavLink>            
        </div>      
    )
  }
}

const MSTP = state => {
    return {
        local: state.local,
        content: state.localJson
    }
}

export default withRouter(connect(MSTP, { redirect })(AddSearchPanel));
