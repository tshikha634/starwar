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
    this.setState({
      limit:10,
      offset: 1
    }, () => {
      const t = {
        diameter: this.state.diameter,
        name: this.state.name,
        orbital_period: this.state.orbital_period,
        population: this.state.population,
        rotation_period: this.state.rotation_period,
        limit:this.state.limit,
        offset:this.state.offset
      }
      this.getPlanetList(stringify(t))
    })

  }

  onClear() {
    this.setState({
      limit: 10,
      offset: 1,
      diameter:"",
      name:"",
      orbital_period:"",
      population:"",
      rotation_period:""
    }, () => {
      const t = {
        diameter: this.state.diameter,
      name: this.state.name,
      orbital_period: this.state.orbital_period,
      population: this.state.population,
      rotation_period: this.state.rotation_period,
      limit:this.state.limit,
        offset:this.state.offset
      }
      this.getPlanetList(stringify(t))
    })
  }
  onChangePage = (page) => {
    this.setState({
      offset: page
    }, () => {
      const t = {
        diameter: this.state.diameter,
      name: this.state.name,
      orbital_period: this.state.orbital_period,
      population: this.state.population,
      rotation_period: this.state.rotation_period,
      limit:this.state.limit,
        offset:this.state.offset
      }

      this.getPlanetList(stringify(t));
    })

  }
  async getPlanetList(params) {
    // const MerchantID = this.props.MerchantId
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
                        id="InvoiceNumber"
                        name="InvoiceNumber"
                        onChange={this.onChange}
                        value={this.state.InvoiceNumber}
                        placeholder="Number"
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
                    <th>PLANET NAME</th>
                    <th>PLANET POPULATION</th>
                    <th>PLANET DIAMETER</th>
                    <th>PLANET ROTATION PERIOD</th>
                    <th>PLANET ORBITAL PERIOD</th>
                   
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
              <Pagination
                items={this.props.searchPlanet.data.results}
                totalItemsCount={this.props.searchPlanet.data.count}
                activePage={this.state.offset}
                onChange={this.onChangePage}
                pageRangeDisplayed={5}
                itemsCountPerPage={this.state.limit}
              />
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
