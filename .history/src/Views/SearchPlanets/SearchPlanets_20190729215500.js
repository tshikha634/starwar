import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import { Input, CardBody, Table, Card, Row, Col, Label } from "reactstrap";
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";
import PlanetDetails from "./PlanetDetails";
import Modal from "react-awesome-modal";
import Loader from "../../Common/Utilities/LoaderComponent";

export class SearchPlanets extends Component {
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
      climate: "",
      isLoader : false 
    };
    // bind context to methods
    this.SearchService = new SearchService();
    this.onChangePage = this.onChangePage.bind(this);
    this.getPlanetList = this.getPlanetList.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderPlanetList = this.renderPlanetList.bind(this);
    this.redirectTOCreate = this.redirectTOCreate.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.setState({
      isLoader : true
    });
    try {
      this.props.getPlanetsListAction();
      let params = `=${this.state.name}&page=${this.state.offset}`;
      let PlanetList = await this.SearchService.getPlanetsByName(params);
      this.props.getPlanetsListActionSuccess(PlanetList);
      this.setState({
        isLoader : false
      });
    } catch (err) {
      this.props.getPlanetsListActionFailure(err);
    }
  }
  onChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  redirectTOCreate = (data) => {
    this.setState({
      popupdata: data
    }, () => {
      this.setState({
        showPopup: true,
      });
    });
  };

  closeModal = () => {
    this.setState({
      showPopup: false,
    });
  };


  renderPlanetList() {
    return this.props.searchPlanet.data.results.map((item, index) => {
      return (
        <div>
          <ul className="list">
            <li key={item.name}>
              <div>
                <Row key={index}>
                  <Col>
                    {item.name ? (
                      <span
                        title="name"
                        className="hyperlink"
                        href=""
                        onClick={() => this.redirectTOCreate(item)}
                      >
                        {item.name}
                      </span>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </Col>
                </Row>
                {(item.population(index + 1) > item.population(index)){
<div></div>
                } ? <div></div> : null}
              </div> 
            </li>
            
          </ul>
          {/*  */}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <Loader className="Loader" loading={this.state.isLoader} error={false}>
          {" "}
        </Loader>
        <Navbar />
        <Card className="cardBorder">
          <CardBody>
            <div className="table">
              <Row>
                <Col>
                  <Input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
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
              {this.props.searchPlanet.data.results &&
              this.props.searchPlanet.data.results.length ? (
                this.renderPlanetList()
              ) : (
                <p>No result found.</p>
              )}{" "}
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
            <Modal
              visible={this.state.showPopup}
              width="800"
              height="300"
              effect="fadeInDown"
              onClickAway={() => this.closeModal()}
            >
              <PlanetDetails
                showPopup={this.state.showPopup}
                searchPlanet={this.state.popupdata}
              />
            </Modal>
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
  getPlanetsListActionFailure: err =>
    dispatch(getPlanetsListActionFailure(err)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPlanets);