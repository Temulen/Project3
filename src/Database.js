import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  ListView,
  Alert,
  Image,
  Text
} from 'react-native';
import firebase from 'firebase';
export default class Index extends Component<Props> {

    componentWillMount() {
      var config = {
        apiKey: "AIzaSyCkbAhbA_HevbNGa0Kb6Yb2jbLi_f_kefw",
        authDomain: "database-9ea1a.firebaseapp.com",
        databaseURL: "https://database-9ea1a.firebaseio.com",
        projectId: "database-9ea1a",
        storageBucket: "",
        messagingSenderId: "418496693070"
      };
      firebase.initializeApp(config);

      firebase.database().ref('users/001').once('value', (data) => {
        const user = data.toJSON();
      })


     }

  render() {

    return (

        <View style={styles.MainContainer}>

          <Text>Welcome</Text>
          (user)
        </View>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 5,
  paddingTop: (Platform.OS === 'ios') ? 20 : 0,

  },

  imageViewContainer: {
    flex: 1,
  // justifyContent: 'center',
  // width: '100%',
  // height: '100%',
  padding: 100,
  margin: 50,
  // borderRadius : 10

  },

  textViewContainer: {
    justifyContent: 'center',
    // textAlignVertical:'center',
    // width:'50%',
    textAlign: 'center',
    padding:20,
    fontSize: 20

  }
});
