import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from './logout'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import {connect} from 'react-redux'
class Navbar extends Component {
  constructor(props){
    super(props)
      this.onLogout = this.onLogout.bind(this)
  }
  onLogout(){
  setTimeout(() => {
    window.location.hash = "/login"
}, 2000)
  }
  render() {
    console.log(this.props)
    return (
      <div>
            <div>
              <ul id="nav">
              <li><a id='Logout' onClick={e => this.onLogout(e)}><i className="fa fa-lock"></i> Logout</a></li>
              </ul>
            </div>
      </div>
    )
  }
}


export default Navbar
