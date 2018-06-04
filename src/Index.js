import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  ListView,
  Alert,
  Image
} from 'react-native';
import {YellowBox} from 'react-native';
console.disableYellowBox = true;

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class Index extends Component<Props> {
   constructor(props) {
     super(props);
     this.state = {
       isLoading: true
     }
   }

   GetItem (flower_name) {

   Alert.alert(flower_name);

   }

    componentDidMount() {

       return fetch('http://192.168.2.58/database/List.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           },
           function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: 1,
             width: "100%",
             backgroundColor: "#000",
           }}
         />
       );
     }
  render() {

    if (this.state.isLoading) {
       return (
         <View style={{flex: 1, paddingTop: 20}}>
           <ActivityIndicator />
         </View>
       );
     }
    return (

       <ListView

         dataSource={this.state.dataSource}

         renderSeparator= {this.ListViewItemSeparator}

         renderRow={(rowData) =>

        <View style={{flex:1}}>

          <Image source = {{ uri: rowData.image_url }} style={styles.imageViewContainer} />

          <Text onPress={this.GetItem.bind(this, rowData.name)} style={styles.textViewContainer} >{rowData.name}</Text>

        </View>
         }
       />

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
