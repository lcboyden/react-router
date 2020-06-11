import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from'./components/NavBar';
import Art from "./components/Art";
import NoMatch from './components/NoMatch';
import Movies from './components/Movies';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/art" component={Art} />
        <Route exact path="/movies" component={Movies} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
