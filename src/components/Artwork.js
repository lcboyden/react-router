import React from "react";
import { List, Button, Header, Icon } from "semantic-ui-react";
import ArtForm from "./ArtForm";

class Artwork extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
      <List 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between" 
        }}>
        { this.state.editing ? 
          <ArtForm 
            { ...this.props} 
            edit={this.props.edit}
            toggleEdit={this.toggleEdit}
            remove={this.props.remove}
          />
          : 
          <List.Item>
            <p>{this.props.artist}, {this.props.title }, {this.props.date } </p>
          </List.Item>
        }

        <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red" onClick={() => this.props.remove(this.props.artwork.id)}>
            <Icon name="trash" />
          </Button>
        </div>
      </List>
    )
  }
};

export default Artwork;