import React, {useState} from "react";
import Artwork from "./Artwork";
import ArtForm from "./ArtForm";

export default function Art() {
  const [artworks, setArtworks] = useState( 
    [
      { id: 1, artist: "John Ó Barrdáin", title: "Domnach Airgid", date: "6th c. - 14th c."},
      { id: 2, artist: "Botticelli", title: "Primavera", date: "1478" },
      { id: 3, artist: "Daniel Gardner", title: "The Three Witches from Macbeth", date: "1775"},
      { id: 4, artist: "Monet", title: "Le jardin de l'artiste à Giverny", date: "1900" },
      { id: 5, artist: "Corita Kent", title: "LOOKLove is here to stay and that's enough", date: "1965" },
    ]
  );

  // function newArtwork(tombstoneInfo) {
  //   const artwork = { id: `Math.random()`, ...tombstoneInfo};
  //   const newArtworks = [artwork, ...artworks];
  // }

  function addArtwork(newArtwork) {
    setArtworks([newArtwork, ...artworks]);
  }
  function editArtwork(newArtwork) {
    setArtworks([newArtwork, ...artworks]);
  }

  const renderArtworks = () =>
    artworks.map((a) => 
      <Artwork 
        edit={editArtwork} 
        key={a.id}
        {...a} 
      />
    );

  return (
    <div>
      <h1>Artworks</h1> 
           <ArtForm add={addArtwork} /> 
          {renderArtworks()}
    </div>
  );
}
  // state = {
  //   artworks: [
  //     { id: 1, artist: "John Ó Barrdáin", title: "Domnach Airgid", date: "6th c. - 14th c."},
  //     { id: 2, artist: "Botticelli", title: "Primavera", date: "1478" },
  //     { id: 3, artist: "Daniel Gardner", title: "The Three Witches from Macbeth", date: "1775"},
  //     { id: 4, artist: "Monet", title: "Le jardin de l'artiste à Giverny", date: "1900" },
  //     { id: 5, artist: "Corita Kent", title: "LOOKLove is here to stay and that's enough", date: "1965" },
  //   ],
  

//   addArtwork = (tombstoneInfo) => {
//     const artwork = { id: `Math.random()`, ...tombstoneInfo};
//     const newArtworks = [artwork, ...this.state.artworks];
//     this.setState({
//       artworks: newArtworks,
//     });
//   };

//   editArtwork = (tombstoneInfo) => {
//     const artworks = this.state.artworks.map( a => {
//       if (tombstoneInfo.id === a.id)
//         return tombstoneInfo;
//       return a;
//     });
//     this.setState({ artworks });
//   }

//   removeArtwork = (id) => {
//     const artworks = this.state.artworks.filter( a => {
//       if (a.id !== id)
//         return a
//     });
//     this.setState({ artworks: [...artworks], });
//   }

//   renderArtworks = () => {
//     return this.state.artworks.map( artwork => 
//     <Artwork 
//       key={artwork.id} 
//       {...artwork} 
//       edit={this.editArtwork}
//       remove={this.removeArtwork} 
//       artwork={artwork}
//       />)
//   };
  
//   render () {
//     return (
//         <div>
//           <h1>Artworks</h1> 
//           <ArtForm 
//             add={this.addArtwork}
//           />
//           {this.renderArtworks()}
//         </div>
//     )
//   }
// }
