import React, { Component } from "react";
import { Input, Button } from "reactstrap";
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
    this.props.history.push("/searchplanets");
  };

  componentDidMount() {
    this.login();
  }

  renderErrors(key) {
    return this.state.errors[key]
      ? this.state.errors[key].map(errorMessage => (
          <div className="errorMsg">{errorMessage}</div>
        ))
      : null;
  }

  onChange(e) {
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
    this.props.getUserProfileAction();
    if (validationResult.valid === false) {
      return this.setState({
        isValid: false,
        errors: validationResult.errors,
        flag: true
      });
    }
    let result = await this.userService.validate(
      this.state.userName,
      this.state.password
    );
    if (
      this.state.userName === result.data.results[0].name &&
      this.state.password === result.data.results[0].birth_year
    ) {
      try {
        if (result.success) {
          this.props.getUserProfileActionSuccess(result.data);
          this.props.history.push("./searchplanets");
          window.location.reload();
          console.log(this.props.getUserProfileActionSuccess);
        } else {
          debugger;
          this.props.history.push("./searchplanets");
          window.location.reload();
        }
      } catch (e) {
        ToastsStore.error(MESSAGE.WRONG_LOGIN_PASSWORD, MESSAGE.TOAST_INTERVAL);
      }
    } else {
      ToastsStore.error(MESSAGE.OPPS_ERROR, MESSAGE.TOAST_INTERVAL);
    }
  };

  render() {
    return (
      <div id="frmLogin" className="logincss">
        <ToastsContainer position="top_center" store={ToastsStore} />
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <div className="userName">
              <label htmlFor="userName">First Name</label>
              <Input
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
              <Input
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
              <Button id="loginButton" color="primary" onClick={this.login}>
                Create Account
              </Button>
              <small>Already Have an Account?</small>
            </div>
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
