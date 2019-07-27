import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import { Input, CardBody, Table, Card, Row, Col } from "reactstrap";
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";
import ResultComponent from "./ResultComponent";

const style = {
  "word-break": "break-all",
  "align-items": "center"
};

export class SearchPlanets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      search: {},
      limit: 10,
      offset: 1,
      id: "",
      diameter: "",
      population: "",
      diameter: "",
      orbital_period: "",
      rotation_period: ""
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
  onSearchClick = () => {
    this.setState(
      {
        limit: 10,
        offset: 1,
        id: ""
      },
      () => {
        const t = {
          id: this.state.id,
          limit: this.state.limit,
          offset: this.state.offset,
          population: this.state.population,
          diameter: this.state.diameter,
          orbital_period: this.state.orbital_period,
          rotation_period: this.state.rotation_period
        };
        this.getPlanetList(stringify(t));
      }
    );
  };

  onClear() {
    this.setState(
      {
        limit: 10,
        offset: 1,
        id: ""
      },
      () => {
        const t = {
          id: this.state.id,
          limit: this.state.limit,
          offset: this.state.offset,
          population: this.state.population,
          diameter: this.state.diameter,
          orbital_period: this.state.orbital_period,
          rotation_period: this.state.rotation_period
        };
        this.getPlanetList(stringify(t));
      }
    );
  }
  onChangePage = page => {
    this.setState(
      {
        offset: page,
        linit: 10,
        id: ""
      },
      () => {
        const t = {
          id: this.state.id,
          limit: this.state.limit,
          offset: this.state.offset
        };
        this.getPlanetList(stringify(t));
      }
    );
  };
  async getPlanetList() {
    try {
      this.props.getPlanetsListAction();
      let params = `limit=${this.state.limit}&offset=${this.state.offset}`;
      let PlanetList = await this.SearchService.getPlanetsByName(params);
      this.props.getPlanetsListActionSuccess(PlanetList);
    } catch (err) {
      this.props.getPlanetsListActionFailure(err);
    }
  }
  onChange = event => {
    this.setState({
      id: event.target.value
    });
  };
  renderPlanetList() {
    debugger
    return this.props.searchPlanet.data.results.map((item, index) => {
      return (
        <option key={index}>
          <ResultComponent props={item}></ResultComponent>
        </option>
      );
      //  <tr key={index}>
      //      <td style={style}>{item.id ? item.id : "_"}</td>
      //      <td style={style}>{item.population ? item.population : "-"}</td>
      //      <td style={style}>{item.diameter ? item.diameter : "_"}</td>
      //      <td style={style}>
      //        {item.rotation_period ? item.rotation_period : "_"}
      //      </td>
      //      <td style={style}>
      //        {item.orbital_period ? item.orbital_period : "-"}
      //      </td>
      //    </tr>
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Card className="borderNone">
          <CardBody>
            <div className="table-responsive">
              <Row>
                <Col sm={{ size: 4, offset: 6 }}>
                  <Input
                    className="formControl"
                    type="text"
                    id="name"
                    id="name"
                    onChange={this.onChange}
                    value={this.state.name}
                    placeholder="Planet Name"
                  />
                </Col>
                <Col>
                  <button
                    id="searchClick"
                    onClick={this.onSearchClick}
                    className="site-button"
                  >
                    Search
                  </button>

                  <button
                    id="clearSearch"
                    onClick={this.onClear}
                    className="site-button"
                  >
                    Clear
                  </button>
                </Col>
              </Row>
              {/* <ResultComponent> */}
                {this.props.searchPlanet.data.results &&
                this.props.searchPlanet.data.results.length ? (
                  this.renderPlanetList()
                ) : (
                  <p>No result found.</p>
                )}{" "}
              {/* </ResultComponent> */}
            </div>
            {/* <Row className="row1">
                       <Col sm="12">
                         {" "}
                         {this.props.searchPlanet.data.results &&
                         this.props.searchPlanet.data.results.length ? (
                           this.renderPlanetList()
                         ) : (
                           <p>No result found.</p>
                         )}
                       </Col>
                     </Row> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

SearchPlanets.propTypes = {
  getPlanetsListAction: PropTypes.func.isRequired,
  getPlanetsListActionSuccess: PropTypes.func.isRequired,
  history: PropTypes.func
};

SearchPlanets.defaultProps = {
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
)(SearchPlanets);
