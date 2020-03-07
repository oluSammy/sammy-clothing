import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shoppage/shop.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';
import SignInAndSignUpPage from './components/pages/sign-in-and-and-sign-up-page/sign-in-and-sign-up.component'
import './components/pages/homepage/homepage.styles.scss';



const SammyPage = ()=>(
  <div>
    <h1>Sammy Page</h1>
  </div>
)


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  render(){
    return (
      <div className="App">
        {/* <Homepage/> */}
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component ={Homepage}/>
          <Route exact path='/sammy-page' component ={SammyPage}/>
          <Route path='/shop' component ={ShopPage}/>
          <Route path='/signin' component ={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
};

export default App;
