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
          <Tabs initialPage={TabId}>
              <Tab heading="Даваа гараг">
                <ScrollView>
                  <TabScreen/>
                </ScrollView>
              </Tab>
              <Tab heading="Мягмар гараг">
                <ScrollView>
                  <TabScreen1/>
                </ScrollView>
              </Tab>
              <Tab heading="Лхагва гараг">
                <ScrollView>
                  <TabScreen2/>
                </ScrollView>
              </Tab>
              <Tab heading="Пүрэв гараг">
                <ScrollView>
                  <TabScreen3/>
                </ScrollView>
              </Tab>
              <Tab heading="Баасан гараг">
                <ScrollView>
                  <TabScreen4/>
                </ScrollView>
              </Tab>
              <Tab heading="Бямба гараг">
                <ScrollView>
                  <TabScreen5/>
                </ScrollView>
              </Tab>
              <Tab heading="Ням гараг">
                <ScrollView>
                  <TabScreen6/>
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
             <Text style={title1}>{mealData[0].title}</Text>
             <Text style={text1}>{mealData[0].text}</Text>
             <Image
                 source={mealData[0].logo}
                 style={styles.image}
             />
           </View>
         );
   }
}

class TabScreen1 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{mealData[1].title}</Text>
            <Text style={text1}>{mealData[1].text}</Text>
            <Image
                source={mealData[1].logo}
                style={styles.image}
            />
          </View>
        );
  }
}

class TabScreen2 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{mealData[2].title}</Text>
            <Text style={text1}>{mealData[2].text}</Text>
            <Image
                source={mealData[2].logo}
                style={styles.image}
            />
          </View>
        );
  }
}

class TabScreen3 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{mealData[3].title}</Text>
            <Text style={text1}>{mealData[3].text}</Text>
            <Image
                source={mealData[3].logo}
                style={styles.image}
            />
          </View>
        );
  }
}

class TabScreen4 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{mealData[4].title}</Text>
            <Text style={text1}>{mealData[4].text}</Text>
            <Image
                source={mealData[4].logo}
                style={styles.image}
            />
          </View>
        );
  }
}

class TabScreen5 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{mealData[3].title}</Text>
            <Text style={text1}>{mealData[3].text}</Text>
            <Image
                source={mealData[5].logo}
                style={styles.image}
            />
          </View>
        );
  }
}

class TabScreen6 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{mealData[4].title}</Text>
            <Text style={text1}>{mealData[4].text}</Text>
            <Image
                source={mealData[6].logo}
                style={styles.image}
            />
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
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    paddingTop: 20,
  },
  image: {
    // width: 200,
    // height: 200,
    resizeMode: 'contain'
  }
})

const text1 = StyleSheet.flatten(styles.text);
const title1 = StyleSheet.flatten(styles.title);
