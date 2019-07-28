import React, { Component } from "react";
import Planets from "./Planets";

export class PlanetDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderPlanetDetails = () => {
    
    // let arr = this.props.searchPlanet.data.results
    // for(var i = 0;i<= arr.length;i++){
    //   console.log()
    // }
    
      return this.props.searchPlanet.data.results.map((item, index) => {
         return <div>
            
            {item.name ? <Planets index={index} value={item} /> : null}
          </div>
        
      });
    console.log(items)
  };

  render() {
    console.log(this.props.searchPlanet.data.results[0])
    return (
    <div>
    {this.renderPlanetDetails()}
    </div>
    );
  }
}

export default PlanetDetails;
