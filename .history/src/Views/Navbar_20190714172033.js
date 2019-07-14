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
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem id='Logout' onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
              </ul>
            </div>
      </div>
    )
  }
}


export default Navbar
