import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './AddSearchPanel.css';

//actions
import { redirect } from '../../../actions/index';

export class AddSearchPanel extends Component {

state = {
    local: this.props.local,
    localJson: this.props.localJson
}

addFindAdvert = () => {
    this.props.history.push('/addFind');
    this.props.redirect();
}
    
addLostAdvert = () => {
    this.props.history.push('/addLost');
    this.props.redirect();
}

  render() {
    return (
        <div className='addSearch_component'>
            <span onClick={this.addFindAdvert} className='addFindButton'>я нашел</span>
                <form className='searchForm'>
                    <input className='searchInput' type='text' placeholder='поиск по сайту'></input> 
                    <span className='searchIcon'><i className="fas fa-search"></i></span>
                </form>            
            <span onClick={this.addLostAdvert} className='addLostButton' >я потерял</span>            
        </div>      
    )
  }
}

export default withRouter(connect(null, { redirect })(AddSearchPanel));
