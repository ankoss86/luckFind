import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//actions

//components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import './App.css';

class App extends React.Component {

  state = {
    localJson: require('./localization.json')
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

export default withRouter(connect(null, {})(App));
