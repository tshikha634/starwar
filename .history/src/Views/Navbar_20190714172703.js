import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from './logout'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import {connect} from 'react-redux'
class Navbar extends Component {
  render() {
    return (
      <div>
            <div>
              <ul id="nav">
              <li><a id='Logout' onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</a></li>
              </ul>
            </div>
      </div>
    )
  }
}


export default Navbar
