import React, { Component } from "react";
import { setPlanetData } from "../../Common/actions/setPlanetDataActions";
import PropTypes from "prop-types"
// import Planets from "./Planets";
import {connect} from "react-redux"

export class PlanetDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderPlanetDetails = () => {
    
    // let arr = this.props.searchPlanet.data.results
    // for(var i = 0;i<= arr.length;i++){
    //   console.log()
    // }
    
      // return this.props.searchPlanet.data.results.map((item, index) => {
      //    if (this.props.searchPlanet.data.results.indexOf(item) != -1) {
      //     //  if()
      //       return <Planets index={index} value={item} />
            
      //   } else {
      //       return null
      //   } 
      // });
  };

  render() {
    return (
    <div>
    {this.renderPlanetDetails()}
    </div>
    );
  }
}

// export default PlanetDetails;
PlanetDetails.propTypes = {
  setPlanetData: PropTypes.func.isRequired,
  history: PropTypes.func
};

PlanetDetails.defaultProps = {
  history: () => null
};

const mapStateToProps = state => ({
  setData: state.planetDetails
});

// const mapDispatchToProps = dispatch => ({
//   setData: id => dispatch(setPlanetData(id))
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(PlanetDetails);
