import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import {
  getUserProfileAction,
  getUserProfileActionSuccess,
  getUserProfileActionFailure
} from "../../Common/actions/userProfileActions";
import UserService from "../../Services/user/user";
import Validator from "../../Common/Utilities/stateValidator";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { connect } from "react-redux";
import { MESSAGE } from "../../Common/constant/index";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.UserService = new UserService();
    this.state = {
      UserName: "",
      password: "",
      value: "",
      fields: {},
      errors: {},
      customError: "",
      userId: "",
      isValid: ""
    };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    this.validateForm = this.validateForm.bind(this);
    // const validationRules = {
    //   UserName: "nonEmptyLength",
    //   password: "nonEmptyLength"
    // };
    // this.validator = new Validator(validationRules);
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

  onChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
        customError:""
      },
      () => {
        console.log(this.state.UserName, this.state.password);
      }
    );
  }

  validateForm() {
    if (this.state.UserName.length > 0 && this.state.password.length > 0) {
      this.setState({
        customError: ""
      },() => {
      this.handleChange();
      })
    } else {
      this.setState({
        customError: "Fields are required"
      });
    }
  }

  handleChange = () => {
    this.login();
  }; 

  login = async () => {
    this.props.getUserProfileAction();
    if (this.state.UserName.length === "" &&  this.state.password.length === "") {
      return this.setState({
        isValid: false,
        customError: "Fields are required",
        flag: false
      });
    }else{
    let result = await this.UserService.validate(this.state.UserName,this.state.password);
      try {
        if (result.success) {
          if (
            this.state.UserName === result.data.results[0].name && this.state.password === result.data.results[0].birth_year) {
            this.setState({
              isValid: true,
              customError: "",
              flag: true
            });
            this.props.getUserProfileActionSuccess(result.data);
            this.props.history.push("./searchplanets");
            window.location.reload();
          }
        } else {
          this.setState({
            isValid: false,
            customError: "Fields are required",
            flag: false
          });
        }
        // }
      } catch (e) {
        ToastsStore.error(
          MESSAGE.WRONG_LOGIN_PASSWORD,
          MESSAGE.TOAST_INTERVAL
        );
      }
    // } else {
    // }
    }
  };

  render() {
    return (
      <div id="frmLogin" className="logincss">
        <ToastsContainer position="top_center" store={ToastsStore} />

        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Login...</h1>

            <div className="userName">
              <label htmlFor="userName">User Name</label>
              <Input
                type="text"
                placeholder="Username"
                id="userNameId"
                name="UserName"
                className="form-control"
                onChange={this.onChange}
                autoComplete="username"
                value={this.state.UserName}
              />
              <span style={{ color: "red" }}>{this.state.customError}</span>
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
                autoComplete="password"
                value={this.state.password}
              />
              <span style={{ color: "red" }}>{this.state.customError}</span>
            </div>
            <div className="createAccount">
              <Button
                id="loginButton"
                color="primary"
                onClick={this.validateForm}
              >
                Login
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
