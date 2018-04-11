import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Places extends Component {
  state = {
    places: [],
    location: "",
    hotel: "",
    hotelPrice: "",
    attraction: "",
    attractionPrice: "",
    comments: ""
  };

  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces = () => {
    API.getPlaces()
      .then(res =>
        this.setState({ places: res.data, location: "", hotel: "", hotelPrice: "", attraction: "", attractionPrice: "", comments: "" })
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.location && this.state.hotel && this.state.hotelPrice && this.state.attraction && this.state.attractionPrice && this.state.comments) {
      API.savePlace({
        location: this.state.location,
        hotel: this.state.hotel,
        hotelPrice: this.state.hotelPrice,
        attraction: this.state.attraction,
        attractionPrice: this.state.attractionPrice,
        comments: this.state.comments
      })
        .then(res => this.loadPlaces())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Location that have been visited</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <Input
                value={this.state.hotel}
                onChange={this.handleInputChange}
                name="hotel"
                placeholder="hotel (Optional)"
              />
              <Input
                value={this.state.hotelPrice}
                onChange={this.handleInputChange}
                name="hotelPrice"
                placeholder="Hotel price (Optional)"
              />
              <Input
                value={this.state.attraction}
                onChange={this.handleInputChange}
                name="attraction"
                placeholder="Attraction (Optional)"
              />
              <Input
                value={this.state.attractionPrice}
                onChange={this.handleInputChange}
                name="attractionPrice"
                placeholder="Attraction Price (Optional)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (Optional)"
              />
              <FormBtn
                disabled={!(this.state.location)}
                onClick={this.handleFormSubmit}
              >
                Submit Place
              </FormBtn>
            </form>
          </Col>
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
                        {place.location}
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
        </Row>
      </Container>
    );
  }
}

export default Places;
