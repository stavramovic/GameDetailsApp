import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Action from './Pages/Action';
import Racing from './Pages/Racing';
import RPG from './Pages/RPG';
import Shooter from './Pages/Shooter';
import Sports from './Pages/Sports';
import Details from './Pages/Details';

import './sass/main.scss';



class App extends Component {
  render() {
    return (
      <>
        <Route exact path = '/' component={Homepage} />
        <Route exact path = '/action' component={Action} />
        <Route exact path = '/racing' component={Racing} />
        <Route exact path = '/rpg' component={RPG} />
        <Route exact path = '/shooter' component={Shooter} />
        <Route exact path = '/sports' component={Sports} />
        <Route path = '/details/:gameId' component={Details} />
      </>
    );
  }
}



export default App;
