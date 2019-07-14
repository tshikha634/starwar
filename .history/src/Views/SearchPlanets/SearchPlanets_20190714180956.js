import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar"
import { stringify } from 'query-string'
import Pagination from "react-js-pagination";
import { Input, CardBody, Table, Card, Button } from "reactstrap";
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
      diameter:"",
      name:"",
      orbital_period:"",
      population:"",
      rotation_period:""
    };
    // bind context to methods
    this.SearchService = new SearchService();
    this.onChangePage = this.onChangePage.bind(this)
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
    debugger
    this.setState({
      name:'',
      limit:10,
      offset: 1
    }, () => {
      const t = {
        name: this.state.name,
        limit:this.state.limit,
        offset:this.state.offset
      }
      this.getPlanetList(stringify(t))
    })

  }

  onClear() {
    debugger
    this.setState({
      limit: 10,
      offset: 1,
      name:"",
    }, () => {
      const t = {
      name: this.state.name,
      limit:this.state.limit,
        offset:this.state.offset
      }
      this.getPlanetList(stringify(t))
    })
  }
  onChangePage = (page) => {
    debugger
    this.setState({
      offset: page
    }, () => {
      const t = {
      name: this.state.name,
      limit:this.state.limit,
        offset:this.state.offset
      }

      this.getPlanetList(stringify(t));
    })

  }
  async getPlanetList() {
    try {
      this.props.getPlanetsListAction();
      let params = `limit=${this.state.limit}&offset=${this.state.offset}`;
      let PlanetList = await this.SearchService.getPlanetsByName(params);
      this.props.getPlanetsListActionSuccess(PlanetList);
      console.log(PlanetList)
    } catch (err) {
      this.props.getPlanetsListActionFailure(err);
    }
  }
  onChange = event => {
    this.setState({
      status: event.target.value
    });
  }
  renderPlanetList() {
    return this.props.searchPlanet.data.results.map((item, index) => {
      return (
        <tr key={index}>
          <td style={style}>
              {item.name ? item.name : '_'}
          </td>
            <td style={style}>
              {item.population ? item.population : '-'}
            </td>
          <td style={style}>
            {item.diameter ? item.diameter : '_'}
          </td>
          <td style={style}>
            {item.rotation_period ? item.rotation_period : '_'}
          </td>
          <td style={style} >
            {item.orbital_period ? item.orbital_period : '-'}
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div class="container">
        <Navbar />
        {/* <Loader loading={this.state.isLoader}> </Loader> */}
        <Card className="borderNone">
          <CardBody>
            <div className="table-responsive">
              <Table class="table table-bordered table-inverse">
                <thead>
                  <tr>
                    <th width="10%">
                      <Input
                        className="formControl"
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                        placeholder="Planet Name"
                      />
                    </th>

                    <th>
                      
                      <Button
                        id="searchClick"
                        onClick={this.onSearchClick}
                        className="site-button"
                      >
                        Search
                      </Button>
                      <Button
                        id="clearSearch"
                        onClick={this.onClear}
                        className="site-button"
                      >
                        Clear
                      </Button>
                    </th>
                  </tr>
                </thead>
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
