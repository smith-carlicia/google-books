import React from 'react';
import  Search from './pages/Search/Search';
import Saved from './pages/Saved/saved';
import Navigation from './components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/search", "/saved"]}>
            <Search />
          </Route>
          <Route exact path="/books/:id">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
