/* eslint-disable */
import React, { Component } from 'react';

// import { addUserProfile } from '../../Common/actions/userProfileActions'
import {USER_PROFILE, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE} from '../../Common/actions/userProfileActions'
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
} from 'reactstrap';
import { UserService } from '../../Services/user/user';
import Validator from "../../Common/Utilities/stateValidator";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { connect } from "react-redux";
// import { MESSAGE } from '../../../Common/constant/index'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      userName: '',
      password: '',
      fields: {},
      errors: {},
      userId: ''
    };
    this.onChange = this.onChange.bind(this)
    // this.login  = this.login.bind(this)
    const validationRules = {
      userName: "nonEmptyLength",
      password: "nonEmptyLength",
    };
    this.validator = new Validator(validationRules);
  }

  // redirect = () => {
  //   this.props.history.push('/search');
  // }

  componentDidMount() {
    if (localStorage.length !== 0) {
      this.props.history.push("./search")
    }
    // this.login()
  }
componentWillMount(){
  console.log(this.props);
}

  renderErrors(key) {
    return this.state.errors[key] ? this.state.errors[key].map(errorMessage => (
      <div className="errorMsg">{errorMessage}</div>)) : null;
  }

  onChange(e) {
    let newState = {};
    let key = e.target.name;
    newState[key] = e.target.value;
    this.setState(newState, function () {
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

  handleChange = (e) => {
    if (e.key === 'Enter') {
      let validationResult = this.validator.validateState(this.state);
      if (validationResult.valid === false) {
        return this.setState({ isValid: false, errors: validationResult.errors, flag: true });
      }
      // this.login();
    }
  }

	// login = async () => {
  //   debugger
	// 	let validationResult = this.validator.validateState(this.state);
	// 	if (validationResult.valid === false) {
	// 		return this.setState({ isValid: false, errors: validationResult.errors, flag: true });
	// 	}
  //   let result = await this.userService.validate(this.state.userName, this.state.password);
  //   console.log("result",result)
	// 	try {
	// 		if (result.success) {
  //       this.props.addUserProfile(result.data);
        

        // if (!result.data.user.IsProfileSetup || result.data.user.IsProfileSetup === null) {
        //   this.props.history.push('./firstLogin')
        //   window.location.reload()
        // }
        // else if (result.data.user.IsResetPassword) {
        //   this.props.history.push('./changepassword')
        //   window.location.reload()
        // }
        // else
        //   this.props.history.push('./userlist')
        // window.location.reload()
  //     }
  //     else {
  //       ToastsStore.error(result.data.message);
  //     }
  //   }
  //   catch (e) {
  //     ToastsStore.error(MESSAGE.OPPS_ERROR, MESSAGE.TOAST_INTERVAL);
  //   }
  // }

  render(){
    debugger
    return (
      <div id='frmLogin' className='logincss'>
        <ToastsContainer position='top_center' store={ToastsStore} />
        <Container>
          <Row>
            <Col md='8' >
              <CardGroup>
                <Card>
                  <CardBody>
                    <br></br>
                    <br></br>
                    <h2>Login</h2>
                    <br></br>
                    <FormGroup>
                      <Row>
                        <Col xs='12'>
                          <Label className="label">Username</Label>
                          <InputGroup className='mb-3' >
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='icon-user' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type='text'
                              placeholder='Username'
                              id='userNameId'
                              name='userName'
                              className='form-control'
                              onChange={this.onChange}
                              autoComplete='username'
                              value={this.state.userName}
                              onKeyPress={this.handleChange}
                            />
                          </InputGroup>
                          {this.renderErrors("userName")}
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col xs='12'>
                          <Label className="label_Password">Password</Label>
                          <InputGroup className='mb-3'>
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='icon-lock' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type='password'
                              placeholder='Password'
                              id='passwordId'
                              name='password'
                              className='form-control'
                              onChange={this.onChange}
                              autoComplete='current-password'
                              value={this.state.password}
                              onKeyPress={this.handleChange}
                            />
                          </InputGroup>
                          {this.renderErrors("password")}
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col xs='4'>
                          <Button
                            id="loginButton"
                            color='primary'
                            onClick={this.login}
                            className='px-4'
                          >
                            Login
													</Button>
                        </Col>
                        {/* <Col xs='8'>
                          <Button color='link' onClick={this.redirect} className="forgetpswd">
                            Forgot password?
													</Button>
                        </Col> */}
                      </Row>
                    </FormGroup>
                  </CardBody>
                </Card>
                <Card>

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
  userData: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  // addUserProfile: result => dispatch(addUserProfile(result)),
  getUserProfileAction: data => dispatch(getUserProfileAction(data)),
  getUserProfileActionSuccess: list => dispatch(getUserProfileActionSuccess(list)),
  getUserProfileActionFailure: err => dispatch(getUserProfileActionFailure(err))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
