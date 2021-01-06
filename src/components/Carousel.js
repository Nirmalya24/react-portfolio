import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import vmp from "../images/vmp.png";
import covid from "../images/covid.png";
import nodejs from "../images/nodejs.png";

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
          title: "Vegetation Management Application",
          subTitle: "Made using Vue.js for Friends of Discovery Park",
          imgSrc: vmp,
          link: "https://vmpdash.herokuapp.com/",
          github: "https://github.com/Nirmalya24/fodp_vmp",
          selected: false,
        },
        {
          id: 1,
          title: "Nodejs Meetup",
          subTitle: "Mock Node.js meetup website using EJS templates",
          imgSrc: nodejs,
          link: "http://nodejs-roux-meetup.herokuapp.com/",
          github: "https://github.com/Nirmalya24/nodejs-meetup",
          selected: false,
        },
        {
          id: 2,
          title: "COVID-Numbers",
          subTitle: "COVID-19 Tracker in React.js",
          imgSrc: covid,
          link: "https://nirmalya24.github.io/covid-numbers/",
          github: "https://github.com/Nirmalya24/covid-numbers",
          selected: false,
        },
      ],
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
