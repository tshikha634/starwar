import React, { Component } from 'react'
import { Input, Row, Col, Label } from "reactstrap";
import SearchPlanets from "./SearchPlanets"
import PlanetDetails from "./PlanetDetails"
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";

class Planets extends Component{
constructor(props) {
    super(props);
    this.state = {
      
    };
    // bind context to methods
    // this.SearchService = new SearchService();
    // this.onChangePage = this.onChangePage.bind(this);
    // this.getPlanetList = this.getPlanetList.bind(this);
    // this.onSearchClick = this.onSearchClick.bind(this);
    // this.onClear = this.onClear.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.renderPlanetList = this.renderPlanetList.bind(this);
  }
  componentDidMount() {
    // this.getPlanetList();
  }


  render() {
    console.log("this.props",this.props)
    return (
      <div>
        <Row>
          <Col>
            <Label>Name</Label>
          </Col>
          <Col>
            {this.props && this.props.value.name
              ? this.props.value.name
              : ""}
          </Col>
          <Col>
            <Label>Diameter</Label>
          </Col>
          <Col>
            {this.props && this.props.value.diameter
              ? this.props.value.diameter
              : ""}
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Climate</Label>
          </Col>
          <Col>
            {this.props && this.props.value.climate
              ? this.props.value.climate
              : ""}
          </Col>
          <Col>
            <Label>Gravity</Label>
          </Col>
          <Col>
            {this.props && this.props.value.gravity
              ? this.props.value.gravity
              : ""}
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Rotation Period</Label>
          </Col>
          <Col>
            {this.props && this.props.value.rotation_period
              ? this.props.value.rotation_period
              : ""}
          </Col>
          <Col>
            <Label>Orbital Period</Label>
          </Col>
          <Col>
            {this.props && this.props.value.orbital_period
              ? this.props.value.orbital_period
              : ""}
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Population</Label>
          </Col>
          <Col>
            {this.props && this.props.value.population
              ? this.props.value.population
              : ""}
          </Col>
          <Col>
            <Label>Terrain</Label>
          </Col>
          <Col>
            {this.props && this.props.value.terrain
              ? this.props.value.terrain
              : ""}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Planets

// Planets.propTypes = {
//   getPlanetsListAction: PropTypes.func.isRequired,
//   getPlanetsListActionSuccess: PropTypes.func.isRequired,
//   history: PropTypes.func
// };

// Planets.defaultProps = {
//   history: () => null
// };

// const mapStateToProps = state => ({
//   searchPlanet: state.searchPlanet
// });

// const mapDispatchToProps = dispatch => ({
//   getPlanetsListAction: data => dispatch(getPlanetsListAction(data)),
//   getPlanetsListActionSuccess: list =>
//     dispatch(getPlanetsListActionSuccess(list)),
//   getPlanetsListActionFailure: err => dispatch(getPlanetsListActionFailure(err))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Planets);