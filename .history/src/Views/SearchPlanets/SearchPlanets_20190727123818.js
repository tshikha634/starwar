import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import { Input, CardBody, Table, Card, Row,Col } from "reactstrap";
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";

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
      let params = `limit=${this.state.limit}&offset=${this.state.offset}&id=${
        this.state.id
      }`;
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
    return this.props.searchPlanet.data.results.map((item, index) => {
      return (
        <tr key={index}>
          <td style={style}>{item.id ? item.id : "_"}</td>
          <td style={style}>{item.population ? item.population : "-"}</td>
          <td style={style}>{item.diameter ? item.diameter : "_"}</td>
          <td style={style}>
            {item.rotation_period ? item.rotation_period : "_"}
          </td>
          <td style={style}>
            {item.orbital_period ? item.orbital_period : "-"}
          </td>
        </tr>
      );
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
                <Col>
                  <Input
                    className="formControl"
                    type="text"
                    id="id"
                    id="id"
                    onChange={this.onChange}
                    value={this.state.id}
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
              <Table class="table table-bordered table-inverse">
                <thead />
                <thead>
                  <tr>
                    <th style={style}>PLANET NAME</th>
                    <th style={style}>PLANET POPULATION</th>
                    <th style={style}>PLANET DIAMETER</th>
                    <th style={style}>PLANET ROTATION PERIOD</th>
                    <th style={style}>PLANET ORBITAL PERIOD</th>
                  </tr>
                </thead>
                {this.props.searchPlanet.data.results &&
                this.props.searchPlanet.data.results.length ? (
                  <tbody>{this.renderPlanetList()}</tbody>
                ) : null}
              </Table>
              <div>
                {this.props.searchPlanet.data.results &&
                this.props.searchPlanet.data.results.length ? (
                  this.renderPlanetList
                ) : (
                  <p>No result found.</p>
                )}
              </div>
              <div className="pagination">
                <Pagination
                  items={this.props.searchPlanet.data.results}
                  totalItemsCount={this.props.searchPlanet.data.count}
                  activePage={this.state.offset}
                  onChange={this.onChangePage}
                  pageRangeDisplayed={5}
                  itemsCountPerPage={this.state.limit}
                />
              </div>
            </div>
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
