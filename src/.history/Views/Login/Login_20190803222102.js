import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import {
  getUserProfileActionSuccess,
} from "../../Common/actions/userProfileActions";
import UserService from "../../Services/user/user";
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
      customError: "",
      isValid: ""
    };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  redirect = () => {
    this.props.history.push("/searchplanets");
  };

  componentDidMount() {
    this.login();
  }

  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
      });
  }

  validateForm() {
    if (this.state.UserName.length > 0 && this.state.password.length > 0) {
      this.setState({
        customError: ""
      },() => {
      this.login();
      })
    } 
    else {
      this.setState({
        customError: "Fields are required"
      });
    }
  }

 

  login = async () => {
    if (this.state.UserName.length === "" &&  this.state.password.length === "") {
      return this.setState({
        isValid: false,
        customError: "Fields are required",
      });
    }else{
    let result = await this.UserService.validate(this.state.UserName,this.state.password);
      try {
        if (result.success) {
          if (this.state.UserName === result.data.results[0].name && this.state.password === result.data.results[0].birth_year) {
            this.setState({
              isValid: true,
              customError: "",
            });
            this.props.getUserProfileActionSuccess(result.data);
            this.props.history.push("./searchplanets");
            window.location.reload();
          }
         else {
          ToastsStore.error(
          MESSAGE.WRONG_LOGIN_PASSWORD,
          MESSAGE.TOAST_INTERVAL
        );
        }}
        // }
      } catch (e) {
        ToastsStore.error(
          MESSAGE.OPPS_ERROR,
          MESSAGE.TOAST_INTERVAL
        );
      }
    }
  };

  render() {
    console.log(this.props)
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
  getUserProfileActionSuccess: data =>
    dispatch(getUserProfileActionSuccess(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
