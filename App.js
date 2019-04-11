import firebaseApp from './src/firebase_config';
import Login from './src/login';
import Main from './src/main';

import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
   constructor(props){
     super(props);
     this.state={
       user: null
     };
   }

  componentDidMount(){
      firebaseApp.auth().onAuthStateChanged(user => {
          if(user){
              this.setState({user});

          }else{
              this.setState({user: null});
          }
      });
    }

  render(){
    return this.state.user ? <DrawerStack/> : <Login/>;
  }
}

  export const Root = StackNavigator({
    DrawerStack: {screen: Main},
  })

  export const LoginSreen = StackNavigator({
      LoginSreen: {screen: Login },
  })

  export const DrawerStack = DrawerNavigator({
    root: {screen: Root},
  })
