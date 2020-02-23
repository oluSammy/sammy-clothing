import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';
import './components/pages/homepage/homepage.styles.scss';

const HatsPage = ()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
);

const SammyPage = ()=>(
  <div>
    <h1>Sammy Page</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Switch>
        <Route exact path='/' component ={Homepage}/>
        <Route exact path='/sammy-page' component ={SammyPage}/>
        <Route path='/hats' component ={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
