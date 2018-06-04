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
  FlatList,
  ScrollView
} from 'react-native';
import {YellowBox} from 'react-native';
console.disableYellowBox = true;
import roomData from './data/roomData'
import images from './images'
import { PanoramaView } from 'react-native-360';

// const Id = 0;
// const counter = 0;



export default class Room extends Component {

  constructor(props){
        super(props);
        // this.num = 8 // this is added as class property - option 1
        this.state = { num: 0 } //this is added as a local state of react component - option 2
    }

  render() {
    const { params } = this.props.navigation.state;
    const TabId = params ? params.TabId : null;
    // Id = TabId
    // console.log(Id);
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
                  source={images.logo}
                  style={{width: '100%', height: '100%',resizeMode: 'contain',marginBottom: 10}}
              />
            </Button>
          </Body>
          <Right />
        </Header>
          <Tabs
            // page={TabId}
            initialPage={TabId}
            // onChangeTab={({ i, ref, from }) => console.log(i) }
            // onChangeTab={({ i, ref, from }) => counter = i }

            // renderTabBar={()=> <ScrollableTab />}
          >
              <Tab heading="1 ОРТОЙ ӨРӨӨ">
                <ScrollView>
                  <TabScreen/>
                </ScrollView>
              </Tab>
              <Tab heading="2 ОРТОЙ ӨРӨӨ">
                <ScrollView>
                  <TabScreen1/>
                </ScrollView>
              </Tab>
              <Tab heading="4 ОРТОЙ ӨРӨӨ">
                <ScrollView>
                  <TabScreen2/>
                </ScrollView>
              </Tab>
              <Tab heading="ХАГАС ЛЮКС ӨРӨӨ">
                <ScrollView>
                  <TabScreen3/>
                </ScrollView>
              </Tab>
              <Tab heading="БҮТЭН ЛЮКС ӨРӨӨ">
                <ScrollView>
                  <TabScreen4/>
                </ScrollView>
              </Tab>
          </Tabs>
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

class TabScreen extends React.Component {
   render() {
         return (
           <View style={styles.container}>
             <Text style={title1}>{roomData[0].title}</Text>
               <PanoramaView
                 style={styles.panorama}
                 image={require('../andes.jpg')}
                 displayMode={'embedded'}
                 enableFullscreenButton
                 enableCardboardButton
                 enableTouchTracking
                 hidesTransitionView
                 enableInfoButton={false}
               />
             <Text style={text1}>{roomData[0].text}</Text>
           </View>
         );
   }
}

class TabScreen1 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{roomData[1].title}</Text>
            <PanoramaView
              style={styles.panorama}
              image={require('../andes.jpg')}
              displayMode={'embedded'}
              enableFullscreenButton
              enableCardboardButton
              enableTouchTracking
              hidesTransitionView
              enableInfoButton={false}
            />
            <Text style={text1}>{roomData[1].text}</Text>
          </View>
        );
  }
}

class TabScreen2 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{roomData[2].title}</Text>
            <PanoramaView
              style={styles.panorama}
              image={require('../andes.jpg')}
              displayMode={'embedded'}
              enableFullscreenButton
              enableCardboardButton
              enableTouchTracking
              hidesTransitionView
              enableInfoButton={false}
            />
            <Text style={text1}>{roomData[2].text}</Text>
          </View>
        );
  }
}

class TabScreen3 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{roomData[3].title}</Text>
            <PanoramaView
              style={styles.panorama}
              image={require('../andes.jpg')}
              displayMode={'embedded'}
              enableFullscreenButton
              enableCardboardButton
              enableTouchTracking
              hidesTransitionView
              enableInfoButton={false}
            />
            <Text style={text1}>{roomData[3].text}</Text>
          </View>
        );
  }
}

class TabScreen4 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{roomData[4].title}</Text>
            <PanoramaView
              style={styles.panorama}
              image={require('../andes.jpg')}
              displayMode={'embedded'}
              enableFullscreenButton
              enableCardboardButton
              enableTouchTracking
              hidesTransitionView
              enableInfoButton={false}
            />
            <Text style={text1}>{roomData[4].text}</Text>
          </View>
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
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 40,
    padding: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    padding: 40,
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  panorama: {
    flex: 1,
    height: 400,
    width: '100%'
  },
})

const text1 = StyleSheet.flatten(styles.text);
const title1 = StyleSheet.flatten(styles.title);
