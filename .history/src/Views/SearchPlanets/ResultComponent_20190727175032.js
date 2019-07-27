import React, { Component } from "react";
import {Row,Col,Label,Card,CardBody} from 'reactstrap'


export class ResultComponent extends Component {
  constructor(props){
    super(props)

  }
  componentWillRecieveProps(nextProps){
    console.log(this.props)
  }
 
  render() {
    debugger
    console.log("this,.props....",this.props)
    return (
      <div>
        <Card className="borderNone">
          <CardBody>
            <Row>
              <Col>
                <Label>Name</Label>
              </Col>
              <Col>{this.props && this.props.value.name}</Col>
              <Col>
                <Label>Diameter</Label>
              </Col>
              <Col>{this.props && this.props.value.diameter}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Climate</Label>
              </Col>
              <Col>{this.props && this.props.value.climate}</Col>
              <Col>
                <Label>Gravity</Label>
              </Col>
              <Col>{this.props && this.props.gravity}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Rotation Period</Label>
              </Col>
              <Col>{this.props && this.props.rotation_period}</Col>
              <Col>
                <Label>Orbital Period</Label>
              </Col>
              <Col>{this.props && this.props.orbital_period}</Col>
            </Row>
            <Row>
              <Col>
                <Label>Population</Label>
              </Col>
              <Col>{this.props && this.props.population}</Col>
              <Col>
                <Label>Terrain</Label>
              </Col>
              <Col>{this.props && this.props.terrain}</Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ResultComponent;
