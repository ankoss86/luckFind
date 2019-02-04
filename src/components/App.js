import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//actions
import { setLocal } from '../actions/index';

//components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import './App.css';

class App extends React.Component {

  state = {
    localJson: require('./localization.json')
  }

  componentDidMount(){
    let local = localStorage.getItem('local');
    if(local === null){
      localStorage.setItem('local', 'ua');
      local = localStorage.getItem('local');
    }     
    if(this.props.history.location.pathname === '/'){
      this.props.history.push(`/${local}/`);
    }
    
    this.props.setLocal(local)
  }

  render() {  
    return (      
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(null, { setLocal })(App));
