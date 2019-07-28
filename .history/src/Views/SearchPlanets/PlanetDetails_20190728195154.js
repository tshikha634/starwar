import React, { Component } from "react";
import { setPlanetData } from "../../Common/actions/setPlanetDataActions";
import PropTypes from "prop-types";
import Planets from "./Planets";
import { connect } from "react-redux";

export class PlanetDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderPlanetDetails = () => {
    return this.props.searchPlanet.data.results.map((item, index) => {
      if (this.props.searchPlanet.data.results.indexOf(item) == -1) {
        console.log(this.props.searchPlanet.data.results.indexOf(item));
        return <Planets index={index} value={item} />;
      } else {
        return null;
      }
    });
  };

  render() {
    return <div>{this.renderPlanetDetails()}</div>;
  }
}

export default PlanetDetails;
