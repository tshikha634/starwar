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

  renderPlanetList() {
    debugger;
    return this.props.searchPlanet.data.results.map((item, index) => {
      return (
        <ul className="list">
          <li key={item.index}>
            <div>
              <Row>
                <Col>
              {item.name ? (
                <span
                  title="name"
                  className="hyperlink"
                  href=""
                  onClick={this.redirectTOCreate}
                >
                  {item.name}
                </span>
              ) : (
                <span>{item.name}</span>
              )}
              </Col>
              </Row>
            </div>
          </li>
        </ul>
      );
    });
  }
  render() {
    console.log(
      "this.props.searchPlanet.data.results[1].population",
      this.props.searchPlanet.data
    );
    return (
      <div>
        {/* <Navbar />
        <Card className="cardBorder">
          <searchPlanet searchPlanet={this.props.searchPlanet} />
          {this.state.name ? 
          <PlanetDetails searchPlanet={this.props.searchPlanet} /> : null}
         
        </Card> */}
      </div>
    );
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