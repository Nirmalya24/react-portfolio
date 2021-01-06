import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as emailjs from "emailjs-com";

import Content from "../components/Content";
import Hero from "../components/Hero";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
      buttonText: "Send Message",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true, buttonText: "Sending..." });
    const { name, email, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "contact@nirmalya.me",
      message: message,
    };

    emailjs
      .send(
        "service_zumtbjw",
        "template_8k0m4ei",
        templateParams,
        "user_7gRoPqiTX4LuCGHLMkh4o"
      )
      .then((res) => {
        this.setState({
          disabled: false,
          emailSent: true,
          buttonText: "Send another message",
        });
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
          buttonText: "Send Message",
        });
      });
    this.setState({
      disabled: true,
      emailSent: true,
    });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              {this.state.buttonText}
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
