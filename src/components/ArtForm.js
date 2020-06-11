import React from "react";
import { Form, } from "semantic-ui-react";

class ArtForm extends React.Component {
  state = { artist: "", title: "", date: ""};

  componentDidMount() {
    if (this.props.id)
    this.setState({ artist: this.props.artist, title: this.props.title, date: this.props.date, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state });
      this.props.toggleEdit()
    } else {
      this.props.add(this.state);
    }
    this.setState( { artist: "", title: "", date: "", });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            placeholder="artist"
            label="artist"
            name="artist"
            onChange={this.handleChange}
            value={this.state.artist}
          />
          <Form.Input 
            placeholder="title"
            label="title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Input
            placeholder="date"
            label="date"
            name="date"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default ArtForm;