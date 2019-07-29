import React, { Component } from "react";
import PropTypes from "prop-types";
import Planets from "./Planets";
import { connect } from "react-redux";

export class PlanetDetails extends Component {
         constructor(props) {
           super(props);
         }

      
         componentWillReceiveProps(nextProps) {
           console.log("nextProps", nextProps);
         }

         render() {
           console.log(this.props);
           return <div> 
             {}
           </div>;
         }
       }

export default PlanetDetails;
