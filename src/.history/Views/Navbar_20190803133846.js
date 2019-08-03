import React, { Component } from "react";
import {Button} from "reactstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    setTimeout(() => {
      window.location.hash = "/";
    }, 2000);
  }
  render() {
    return (
      <div class="topnav">
        <a class="active">Home</a>

        <div class="topnav-right">
          <Button class="active" onClick={this.onLogout}>
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default Navbar;
