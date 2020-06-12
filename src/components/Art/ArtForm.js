import React, { useState } from "react";
import { FormInput } from "../customHook/FormInput";
import SubmitButton from "../SubmitButton";
import Form from "../Form";

export default function ArtForm({ add }) {
  const artist = FormInput("", "artist");
  const title = FormInput("", "title");
  const date = FormInput("", "date");

  function handleSubmit(e) {
    add({ id: `${Math.random()}`, artist: artist.value, title: title.value, date: date.value });
  }
  return (
    <Form header="Add an Artwork" onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <li style={styles.formLabel}>Artist</li>
        <input {...artist} />
        <li style={styles.formLabel}>Title</li>
        <input {...title} />
        <li style={styles.formLabel}>Date</li>
        <input {...date} />
      </div>
      <SubmitButton />
    </Form>
  );
}

const styles = {
  formGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: "10px 0",
  },
  formLabel: {
    fontWeight: "300",
    fontSize: "15px",
    margin: "0 0 5px 0",
  },
};
// class ArtForm extends React.Component {
//   state = { artist: "", title: "", date: ""};

//   componentDidMount() {
//     if (this.props.id)
//     this.setState({ artist: this.props.artist, title: this.props.title, date: this.props.date, });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.props.id) {
//       this.props.edit({ id: this.props.id, ...this.state });
//       this.props.toggleEdit()
//     } else {
//       this.props.add(this.state);
//     }
//     this.setState( { artist: "", title: "", date: "", });
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value, });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div widths="equal">
//           <input
//             placeholder="artist"
//             label="artist"
//             name="artist"
//             onChange={this.handleChange}
//             value={this.state.artist}
//           />
//           <input
//             placeholder="title"
//             label="title"
//             name="title"
//             onChange={this.handleChange}
//             value={this.state.title}
//           />
//           <input
//             placeholder="date"
//             label="date"
//             name="date"
//             onChange={this.handleChange}
//             value={this.state.date}
//           />
//           <button color="green">Submit</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default ArtForm;