import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import People from './components/People/People';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Images from './components/Images/Images';

class App extends React.Component {
   render(params) {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/people" component={People} />
          <Route path="/images" component={Images} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
