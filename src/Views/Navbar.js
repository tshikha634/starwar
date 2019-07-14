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
      <div>
        <div>
          <ul id="nav">
            <li>
              <a id="Logout" onClick={e => this.onLogout(e)}>
                <i className="fa fa-lock" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
