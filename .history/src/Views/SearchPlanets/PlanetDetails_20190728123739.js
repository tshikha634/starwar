import React, { Component } from "react";
// import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { stringify } from "query-string";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types"
import { Input, Row, Col, Label } from "reactstrap";
import {
  getPlanetsListAction,
  getPlanetsListActionSuccess,
  getPlanetsListActionFailure
} from "../../Common/actions/searchPlanetsActions";
import SearchService from "../../Services/searchPlanets/searchPlanets";
import { connect } from "react-redux";

export class PlanetDetails extends Component {
         constructor(props) {
           super(props);
         }

         renderPlanetDetails = () => {
           debugger;
           return this.props.searchPlanet.data.results.map(
             (item, index) => {
               return (
                 <div>
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
                   {/*  */}
                 </div>
               );
             }
           );
         }
         render() {
           console.log("this.props", this.props.searchPlanet.data);
           return (
             <div>
               { this.renderPlanetDetails() }
              
             </div>
           );
         }
       }
       

// export default PlanetDetails;

PlanetDetails.propTypes = {
  getPlanetsListAction: PropTypes.func.isRequired,
  getPlanetsListActionSuccess: PropTypes.func.isRequired,
  history: PropTypes.func
};

PlanetDetails.defaultProps = {
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
)(PlanetDetails);

