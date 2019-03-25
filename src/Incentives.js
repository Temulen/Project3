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
  ScrollView,
  TextInput
} from 'react-native';
import {YellowBox} from 'react-native';
console.disableYellowBox = true;
import docData from './data/docData'

export default class Incentives extends Component {
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
        <Header hasTabs style={{backgroundColor: '#fff'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Button transparent large onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                  source={require('./assets/logo4.png')}
                  style={{width: '100%', height: '100%',resizeMode: 'contain',marginBottom: 10}}
              />
            </Button>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text>Буцах</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView>
        <View>
          <Image
              source={require('./assets/comment/shud.jpg')}
              style={styles.image}
          />
        </View>
      </ScrollView>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    // padding: 20,
    // textAlign: 'center',
    // justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    padding: 20,
    color: '#00b0bd',
    fontStyle: 'italic'
    // textAlign: 'center',
    // justifyContent: 'center'
    // padding: 20,
  },
  edu: {
    // fontSize: 20,
    // padding: 20,
    // textAlign: 'center',
    // justifyContent: 'center'
    // padding: 20,
  },
  image: {
    width: '100%',
    // height: '100%',
    resizeMode: 'contain',
    // padding: 200
  }
})

const text1 = StyleSheet.flatten(styles.text);
const text2 = StyleSheet.flatten(styles.edu);
const title1 = StyleSheet.flatten(styles.title);
