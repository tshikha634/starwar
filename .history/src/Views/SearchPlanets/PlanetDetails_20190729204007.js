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
             {this.props.searchPlanet ? 
            <Row>
                <Col>
                  <Label>Name</Label>
                </Col>
                <Col>{this.props.searchPlanet.name ? this.props.searchPlanet.name : ""}</Col>
                <Col>
                  <Label>Diameter</Label>
                </Col>
                <Col>
                  {this.props.searchPlanet.diameter
                    ? this.props.searchPlanet.diameter
                    : ""}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Climate</Label>
                </Col>
                <Col>
                  {this.props && this.props.searchPlanet.climate
                    ? this.props.searchPlanet.climate
                    : ""}
                </Col>
                <Col>
                  <Label>Gravity</Label>
                </Col>
                <Col>
                  {this.props && this.props.searchPlanet.gravity
                    ? this.props.searchPlanet.gravity
                    : ""}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Rotation Period</Label>
                </Col>
                <Col>
                  {this.props && this.props.searchPlanet.rotation_period
                    ? this.props.searchPlanet.rotation_period
                    : ""}
                </Col>
                <Col>
                  <Label>Orbital Period</Label>
                </Col>
                <Col>
                  {this.props && this.props.searchPlanet.orbital_period
                    ? this.props.searchPlanet.orbital_period
                    : ""}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Population</Label>
                </Col>
                <Col>
                  {this.props && this.props.searchPlanet.population
                    ? this.props.searchPlanet.population
                    : ""}
                </Col>
                <Col>
                  <Label>Terrain</Label>
                </Col>
                <Col>
                  {this.props && this.props.searchPlanet.terrain
                    ? this.props.searchPlanet.terrain
                    : ""}
                </Col>
              </Row> 
            : null }
           </div>;
         }
       }

export default PlanetDetails;
