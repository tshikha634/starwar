import React, { Component } from "react";
import PropTypes from "prop-types";
import Planets from "./Planets";
import { connect } from "react-redux";

export class PlanetDetails extends Component {
         constructor(props) {
           super(props);
         }

         componentDidMount() {
           console.log(this.props);
         }

         componentWillReceiveProps(nextProps) {
           console.log("nextProps", nextProps);
         }

         renderPlanetDetails = () => {
           return this.props.searchPlanet.data.results.map(
             (item, index) => {
               if (
                 this.props.searchPlanet.data.results.indexOf(item) !==
                 -1
               ) {
                 return <Planets index={index} value={item} />;
               } else {
                 return null;
               }
             }
           );
         };

         render() {
           return <div> ok seen</div>;
         }
       }

export default PlanetDetails;
