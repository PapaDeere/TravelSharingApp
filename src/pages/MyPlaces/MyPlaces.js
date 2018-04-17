import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

import DeleteBtn from "../../components/DeleteBtn";

class MyPlaces extends Component {
  state = {
    places: [],
    deal_type: "",
    deal_city: "",
    deal_state: "",
    deal_locationName: "",
    deal_price: "",
    deal_url: "",
    deal_comments: ""
  };

  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces = () => {
    API.getPlaces()
      .then(res =>
        this.setState({ places: res.data, deal_type: "", deal_city: "", deal_state: "", deal_locationName: "", deal_price: "", deal_url: "", deal_comments: "" })
      )
      .catch(err => console.log(err));
  };

  deletePlace = id => {
    API.deletePlace(id)
      .then(res => this.loadPlaces())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Places On My List</h1>
          </Jumbotron>
          {this.state.places.length ? (
            <List>
              {this.state.places.map(place => (
                <ListItem key={place._id}>
                  <Link to={"/places/" + place._id}>
                    <strong>
                      {place.deal_type}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deletePlace(place._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Container>
    );
  }
}

export default MyPlaces;