import React, { Component } from 'react';
import {connect} from 'react-redux';

import { login } from '../redux/actions/userActions';
import { logout } from '../redux/actions/userActions';
import { loadUsers } from '../redux/actions/userActions';
import { unloadUsers } from '../redux/actions/userActions';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';


class Home extends Component {
  onLogin() {
    if(!this.props.loggedIn){
      this.props.login();
    }else{
      this.props.logout();
    }   
  }

  render() {
      return (
        <div className="App">
          <TopBar 
            loggedIn={this.props.loggedIn}
            loginClick={this.onLogin.bind(this)}
          />
          <HomeContent 
            loggedIn={this.props.loggedIn}
            loginClick={this.onLogin.bind(this)}
            />
        </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.users.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login:() => {
            dispatch(login());
            dispatch(loadUsers());
        },
        logout:() => {
            dispatch(logout());
            dispatch(unloadUsers());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

