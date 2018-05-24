import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { rebase }  from './config/constants';
import {loginWithGoogle, logout} from './helpers/auth';
import MainContainer from './components/MainContainer';

class App extends Component {
  state = {
    user:{},
    _authed: false,
    _loading: true,
  };

  componentDidMount() {
    rebase.initializedApp.auth().onAuthStateChanged((user) => {
        if (user) {
         this.setState({
            _authed: true, 
            _loading: false, 
            uid: user.uid,
            photo: user.photoURL,
            name: user.displayName,
            user: user
          });              
        } else {
            this.setState({
              _authed: false, 
              _loading: false, 
              uid: null})
        }
    })
}

  authentication = () => {
    if (!this.state._authed) {
      return (
        <div>
          <Header
            authlink={()=>loginWithGoogle()} 
            title="ProDev Speaker Prep"
            profilePic=""
            link2="Login with Google"
          />
          <h2>You're NOT Logged In!</h2>
        </div>
      )
    }else{
      return (
        <div>
          <Header
            authlink={()=>logout()} 
            title="ProDev Speaker Prep"
            profilePic={this.state.photo}
            link2="Log Out"
          />
          <MainContainer />
        </div>
      )
  }
};

  render() {
    return (
      <div>
        {this.authentication()}
      </div>
    );
  }
}

export default App;
