import React, { Component } from "react";
import Planets from "./Planets";

export class PlanetDetails extends Component {
  constructor(props) {
    super(props);
  }

  // renderPlanetDetails = () => {
  //   // return this.props.searchPlanet.data.results.map((item, index) => {
  //   //   return (
  //   //     <div>{item.name ? <Planets index={index} value={item} /> : null}</div>
  //   //   );
  //   // });
  // };

  render() {
    console.log(this.props)
    return (
    <div>{this.renderPlanetDetails()}</div>;
    );
  }
}

export default PlanetDetails;
