import React from 'react'
import { NavLink } from "react-router-dom";


const  NavBar = () => {

    return (
      <div>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/about'>
          About
        </NavLink>
        <NavLink to='/art'>
          Art
        </NavLink>
        <NavLink to='/movies'>
          Movies
        </NavLink>
      </div>
    )
}

const styles = {
  active: {
    color: 'steelblue',
  }
}


// const NavBar = () => {

//   return (
//     <div inverted>
//       <Link to="/">
//         <div>
//           Home
//         </div>
//       </Link>

//       <Link to="/about">
//         <div>
//           About
//         </div>
//       </Link>

//       <Link to="/art">
//         <div>
//           Art
//         </div>
//       </Link>

//       <Link to="/movies">
//         <div>
//           Favorite Movies
//         </div>
//       </Link>
//     </div>
//   );
// }

export default NavBar;