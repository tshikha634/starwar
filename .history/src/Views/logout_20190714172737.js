import React, { Component } from 'react';
import { connect } from "react-redux";
import { RESET_USER_PROFILE } from "../Common/actions/userProfileActions"

export class Logout extends Component {
  debugger
    clearSession() {
        this.props.resetUserProfile()
        setTimeout(() => {
            window.location.hash = "/login"
        }, 2000)
    }
    
    render() {
        return (
            <div>
                <h2 class="logout">You are logging out....!!</h2>
                {this.clearSession()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({ 
    resetUserProfile: () => dispatch({ type: RESET_USER_PROFILE }),
});

export default connect(null , mapDispatchToProps)(Logout);