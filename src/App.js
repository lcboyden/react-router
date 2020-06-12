import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './About/About';
import NavBar from'./components/NavBar';
import Art from "./components/Art/Art";
import NoMatch from './components/NoMatch';
import Movies from './components/Movies';


function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/movies" component={Movies} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
