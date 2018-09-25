import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserRow } from '../components/UserRow';

class UserList extends Component {
    render() {
        return (
          <div className="App">
                {this.props.userList.length > 0 &&
                    <div>
                        <h4 className="header-list">User List</h4>
                        <table id="users">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.userList.map((user, index) =>
                                    <UserRow key={index} user={user}/>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.users.users
    }
}

export default connect(mapStateToProps, {})(UserList);
