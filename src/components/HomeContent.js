import React, {Component} from 'react';
import Button from './Button';

import UserList from '../routes/UserList';

export default class HomeContent extends Component {
  render() {
    return (
      <div>
          <Button onClick={this.props.loginClick.bind(this)}>
              {(this.props.loggedIn === false) ? "Login": "Logout"}
          </Button>
          <UserList/>
      </div>
    );
  }
}
