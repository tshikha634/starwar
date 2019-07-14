/* eslint-disable */
import React, { Component } from 'react';
import { addUserProfile } from '../../Common/actions/userProfileActions'
// import { addMasterData } from '../../../Common/actions/masterDataAction'
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
    const validationRules = {
      userName: "nonEmptyLength",
      password: "nonEmptyLength",
    };
    this.validator = new Validator(validationRules);
  }

  // redirect = () => {
  //   this.props.history.push('/search');
  // }

  // componentDidMount() {
  //   if (localStorage.length !== 0) {
  //     this.props.history.push("./search")
  //   }
  // }
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
          <Row className='justify-content-center'>
            <Col md='8' >
              <CardGroup>
                <Card>
                  <CardBody>
                    <br></br>
                    <br></br>
                    <h2>CurrencyPay Login</h2>
                    <br></br>
                    <FormGroup>
                      <Row>
                        <Col xs='12'>
                          <Label>Username</Label>
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
                              class='form-control'
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
                          <Label>Password</Label>
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
                              class='form-control'
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
                <Card className='text-white bg-primary py-5 d-md-down-none login-board' style={{ width: '44%' }}>
                  <CardBody className='text-center'>
                    <div >
                      <h2 style={{ color: '#083650' }}>Convert Payment Processing into a Profit Center</h2>
                      <p style={{ color: '#083650' }}>
                        CurrencyPay™ is the payment solution that streamlines
												the way businesses buy & sell large ticket items. This
												is the first payment processing service designed around
												the purchase of equipment, machinery and parts and makes
												the entire experience simple.
											</p>
											<a href='https://currencypay.com/home/' target='_blank' rel="noopener noreferrer">
												<Button
													color='primary'
													className='mt-3'
													active
													tabIndex={-1}
												>
													Contact Us!
                        </Button>
                      </a>
                    </div>
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
  userData: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  addUserProfile: result => dispatch(addUserProfile(result)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
