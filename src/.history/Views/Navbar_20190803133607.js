import React, { Component } from "react";

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
        <a class="active" href="#">
          Home
        </a>

        <div class="topnav-right">
          <button class="active" onClick={this.onLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
