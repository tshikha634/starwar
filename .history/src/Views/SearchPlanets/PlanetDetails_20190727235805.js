import React, { Component } from "react";
// import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import { Input, Row, Col, Label } from "reactstrap";
// import {
//   getPlanetsListAction,
//   getPlanetsListActionSuccess,
//   getPlanetsListActionFailure
// } from "../../Common/actions/searchPlanetsActions";
// import SearchService from "../../Services/searchPlanets/searchPlanets";
// import { connect } from "react-redux";

export class PlanetDetails extends Component {
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
          //  this.SearchService = new SearchService();
          //  this.onChangePage = this.onChangePage.bind(this);
          //  this.getPlanetList = this.getPlanetList.bind(this);
          //  this.onSearchClick = this.onSearchClick.bind(this);
          //  this.onClear = this.onClear.bind(this);
          //  this.onChange = this.onChange.bind(this);
           this.renderPlanetList = this.renderPlanetList.bind(this);
         }
         componentDidMount() {
           // const RecPaymentSetupId = this.props.location
           //   ? parse(this.props.location.search).RecPaymentSetupId
           //   : null;
           console.log(this.props);
         }

         renderPlanetList() {
           debugger;
           return this.props.searchPlanet.data.results.map(
             (item, index) => {
               return (
                 <ul>
                   <li key={item.index} className="list">
                     <div>
                       <Row>
                         <Col>
                           <Label>Name</Label>
                         </Col>
                         <Col>{item && item.name ? item.name : ""}</Col>
                         <Col>
                           <Label>Diameter</Label>
                         </Col>
                         <Col>
                           {item && item.diameter ? item.diameter : ""}
                         </Col>
                       </Row>
                       <Row>
                         <Col>
                           <Label>Climate</Label>
                         </Col>
                         <Col>
                           {item && item.climate ? item.climate : ""}
                         </Col>
                         <Col>
                           <Label>Gravity</Label>
                         </Col>
                         <Col>
                           {item && item.gravity ? item.gravity : ""}
                         </Col>
                       </Row>
                       <Row>
                         <Col>
                           <Label>Rotation Period</Label>
                         </Col>
                         <Col>
                           {item && item.rotation_period
                             ? item.rotation_period
                             : ""}
                         </Col>
                         <Col>
                           <Label>Orbital Period</Label>
                         </Col>
                         <Col>
                           {item && item.orbital_period
                             ? item.orbital_period
                             : ""}
                         </Col>
                       </Row>
                       <Row>
                         <Col>
                           <Label>Population</Label>
                         </Col>
                         <Col>
                           {item && item.population
                             ? item.population
                             : ""}
                         </Col>
                         <Col>
                           <Label>Terrain</Label>
                         </Col>
                         <Col>
                           {item && item.terrain ? item.terrain : ""}
                         </Col>
                       </Row>
                     </div>
                   </li>
                 </ul>
               );
             }
           );
         }
         render() {
           console.log(
             "this.props.searchPlanet.data.results[1].population",
             this.props.searchPlanet.data
           );
           return (
             <div>
               <Navbar />
               {/* <Loader loading={this.state.isLoader}> </Loader> */}
               {/* <Card className="borderNone"> */}
               {/* <CardBody> */}
               <div className="table">
                 <Row>
                   <Col sm={{ size: 4, offset: 6 }}>
                     <Input
                       className="formControl"
                       type="text"
                       // id="name"
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
                 {/* <ResultComponent> */}
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
               {/* </CardBody> */}
               {/* </Card> */}
             </div>
           );
         }
       }

// SearchPlanets.propTypes = {
//   getPlanetsListAction: PropTypes.func.isRequired,
//   getPlanetsListActionSuccess: PropTypes.func.isRequired,
//   history: PropTypes.func
// };

// SearchPlanets.defaultProps = {
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

export default PlanetDetails;

