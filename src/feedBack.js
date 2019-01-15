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
import serviceData from './data/serviceData'
export default class feedBack extends Component {
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
          <Right />
        </Header>
          <Tabs initialPage={TabId} renderTabBar={()=> <ScrollableTab />}>
              <Tab heading="СЭРГЭЭН ЗАСАХ, ФИЗИК ЭМЧИЛГЭЭ">
                <ScrollView>
                  <TabScreen/>
                </ScrollView>
              </Tab>
              <Tab heading="ЛАБОРАТОРИ">
                <ScrollView>
                  <TabScreen1/>
                </ScrollView>
              </Tab>
              <Tab heading="ЭХО, ДУРАН ОНОШИЛГОО, ЭКГ">
                <ScrollView>
                  <TabScreen2/>
                </ScrollView>
              </Tab>
              <Tab heading="НАРИЙН МЭРГЭЖЛИЙН ЭМЧИЙН ҮЗЛЭГ">
                <ScrollView>
                  <TabScreen3/>
                </ScrollView>
              </Tab>
              <Tab heading="КОМПЬЮТЕРТ ТОМОГРАФ ШИНЖИЛГЭЭНИЙ ТАРИФ">
                <ScrollView>
                  <TabScreen4/>
                </ScrollView>
              </Tab>
              <Tab heading="MRI ШИНЖИЛГЭЭНИЙ ТАРИФ">
                <ScrollView>
                  <TabScreen5/>
                </ScrollView>
              </Tab>
              <Tab heading="АРЬС, ХАРШЛЫН ҮЗЛЭГИЙН ТАРИФ">
                <ScrollView>
                  <TabScreen6/>
                </ScrollView>
              </Tab>
              <Tab heading="ЭМЭГТЭЙЧҮҮДИЙН ҮЗЛЭГ">
                <ScrollView>
                  <TabScreen7/>
                </ScrollView>
              </Tab>
              <Tab heading="ОР ХОНОГИЙН ҮНЭ">
                <ScrollView>
                  <TabScreen8/>
                </ScrollView>
              </Tab>
              <Tab heading="ҮНДСЭН БАГЦИЙН ҮНЭ">
                <ScrollView>
                  <TabScreen9/>
                </ScrollView>
              </Tab>
              <Tab heading="ДЭЛГЭРЭНГҮЙ БАГЦИЙН ҮНЭ">
                <ScrollView>
                  <TabScreen10/>
                </ScrollView>
              </Tab>
              <Tab heading="НАРИЙВЧИЛСАН БАГЦИЙН ҮНЭ">
                <ScrollView>
                  <TabScreen11/>
                </ScrollView>
              </Tab>
              <Tab heading="НУРУУНЫ БАГЦИЙН ҮНЭ">
                <ScrollView>
                  <TabScreen12/>
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
             {/* <Text style={title1}>{serviceData[0].title}</Text> */}
             <Image
                 source={require('./assets/price/price1.png')}
                 style={styles.image}
             />
             {/* <Text style={text1}>{serviceData[0].text}</Text> */}
           </View>
         );
   }
}

class TabScreen1 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[1].title}</Text> */}
            <Image
                source={require('./assets/price/price2.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[1].text}</Text> */}
          </View>
        );
  }
}

class TabScreen2 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[2].title}</Text> */}
            <Image
                source={require('./assets/price/price3.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[2].text}</Text> */}
          </View>
        );
  }
}

class TabScreen3 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[3].title}</Text> */}
            <Image
                source={require('./assets/price/price5.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[3].text}</Text> */}
          </View>
        );
  }
}

class TabScreen4 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[4].title}</Text> */}
            <Image
                source={require('./assets/price/price6.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[4].text}</Text> */}
          </View>
        );
  }
}

class TabScreen5 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[5].title}</Text> */}
            <Image
                source={require('./assets/price/price7.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[5].text}</Text> */}
          </View>
        );
  }
}

class TabScreen6 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[6].title}</Text> */}
            <Image
                source={require('./assets/price/price8.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[6].text}</Text> */}
          </View>
        );
  }
}

class TabScreen7 extends React.Component {
   render() {
         return (
           <View style={styles.container}>
             {/* <Text style={title1}>{serviceData[7].title}</Text> */}
             <Image
                 source={require('./assets/price/price9.png')}
                 style={styles.image}
             />
             {/* <Text style={text1}>{serviceData[7].text}</Text> */}
           </View>
         );
   }
}

class TabScreen8 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[8].title}</Text> */}
            <Image
                source={require('./assets/price/price.jpg')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[8].text}</Text> */}
          </View>
        );
  }
}

class TabScreen9 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[9].title}</Text> */}
            <Image
                source={require('./assets/price/undsen1.jpg')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[9].text}</Text> */}
          </View>
        );
  }
}

class TabScreen10 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[10].title}</Text> */}
            <Image
                source={require('./assets/price/delgerengui.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[10].text}</Text> */}
          </View>
        );
  }
}

class TabScreen11 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[11].title}</Text> */}
            <Image
                source={require('./assets/price/nariin.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[11].text}</Text> */}
          </View>
        );
  }
}

class TabScreen12 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            {/* <Text style={title1}>{serviceData[12].title}</Text> */}
            <Image
                source={require('./assets/price/nuruu.png')}
                style={styles.image}
            />
            {/* <Text style={text1}>{serviceData[12].text}</Text> */}
          </View>
        );
  }
}

class TabScreen13 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[13].title}</Text>
            <Image
                source={serviceData[13].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[13].text}</Text>
          </View>
        );
  }
}

class TabScreen14 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[14].title}</Text>
            <Image
                source={serviceData[14].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[14].text}</Text>
          </View>
        );
  }
}

class TabScreen15 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[15].title}</Text>
            <Image
                source={serviceData[15].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[15].text}</Text>
          </View>
        );
  }
}

class TabScreen16 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[16].title}</Text>
            <Image
                source={serviceData[16].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[16].text}</Text>
          </View>
        );
  }
}

class TabScreen17 extends React.Component {
   render() {
         return (
           <View style={styles.container}>
             <Text style={title1}>{serviceData[17].title}</Text>
             <Image
                 source={serviceData[17].logo}
                 style={styles.image}
             />
             <Text style={text1}>{serviceData[17].text}</Text>
           </View>
         );
   }
}

class TabScreen18 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[18].title}</Text>
            <Image
                source={serviceData[18].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[18].text}</Text>
          </View>
        );
  }
}

class TabScreen19 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[19].title}</Text>
            <Image
                source={serviceData[19].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[19].text}</Text>
          </View>
        );
  }
}

class TabScreen20 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[20].title}</Text>
            <Image
                source={serviceData[20].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[20].text}</Text>
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
    // justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    padding: 40,
    textAlign: 'justify'
    // justifyContent: 'center'
    // padding: 20,
  },
  image: {
    width: '100%',
    // height: 200,
    resizeMode: 'contain',
    // padding: 200
  }
})

const text1 = StyleSheet.flatten(styles.text);
const title1 = StyleSheet.flatten(styles.title);
