import React, { Component } from 'react';
import{
    StatusBar,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import firebaseApp from './firebase_config';
import * as styles from './styles.js';

import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

export default class Main extends Component{

  constructor(props) {
        super(props);
        this.projectsRef = firebaseApp.database().ref("TaskManager/Projects/");
        this.userRef = firebaseApp.database().ref("TaskManager/Users/" + firebaseApp.auth().currentUser.uid);
        this.state = {
            tmp_hnadler: true,
            project: null,
            email: firebaseApp.auth().currentUser.email,
            dataSource: [],
        };
    }

    static navigationOptions = function(props) {
      return {
        title: 'Main screen',
        headerLeft:
        <Icon
          onPress={() => props.navigation.navigate('DrawerOpen')}
          size={50}
          name='menu'
        />
      }
    }

	handleLogOut() {
	firebaseApp.auth().signOut();
	}

    render(){
        return(
            <View style = {styles.container}>
			<Button
			   onPress={() => this.handleLogOut()}
			   title="logout"
			   buttonStyle ={styles.mainButtons}
			 />
            </View>
        );
      }
}
