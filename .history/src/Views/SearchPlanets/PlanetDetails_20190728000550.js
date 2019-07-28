import React, { Component } from "react";
// import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import { Input, Row, Col, Label } from "reactstrap";
// import {
//   getPlanetsListAction,
//   getPlanetsListActionSuccess,
//   getPlanetsListActionFailure
// } from "../../Common/actions/searchPlanetsActions";
// import SearchService from "../../Services/searchPlanets/searchPlanets";
// import { connect } from "react-redux";

export class PlanetDetails extends Component {
         constructor(props) {
           super(props);
           
           };
        
         
         componentDidMount() {
           // const RecPaymentSetupId = this.props.location
           //   ? parse(this.props.location.search).RecPaymentSetupId
           //   : null;
           console.log(this.props);
           const planetName = this.props.location ? this.props.location.pathname : null 
         }

         render() {
           
           return (
             <div>
               
          
             </div>
           );
         }
       }
       

export default PlanetDetails;

