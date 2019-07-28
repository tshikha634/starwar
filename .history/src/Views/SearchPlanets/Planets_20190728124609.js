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
      isLoading: false,
      search: {},
      limit: 10,
      offset: 1,
      page: "",
      name: "",
      diameter: "",
      population: "",
      diameter: "",
      orbital_period: "",
      rotation_period: "",
      gravity: "",
      terrain: "",
      climate: ""
    };
    // bind context to methods
    this.SearchService = new SearchService();
    this.onChangePage = this.onChangePage.bind(this);
    this.getPlanetList = this.getPlanetList.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderPlanetList = this.renderPlanetList.bind(this);
  }
  componentDidMount() {
    this.getPlanetList();
  }

  fields = () => {
    let field = {
      name: this.state.name,
      limit: this.state.limit,
      page: this.state.page,
      population: this.state.population,
      diameter: this.state.diameter,
      orbital_period: this.state.orbital_period,
      rotation_period: this.state.rotation_period,
      gravity: this.state.gravity,
      terrain: this.state.terrain,
      climate: this.state.climate
    };
    console.log("name", this.state.name);
    this.getPlanetList(stringify(field));
  };

  onSearchClick = () => {
    this.setState(
      {
        limit: 10,
        offset: 1,
        name: this.state.name
      },
      () => {
        this.fields();
      }
    );
  };

  onClear() {
    this.setState(
      {
        limit: 10,
        offset: 1,
        name: ""
      },
      () => {
        this.fields();
      }
    );
  }
  onChangePage = page => {
    debugger;
    this.setState(
      {
        offset: page,
        limit: 10,
        name: ""
      },
      () => {
        this.fields();
      }
    );
  };
  async getPlanetList() {
    debugger;
    try {
      this.props.getPlanetsListAction();

      let params = `=${this.state.name}&page=${this.state.offset}`;
      let PlanetList = await this.SearchService.getPlanetsByName(params);
      this.props.getPlanetsListActionSuccess(PlanetList);
      console.log(PlanetList);
    } catch (err) {
      this.props.getPlanetsListActionFailure(err);
    }
  }
  onChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  redirectTOCreate = () => {
    // this.props.history.push(`/planetdetails`);
    // <div>
    //   <PlanetDetails 
    //   props={this.props.searchPlanet} 
    //   />
    // </div>;
  };

  
  render() {
    console.log(
      "this.props.searchPlanet.data.results[1].population",
      this.props.searchPlanet.data
    );
    return (
      <div>
        <Row>
          <Col>
            <Label>Name</Label>
          </Col>
          <Col>{this.props && this.props.name ? this.props.name : ""}</Col>
          <Col>
            <Label>Diameter</Label>
          </Col>
          <Col>
            {this.props && this.props.diameter ? this.props.diameter : ""}
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Climate</Label>
          </Col>
          <Col>
            {this.props && this.props.climate ? this.props.climate : ""}
          </Col>
          <Col>
            <Label>Gravity</Label>
          </Col>
          <Col>
            {this.props && this.props.gravity ? this.props.gravity : ""}
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
            {this.props && this.props.terrain ? this.props.terrain : ""}
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