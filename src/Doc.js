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
import Meal from './data/mealData'

export default class Doc extends Component {
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
                  source={require('./assets/logo2.png')}
                  style={{width: '100%', height: '100%',resizeMode: 'contain',marginBottom: 10}}
              />
            </Button>
          </Body>
          <Right />
        </Header>
          <Tabs initialPage={TabId} renderTabBar={()=> <ScrollableTab />}>
              <Tab heading="ЭМНЭЛГИЙН УДИРДЛАГУУД">
                <TabScreen/>
              </Tab>
              <Tab heading="ДҮРС ОНОШИЛГООНЫ ТАСАГ">
                <TabScreen1/>
              </Tab>
              <Tab heading="ӨВДӨЛТИЙН МЕНЕЖМЕНТ, МЭДЭЭГҮЙЖҮҮЛЭГ ЭРЧИМТ ЭМЧИЛГЭЭНИЙ ТАСАГ">
                <TabScreen2/>
              </Tab>
              <Tab heading="НУРУУ НУГАСНЫ МЭС ЗАСЛЫН ТАСАГ">
                <TabScreen3/>
              </Tab>
              <Tab heading="ЕРӨНХИЙ МЭС ЗАСЛЫН ТАСАГ">
                <TabScreen4/>
              </Tab>
              <Tab heading="ЭМЭГТЭЙЧҮҮДИЙН ТАСАГ">
                <TabScreen5/>
              </Tab>
              <Tab heading="ДОТОР, УЛАМЖЛАЛТЫН ТАСАГ">
                <TabScreen6/>
              </Tab>
              <Tab heading="КЛИНИК ЛАБОРАТОРИЙН ТАСАГ">
                <TabScreen7/>
              </Tab>
              <Tab heading="ҮЕ МӨЧНИЙ МЭС ЗАСЛЫН ТАСАГ">
                <TabScreen8/>
              </Tab>
              <Tab heading="АМБУЛАТОРИЙН ТАСАГ">
                <TabScreen9/>
              </Tab>
              {/* <Tab heading="ШҮДНИЙ ТАСАГ">
                <TabScreen/>
              </Tab> */}
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

  renderView() {
      return docData[0].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}

class TabScreen1 extends React.Component {

  renderView() {
      return docData[1].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen2 extends React.Component {

  renderView() {
      return docData[2].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen3 extends React.Component {

  renderView() {
      return docData[3].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen4 extends React.Component {

  renderView() {
      return docData[4].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen5 extends React.Component {

  renderView() {
      return docData[5].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen6 extends React.Component {

  renderView() {
      return docData[6].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen7 extends React.Component {

  renderView() {
      return docData[7].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen8 extends React.Component {

  renderView() {
      return docData[8].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
         );
   }
}
class TabScreen9 extends React.Component {

  renderView() {
      return docData[9].Doc.map((item) => {
          return (
            <View style={styles.container}>
              <View>
                <Image
                    source={item.logo}
                    style={styles.image}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                  <Text style={title1}>{item.title}</Text>
                  <Text style={text1}>{item.text}</Text>
                  <Text style={text2}>{item.edu}</Text>
              </View>
             </View>
          );
      });
  }

   render() {
         return (
           <ScrollView>
               {this.renderView()}
           </ScrollView>
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    // padding: 200
  }
})

const text1 = StyleSheet.flatten(styles.text);
const text2 = StyleSheet.flatten(styles.edu);
const title1 = StyleSheet.flatten(styles.title);
