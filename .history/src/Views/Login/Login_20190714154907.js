/* eslint-disable */
import React, { Component } from "react";
import {
  getUserProfileAction,
  getUserProfileActionSuccess,
  getUserProfileActionFailure
} from "../../Common/actions/userProfileActions";
import { UserService } from "../../Services/user/user";
import Validator from "../../Common/Utilities/stateValidator";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { connect } from "react-redux";
import { MESSAGE } from "../../Common/constant/index";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      userName: "",
      password: "",
      fields: {},
      errors: {},
      userId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    const validationRules = {
      userName: "nonEmptyLength",
      password: "nonEmptyLength"
    };
    this.validator = new Validator(validationRules);
  }

  redirect = () => {
    this.props.history.push('/searchplanets');
  }

  componentDidMount() {
    this.login();
  }
  componentWillMount() {
    console.log(this.props);
  }

  renderErrors(key) {
    return this.state.errors[key]
      ? this.state.errors[key].map(errorMessage => (
          <div className="errorMsg">{errorMessage}</div>
        ))
      : null;
  }

  onChange(e) {
    // debugger
    let newState = {};
    let key = e.target.name;
    newState[key] = e.target.value;
    this.setState(newState, function() {
      let validationResult = this.validator.validateField(this.state, key);
      if (validationResult.valid === false) {
        return this.setState({
          isValid: false,
          errors: validationResult.errors
        });
      }
      return this.setState({ isValid: true, errors: {} });
    });

    console.log("key,value", newState);
  }

  handleChange = e => {
    if (e.key === "Enter") {
      let validationResult = this.validator.validateState(this.state);
      if (validationResult.valid === false) {
        return this.setState({
          isValid: false,
          errors: validationResult.errors,
          flag: true
        });
      }
      this.login();
    }
  };

  login = async () => {
    debugger;
    let validationResult = this.validator.validateState(this.state);
    console.log("validationResult", validationResult);
    this.props.getUserProfileAction();
    console.log(this.props.getUserProfileAction());
    if (validationResult.valid === false) {
      return this.setState({
        isValid: false,
        errors: validationResult.errors,
        flag: true
      });
    }

    if (this.state.userName === result.results.name && this.state.password === result.results[0].birth_year){
    let result = await this.userService.validate(this.state.userName,this.state.password);
    try {
          if (result.success) {
          this.props.getUserProfileActionSuccess(result.data);
          console.log(this.props.getUserProfileActionSuccess);
        } else {
          debugger
          this.props.history.push('./searchplanets')
          window.location.reload();
        }
      
    } catch (e) {
      ToastsStore.error(MESSAGE.OPPS_ERROR, MESSAGE.TOAST_INTERVAL);
    }
  }
  };

  render() {
    debugger;
    return (
      <div id="frmLogin" className="logincss">
        <ToastsContainer position="top_center" store={ToastsStore} />
   
                          <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form>
            <div className="userName">
              <label htmlFor="userName">First Name</label>
              <input
               type="text"
               placeholder="Username"
               id="userNameId"
               name="userName"
               className="form-control"
               onChange={this.onChange}
               autoComplete="username"
               value={this.state.userName}
               onKeyPress={this.handleChange}
             />
          {this.renderErrors("userName")}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                 type="password"
                 placeholder="Password"
                 id="passwordId"
                 name="password"
                 className="form-control"
                 onChange={this.onChange}
                 autoComplete="current-password"
                 value={this.state.password}
                 onKeyPress={this.handleChange}
              />
               {this.renderErrors("password")}
            </div>
            <div className="createAccount">
              <button 
              
              id="loginButton"
                            color='primary'
                            onClick={this.login}
              
              >Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userProfile
});

const mapDispatchToProps = dispatch => ({
  getUserProfileAction: data => dispatch(getUserProfileAction(data)),
  getUserProfileActionSuccess: data =>
    dispatch(getUserProfileActionSuccess(data)),
  getUserProfileActionFailure: err => dispatch(getUserProfileActionFailure(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
