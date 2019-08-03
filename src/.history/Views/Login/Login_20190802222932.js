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
      fields: {},
      errors: {},
      userId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
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
    // let newState = {};
    // let key = e.target.name;
    // newState[key] = e.target.value;
    // this.setState(newState, function() {
    //   let validationResult = this.validator.validateField(this.state, key);
    //   if (validationResult.valid === false) {
    //     return this.setState({
    //       isValid: false,
    //       errors: validationResult.errors
    //     });
    //   }
    //   return this.setState({ isValid: true, errors: {} });
    // });
    this.setState({
      value : event.target.value
    },()=> {
      console.log(event.target.value);
    })
  }

  handleChange = e => {
    if (e.key === "Enter") {
      // let validationResult = this.validator.validateState(this.state);
      // if (validationResult.valid === false) {
      //   return this.setState({
      //     isValid: false,
      //     errors: validationResult.errors,
      //     flag: true
      //   });
      // } else {
      //   return this.setState(
      //     {
      //       isValid: true,
      //       errors: "",
      //       flag: false
      //     },
      //     () => this.login()
      //   );
      if(this.state.UserName === "" && this.state.password === ""){
        return null
      }else{
        this.login()
      }
    }
    
  };

  login = async () => {
    // debugger
    // // let validationResult = this.validator.validateState(this.state);

    // this.props.getUserProfileAction();
    // // if (validationResult.valid === false) {
    // //   return this.setState({
    // //     isValid: false,
    // //     errors: validationResult.errors,
    // //     flag: true
    // //   });
    // // }
    // let result = await this.UserService.validate(this.state.UserName,this.state.password);
    // if (this.state.UserName === result.data.results[0].name && this.state.password === result.data.results[0].birth_year) {
    //   try {
    //     if (result.success) {
    //       this.setState({
    //         isValid: true,
    //         errors: "",
    //         flag: false
    //       });
    //       this.props.getUserProfileActionSuccess(result.data);
    //       this.props.history.push("./searchplanets");
    //       window.location.reload();
    //     } else {
    //       ToastsStore.error(
    //         MESSAGE.WRONG_LOGIN_PASSWORD,
    //         MESSAGE.TOAST_INTERVAL
    //       );
    //     }
    //   } catch (e) {
    //     ToastsStore.error(MESSAGE.OPPS_ERROR, MESSAGE.TOAST_INTERVAL);
    //   }
    // } else {
    // }
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
                onKeyPress={this.handleChange}
              />
              {this.renderErrors("UserName")}
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
                onKeyPress={this.handleChange}
              />
              {this.renderErrors("password")}
            </div>
            <div className="createAccount">
              <Button id="loginButton" color="primary" onClick={this.login}>
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
