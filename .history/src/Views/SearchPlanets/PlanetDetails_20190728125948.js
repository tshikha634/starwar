import React, { Component } from "react";
import Planets from "./Planets";

export class PlanetDetails extends Component {
         constructor(props) {
           super(props);
         }

         renderPlanetDetails = () => {
           debugger;
           return this.props.searchPlanet.data.results.map(
             (item, index) => {
               return (
                 <div>
                   {item.name ? (
                     <Planets index={index} value={item} />
                    // this.renderData()
                   ) : null}
                 </div>
               );
             }
           );
         }
        //  renderData = (index,item) => {
        // for(var i = 0; i <= index.length;i++){
        //  <Planets 
        //   index={i++}
        //   value={item} />
        // }
        //  }
         render() {
           console.log("this.props", this.props.searchPlanet.data);
           return (
             <div>
               { this.renderPlanetDetails() }
              
             </div>
           );
         }
       }
       

export default PlanetDetails;


