import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, Tab, Tabs, ScrollableTab } from 'native-base';
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  ListView,
  Alert,
  Image,
  TouchableHighlight,
  ImageBackground,
  ScrollView
} from 'react-native';
import {YellowBox} from 'react-native';
console.disableYellowBox = true;

import mealData from './data/mealData'
export default class Meal extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const TabId = params ? params.TabId : null;
    return (
      <Container style={{...Platform.select({
        ios: {
          paddingTop: 20,
        },
        android: {
          paddingTop: 0,
        },
      }),}}>
        <Header style={{backgroundColor: '#fff'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Button transparent large onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                  source={require('./assets/logo2.png')}
                  style={{width: '100%', height: '100%',resizeMode: 'contain',marginBottom: 10}}
              />
            </Button>
          </Body>
          <Right />
        </Header>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Room', {  TabId: 0 })}
                  // style={{backgroundColor: 'white', borderRadius: 100/2, width: 100, height: 100, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
                >
                  <Icon type="Fontawesome" name="home" style={{fontSize: 50,flexDirection: 'column'}}></Icon>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Room', {  TabId: 0 })}
                  // style={{backgroundColor: 'white', borderRadius: 100/2, width: 100, height: 100, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
                >
                  <Icon type="Ionicons" name="logo-tux" style={{fontSize: 50,flexDirection: 'column'}}/>
                </TouchableHighlight>
              </View>
          </View>
        <Footer style={{backgroundColor:"#00b0bd", alignItems: 'center'}}>
          <Text style={{color:"#fff", fontSize: 20}}>Эрүүл монгол хүний төлөө</Text>
          {/* <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="ios-home" />
            </Button>
            <Button>
              <Icon name="ios-paper" />
            </Button>
            <Button>
              <Icon name="ios-navigate" />
            </Button>
            <Button>
              <Icon name="ios-call" />
            </Button>
            <Button>
              <Icon name="ios-contact" />
            </Button>
          </FooterTab> */}
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // paddingHorizontal: 100,
    // paddingVertical: 100
    alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  innerContainer: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00b0bd',
    borderRadius: 50,
    padding: 20
  },
  title: {
    fontSize: 40,
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    paddingTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
})

const text1 = StyleSheet.flatten(styles.text);
const title1 = StyleSheet.flatten(styles.title);
