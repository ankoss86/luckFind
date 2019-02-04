import React, { Component } from 'react'
import { 
    Switch, 
    Route,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from '../../routes';

//components
import AddFind from './AddFind/AddFind';
import AddLost from './AddLost/AddLost';
import MainPage from './MainPage/MainPage';

//footer components
import About from '../Footer/About/About';
import Finds from '../Footer/Finds/Finds';
import Losses from '../Footer/Losses/Losses';
import Blog from '../Footer/Blog/Blog';
import Faq from '../Footer/Faq/Faq';
import Contacts from '../Footer/Contacts/Contacts';
import HowItWorks from '../Footer/HowItWorks/HowItWorks';
import News from '../Footer/News/News';
import Work from '../Footer/Work/Work';

export class Main extends Component {

    state = {
        redirect: this.props.redirect,
    }

  render() {

    window.onpopstate = () => this.setState({ redirect: true });
    
    return (
        <Switch>
            {/* <Route exact path='/' component={MainPage}/> */}
            <Route exact path='/:local/' component={MainPage}/>
            <Route path={routes.ADD_FIND} component={AddFind}/>
            <Route path={routes.ADD_LOST} component={AddLost}/>
            <Route path={routes.ABOUT} component={About}/>
            <Route path={routes.FINDS} component={Finds}/>
            <Route path={routes.LOSSES} component={Losses}/>
            <Route path={routes.BLOG} component={Blog}/>
            <Route path={routes.FAQ} component={Faq}/>
            <Route path={routes.CONTACTS} component={Contacts}/>
            <Route path={routes.HOW_IT_WORKS} component={HowItWorks}/>
            <Route path={routes.NEWS} component={News}/>
            <Route path={routes.WORK} component={Work}/>
        </Switch>            
    )
  }
}

const MSTP = state => {
    return {
        redirect: state.redirect.redirect,
    }
}

export default withRouter(connect(MSTP)(Main));
