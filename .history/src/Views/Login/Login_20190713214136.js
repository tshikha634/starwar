/* eslint-disable */
import React, { Component } from "react";
import {
  getUserProfileAction,
  getUserProfileActionSuccess,
  getUserProfileActionFailure
} from "../../Common/actions/userProfileActions";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  FormGroup,
  Label
} from "reactstrap";
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
    // if (localStorage.length !== 0) {
    //   this.props.history.push("./search")
    // }
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
    let result = await this.userService.validate(this.state.userName,this.state.password);

    console.log("result", result);
    try {
     
        if (this.state.userName === result.results.name && this.state.password === result.results[0].birth_year) {
          if (result.success) {
          this.props.getUserProfileActionSuccess(result.data);
          console.log(this.props.getUserProfileActionSuccess);
        } else {
          debugger
          this.props.history.push('./searchplanets')
          window.location.reload();
        }
      } else {
      }
    } catch (e) {
      ToastsStore.error(MESSAGE.OPPS_ERROR, MESSAGE.TOAST_INTERVAL);
    }
  };

  render() {
    debugger;
    return (
      <div id="frmLogin" className="logincss">
        <ToastsContainer position="top_center" store={ToastsStore} />
        <Container>
          <Row>
            <Col md="8">
              <CardGroup>
                <Card>
                  <CardBody>
                    <br />
                    <br />
                    <h2>Login</h2>
                    <br />
                
                      <Row>
                        <Col xs="12">
                          <Label className='label_user'>Username</Label>
                          {/* <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user" />
                              </InputGroupText>
                            </InputGroupAddon> */}
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
                         <div>{this.renderErrors("userName")}</div> 
                        </Col>
                      </Row>
                   
                      <Row>
                        <Col xs="12">
                          <Label className="label_user_password">Password</Label>
                          {/* <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock" />
                              </InputGroupText>
                            </InputGroupAddon> */}
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
                          <div>{this.renderErrors("password")}</div>
                        </Col>
                      </Row>
                    
                      <Row>
                        <Col xs="4">
                          <Button
                            id="loginButton"
                            className="site-button"
                            color="primary"
                            onClick={this.login}
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                        <Col>
                          <Button
                          
                            id="loginButton"
                            className="site-button"
                            color="primary"
                            onClick={this.logout}
                            className="px-4"
                          >
                            Logout
                          </Button>
                        </Col>
                      </Row>
                  
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
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
