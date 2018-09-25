import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {

  render() {
    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
        </div>
        <div>
           {'React + Redux'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />


        <div style={{float: 'right', paddingRight: 20}}>
            <Button
                onClick={this.props.loginClick.bind(this)}
                style={(this.props.loggedIn === false) ? {backgroundColor: 'blue', color: 'white'}: {display: 'none'}}>
                Login
            </Button>
            <span
                className="rounded-initials"
                style={(this.props.loggedIn === true) ? {display:'inline-block'}: {display: 'none'}}>
                EH
            </span>
            <Button
                style={{backgroundColor: 'red', color: 'white'}}
                onClick={(this.props.loggedIn === true) ? this.props.loginClick.bind(this) : undefined}>
                {(this.props.loggedIn === false) ? "Signup": "Logout"}
            </Button>
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};


TopBar.propTypes = {
  loginClick: PropTypes.func
}

