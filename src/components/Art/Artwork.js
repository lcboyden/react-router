import React from "react";
import ArtForm from "./ArtForm";

export default function Artwork({ artist, title, date, editArtwork }) {
  return (
    <div>
      <ul>
        <li>{artist}, {title}, {date}</li>
      </ul>
      <ArtForm edit={editArtwork} />
    </div>
  );
}

// class Artwork extends React.Component {
//   state = { editing: false, };

//   toggleEdit = () => this.setState({ editing: !this.state.editing, });

//   render() {
//     return (
//       <div
//           style={{ 
//             display: "flex", 
//             alignItems: "center", 
//             justifyContent: "space-between" 
//         }}>
//         { this.state.editing ? 
//           <ArtForm 
//             { ...this.props} 
//             edit={this.props.edit}
//             toggleEdit={this.toggleEdit}
//             remove={this.props.remove}
//           />
//           : 
//           <div>
//             <p>{this.props.artist}, {this.props.title }, {this.props.date } </p>
//           </div>
//         }

//         <div>
//           <Button icon color="blue" onClick={this.toggleEdit}>
//             <div name="pencil" />
//           </Button>
//           <Button icon color="red" onClick={() => this.props.remove(this.props.artwork.id)}>
//             <div name="trash" />
//           </Button>
//         </div>
//       </div>
//     )
//   }
// };

// export default Artwork;