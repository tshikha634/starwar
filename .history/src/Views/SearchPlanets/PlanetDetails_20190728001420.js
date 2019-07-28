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
           console.log(this.props);
           const planetName = this.props.location ? this.props.location.pathname : null 
         }

         render() {
           
           return (
             <div>
               <Navbar />
               <Row>
                 <Col>
                   <Label>Name</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.name
                     ? this.props.name
                     : ""}
                 </Col>
                 <Col>
                   <Label>Diameter</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.diameter
                     ? this.props.diameter
                     : ""}
                 </Col>
               </Row>
               <Row>
                 <Col>
                   <Label>Climate</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.climate
                     ? this.props.climate
                     : ""}
                 </Col>
                 <Col>
                   <Label>Gravity</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.gravity
                     ? this.props.gravity
                     : ""}
                 </Col>
               </Row>
               <Row>
                 <Col>
                   <Label>Rotation Period</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.rotation_period
                     ? this.props.rotation_period
                     : ""}
                 </Col>
                 <Col>
                   <Label>Orbital Period</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.orbital_period
                     ? this.props.orbital_period
                     : ""}
                 </Col>
               </Row>
               <Row>
                 <Col>
                   <Label>Population</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.population
                     ? this.props.population
                     : ""}
                 </Col>
                 <Col>
                   <Label>Terrain</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.terrain
                     ? this.props.terrain
                     : ""}
                 </Col>
               </Row>
             </div>
           );
         }
       }
       

export default PlanetDetails;

