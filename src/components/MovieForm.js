import React from 'react'
import { Form, Rating} from 'semantic-ui-react'


const RatingStar = () => (
  <Rating icon='star' defaultRating={3} maxRating={5} />
)

class MovieForm extends React.Component {
  state = {title: "", rating: "", comments: ""}

  componentDidMount() {
    if (this.props.id) {
      this.setState({
        title: this.props.title,
        rating: this.props.RatingStar,
        comments: this.props.comments,
      })
    }
  }

  handleSubmit = (e) => {
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state})
      this.props.toggle()
    }
    else {
      this.props.add(this.state)
    }

    this.setState({
      title: "",
      rating: "",
      comments: "",
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder={"Enter Title"}
            label={"Title"}
            name={"title"}
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Input
            placeholder={"Enter Rating"}
            label={RatingStar}
            name={"rating"}
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Form.Input
            placeholder={"Enter Comments"}
            label={"Comment"}
            name={"comment"}
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default MovieForm