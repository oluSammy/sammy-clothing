import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shoppage/shop.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import SignInAndSignUpPage from './components/pages/sign-in-and-and-sign-up-page/sign-in-and-sign-up.component'
import './components/pages/homepage/homepage.styles.scss';
import {setCurrentUser} from './redux/user/user.actions'




class App extends React.Component{
 

  componentDidMount(){
    const {setCurrentUser} = this.props;

    auth.onAuthStateChanged(async user=>{
      if(user){
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id: snapshot.id, 
              ...snapshot.data()
            })          
        });  
      }else{
        setCurrentUser(user);
      }
      // 
      // console.log(user);
    })
  }

  render(){
    return (
      <div className="App">
        {/* <Homepage/> */}
        <Header/>
        <Switch>
          <Route exact path='/' component ={Homepage}/>          
          <Route path='/shop' component ={ShopPage}/>
          <Route path='/signin' component ={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps )(App);
