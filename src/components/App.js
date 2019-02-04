import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//actions
import { setLocal, putLocalJsonToStore } from '../actions/index';

//components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import './App.css';

class App extends React.Component {

  state = {
    local: '',
    localJson: require('./localization.json')
  }

  componentDidMount(){
    let local = localStorage.getItem('local');
    let localJson; 
    
    if(local === null){
      localStorage.setItem('local', 'ua');
      local = localStorage.getItem('local');
    }
    
    this.props.setLocal(local);
    localJson = this.state.localJson[local];
    this.props.putLocalJsonToStore(localJson)
    this.setState({local: local});


    if(this.props.history.location.pathname === '/'){
      this.props.history.push(`/${local}/`);
    }    
  }

  render() {  

    const { local } = this.state;

    return ( local &&     
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(null, { setLocal, putLocalJsonToStore })(App));
