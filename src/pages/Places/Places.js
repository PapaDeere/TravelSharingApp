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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.deal_type && this.state.deal_city && this.state.deal_state && this.state.deal_locationName && this.state.deal_price && this.state.deal_url && this.state.deal_comments) {
      API.savePlace({
        deal_type: this.state.deal_type,
        deal_city: this.state.deal_city,
        deal_state: this.state.deal_state,
        deal_locationName: this.state.deal_locationName,
        deal_price: this.state.deal_price,
        deal_url: this.state.deal_url,
        deal_comments: this.state.deal_comments
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
                value={this.state.deal_type}
                onChange={this.handleInputChange}
                name="deal_type"
                placeholder="Type of deal (required)"
              />
              <Input
                value={this.state.deal_city}
                onChange={this.handleInputChange}
                name="deal_city"
                placeholder="City (required)"
              />
              <Input
                value={this.state.deal_state}
                onChange={this.handleInputChange}
                name="deal_state"
                placeholder="State (required)"
              />
              <Input
                value={this.state.deal_locationName}
                onChange={this.handleInputChange}
                name="deal_locationName"
                placeholder="Location Name (required)"
              />
              <Input
                value={this.state.deal_price}
                onChange={this.handleInputChange}
                name="deal_price"
                placeholder="Price (optional)"
              />
              <Input
                value={this.state.deal_url}
                onChange={this.handleInputChange}
                name="deal_url"
                placeholder="URL to deal (optional)"
              />
              <TextArea
                value={this.state.deal_comments}
                onChange={this.handleInputChange}
                name="deal_comments"
                placeholder="Comments (optional)"
              />
              <FormBtn
                disabled={!(this.state.deal_type)}
                onClick={this.handleFormSubmit}
              >
                Submit Place
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
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
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Places;
