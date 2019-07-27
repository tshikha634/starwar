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
    return (
      <div>
        <Card className="borderNone">
          <CardBody>
            <Row>
              <Col>
                <Label>Name</Label>
              </Col>
              <Col>{this.props}</Col>
              <Col>
                <Label>Diameter</Label>
              </Col>
              <Col>{this.props}</Col>
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
