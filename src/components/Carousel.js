import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "./Card";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.makeItems = this.makeItems.bind(this);
    this.state = {
      items: [
        {
          id: 0,
          title: "Project 1",
          subTitle: "Project 1 subTitle",
          imgSrc: "https://picsum.photos/1000/1600",
          link: "",
          selected: false
        },
        {
          id: 1,
          title: "Project 2",
          subTitle: "Project 2 subTitle",
          imgSrc: "https://picsum.photos/1000/1600",
          link: "",
          selected: false
        },
        {
          id: 2,
          title: "Project 3",
          subTitle: "Project 3 subTitle",
          imgSrc: "https://picsum.photos/1000/1600",
          link: "",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => {
            this.handleCardClick(item.id, e);
          }}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
