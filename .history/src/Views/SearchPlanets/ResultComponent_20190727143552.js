import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Navbar from "../Navbar";
import { stringify } from "query-string";
// import Pagination from "react-js-pagination";
// import { Input, CardBody, Table, Card, Row, Col } from "reactstrap";
// import {
//   getPlanetsListAction,
//   getPlanetsListActionSuccess,
//   getPlanetsListActionFailure
// } from "../../Common/actions/searchPlanetsActions";
// import SearchService from "../../Services/searchPlanets/searchPlanets";
// import { connect } from "react-redux";

const style = {
  "word-break": "break-all",
  "align-items": "center"
};

export class ResultComponent extends Component {
  render() {
    return (
      <div>
        <Card className="borderNone">
          <CardBody>
            <Row>
              <Col>
                <Label>Name</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Diameter</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Climate</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Gravity</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Rotation Period</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Orbital Period</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Rotation Period</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Orbital Period</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Population</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Terrain</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ResultComponent;
