import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    place: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPlace(this.props.match.params.id)
      .then(res => this.setState({ place: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h2>
                <li>{this.state.place.deal_type}</li>
                <li>{this.state.place.deal_city}</li>
                <li>{this.state.place.deal_state}</li>
                <li>{this.state.place.deal_locationName}</li>
                <li>{this.state.place.deal_price}</li>
                <li>{this.state.place.deal_url}</li>

              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Comments</h1>
              <p>
                {this.state.place.deal_comments}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
