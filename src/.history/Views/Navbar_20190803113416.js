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
        <a class="active" href="#home">
          Home
        </a>
        
        <div class="topnav-right">
          <a href="/">Logout</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
