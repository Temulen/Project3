import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail  } from 'native-base';
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  ListView,
  Alert,
  Image,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import {YellowBox} from 'react-native';
console.disableYellowBox = true;
class Main extends Component {
  render() {
    return (
      <Container style={{...Platform.select({
        ios: {
          paddingTop: 20,
        },
        android: {
          paddingTop: 0,
        },
      }),}}>
        {/* <ImageBackground source={require('./assets/logo.png')} style={{width: '100%', height: '100%'}}  blurRadius={2}> */}

        <Header style={{backgroundColor: '#fff'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          <Image
            source={require('./assets/logo2.png')}
            style={{width: '100%', height: '100%',resizeMode: 'contain',marginBottom: 10}}
            onPress={() => this.props.navigation.navigate('Home')}
          />
          </Body>
          <Right />
        </Header>
            {/* <Content bounces={false} style={{ flex: 1 }}> */}
              <Image source={require('./assets/cover.jpg')} style={styles.backgroundImage} blurRadius={10}>
                {/* <Image source={{uri: 'https://cdn.minu.mn/img/111437445128489'}} style={styles.backgroundImage} blurRadius={1}> */}
              <View style={styles.container}>
                {/* <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Room', {  TabId: 0 })}
                  style={{backgroundColor: 'white', borderRadius: 100/2, width: 100, height: 100, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
                >
                  <Icon ios='ios-home' android="md-menu" style={{fontSize: 50, color: 'red',flexDirection: 'column'}}></Icon>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Room', {  TabId: 0 })}
                  style={{backgroundColor: 'white', borderRadius: 100/2, width: 100, height: 100, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
                >
                  <Icon ios='ios-home' android="md-menu" style={{fontSize: 50, color: 'red',flexDirection: 'column'}}></Icon>
                </TouchableHighlight> */}
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Room', {  TabId: 0 })}
                  style={styles.button}
                >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontSize: 20}}> Өрөө </Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Meal')}
                  style={styles.button}
                >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontSize: 20}} > Хоол </Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Service')}
                  style={styles.button}
                >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontSize: 20}}> Эмчилгээ үйлчилгээ </Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Doc')}
                  style={styles.button}
                >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontSize: 20}}> Эмч нар </Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Feed')}
                  style={styles.button}
                >
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontSize: 20}}> Сэтгэл ханамж </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </Image>
            {/* </Content> */}
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

    {/* </ImageBackground> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100,
    paddingVertical: 100,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    // margin: 100,
    // borderWidth: 1,
    borderRadius: 1000,
    marginVertical: 20,
    // borderColor: '#fff',
    backgroundColor: '#00b0bd',
    // color: '#fff'
  },
  text1: {
    color: '#fff',
    fontSize: 200
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    // backgroundColor:'transparent',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%'
  },
})

export default Main;
