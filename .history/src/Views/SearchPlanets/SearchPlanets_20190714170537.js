import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar"
import { Input, Row, Col, CardBody, Table, Card, Button } from "reactstrap";
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";
import { ToastsContainer, ToastsStore } from "react-toasts";

const style = {
  "word-break": "break-all",
  "align-items": "center"
};

export class SearchPlanets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: false,
      // search: {},
      // limit: 10,
      // offset: 1,
      // permission: '',
    };
    // bind context to methods
    this.SearchService = new SearchService();
    // this.onChangePage = this.onChangePage.bind(this)
    this.getPlanetList = this.getPlanetList.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderPlanetList = this.renderPlanetList.bind(this);
  }
  componentDidMount() {
    // const fields = {
    //   // InvoiceNumber: this.state.InvoiceNumber,
    //   // InvoiceId: this.state.InvoiceId,
    //   // FirstName: this.state.FirstName,
    //   // TotalAmount: this.state.TotalAmount,
    //   // status: this.state.status,
    //   // DueDate: this.state.DueDate,
    //   // offset: this.state.offset,
    //   // limit: this.state.limit,
    //   // MerchantID: this.props.MerchantId,
    //   // createdDateTimeSort: this.state.createdDateTimeSort
    // };
    // const RecPaymentSetupId = this.props.location ?
    //   parse(this.props.location.search).RecPaymentSetupId
      // : null
    this.getPlanetList();
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

  onSearchClick(){
this.renderPlanetList()
  }

  onClear(){}
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
