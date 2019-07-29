import React, { Component } from "react";
import { Row, Col, Label } from "reactstrap";

export class PlanetDetails extends Component {
  render() {
    return (
      <div>
        {this.props.searchPlanet ? (
          <div className="Planetcontainer">
            <Row className="row1">
              <Col>
                <Label>Name</Label>
              </Col>
              <Col>
                {this.props.searchPlanet.name
                  ? this.props.searchPlanet.name
                  : ""}
              </Col>
              <Col>
                <Label>Diameter</Label>
              </Col>
              <Col>
                {this.props.searchPlanet.diameter
                  ? this.props.searchPlanet.diameter
                  : ""}
              </Col>
            </Row>
            <Row className="row1">
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
            <Row className="row1">
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
            <Row className="row1">
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
          </div>
        ) : null}
      </div>
    );
  }
}

export default PlanetDetails;
