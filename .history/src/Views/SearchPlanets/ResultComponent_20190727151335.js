import React, { Component } from "react";
import {Row,Col,Label,Card,CardBody} from 'reactstrap'


export class ResultComponent extends Component {
  constructor(props){
    super(props)

  }
  componentWillRecieveProps(nextProps){
    console.log(this.props)
  }
  // renderPlanetList() {
  //   return this.props.searchPlanet.data.results.map((item, index) => {
  //     return (
  //       <tr key={index}>
  //         <td style={style}>{item.id ? item.id : "_"}</td>
  //         <td style={style}>{item.population ? item.population : "-"}</td>
  //         <td style={style}>{item.diameter ? item.diameter : "_"}</td>
  //         <td style={style}>
  //           {item.rotation_period ? item.rotation_period : "_"}
  //         </td>
  //         <td style={style}>
  //           {item.orbital_period ? item.orbital_period : "-"}
  //         </td>
  //       </tr>
  //     );
  //   });
  render() {
    console.log("this,.props....",this.props)
    return (
      <div>
        <Card className="borderNone">
          <CardBody>
            <Row>
              <Col>
                <Label>Name</Label>
              </Col>
              <Col>{this.props.name}</Col>
              <Col>
                <Label>Diameter</Label>
              </Col>
              <Col>{this.props.diameter}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Climate</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Gravity</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Rotation Period</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Orbital Period</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Rotation Period</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Orbital Period</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Population</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Terrain</Label>
              </Col>
              <Col>{this.props}</Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ResultComponent;
