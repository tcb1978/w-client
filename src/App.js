import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link,} from 'react-router-dom';
// import logo from './logo.svg';
import ArtistList from './ArtistList';
import ArtistDetail from './ArtistDetail';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={ArtistList} />
        <Route path="/:id" component={ArtistDetail} />
      </Switch>
    </div>
  </Router>
);
export default App;