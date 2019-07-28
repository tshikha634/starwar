import React, { Component } from "react";
// import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types"
import { Input, Row, Col, Label } from "reactstrap";
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";

export class PlanetDetails extends Component {
         constructor(props) {
           super(props);
         }

         renderPlanetDetails = () => {
           debugger;
           return this.props.searchPlanet.data.results.map(
             (item, index) => {
               return (<div>
                  <Row>
                 <Col>
                   <Label>Name</Label>
                 </Col>
                 <Col>
                   {this.props && this.props.name ? this.props.name : ""}
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
           );
         }
         render() {
           console.log("this.props", this.props.searchPlanet.data);
           return (
             <div>
               { this.renderPlanetDetails() }
              
             </div>
           );
         }
       }
       

// export default PlanetDetails;

PlanetDetails.propTypes = {
  getPlanetsListAction: PropTypes.func.isRequired,
  getPlanetsListActionSuccess: PropTypes.func.isRequired,
  history: PropTypes.func
};

PlanetDetails.defaultProps = {
  history: () => null
};

const mapStateToProps = state => ({
  searchPlanet: state.searchPlanet
});

const mapDispatchToProps = dispatch => ({
  getPlanetsListAction: data => dispatch(getPlanetsListAction(data)),
  getPlanetsListActionSuccess: list =>
    dispatch(getPlanetsListActionSuccess(list)),
  getPlanetsListActionFailure: err => dispatch(getPlanetsListActionFailure(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetDetails);

