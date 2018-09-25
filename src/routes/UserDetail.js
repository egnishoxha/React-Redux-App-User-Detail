import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserDetail } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import Redirect from 'react-router/Redirect';

class UserDetail extends Component {
    componentDidMount() {
        this.props.loadUserDetail(this.props.match.params.userId);
    }

    render(){
        const user = this.props.user;
        if (user === undefined) return <Redirect to="/home"/>;

        return (
            <div>
                <div className="card">
                    <h2>User Detail</h2>
                    <img src={user.picture.large} alt="Use Detail"/>
                    <div className="container">
                        <h2><b>Fullname: {user.name.first + " " + user.name.last}</b></h2> 
                        <p>Phone: {user.phone}</p>
                        <p>E-mail: {user.email}</p> 
                    </div>
                </div>
                <p className="btn-container"><Link to={`/home`} className={"go-back"}>{"Back"}</Link></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserDetail: (userId) => {
            dispatch(loadUserDetail(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);