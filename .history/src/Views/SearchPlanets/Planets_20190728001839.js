import React, { Component } from 'react'
import SearchPlanets from "./SearchPlanets"
import PlanetDetails from "./PlanetDetails"
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";

export default class Planets extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

Planets.propTypes = {
  getPlanetsListAction: PropTypes.func.isRequired,
  getPlanetsListActionSuccess: PropTypes.func.isRequired,
  history: PropTypes.func
};

Planets.defaultProps = {
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
)(Planets);