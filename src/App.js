import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shoppage/shop.component';
import './components/pages/homepage/homepage.styles.scss';
import Header from './components/header/header.component';



const SammyPage = ()=>(
  <div>
    <h1>Sammy Page</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
      <Header/>
      <Switch>
        <Route exact path='/' component ={Homepage}/>
        <Route exact path='/sammy-page' component ={SammyPage}/>
        <Route path='/shop' component ={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
