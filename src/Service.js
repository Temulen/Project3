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
export default class Service extends Component {
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
              <Tab heading="Нуруу нугасны мэс засал">
                <ScrollView>
                  <TabScreen/>
                </ScrollView>
              </Tab>
              <Tab heading="Үений мэс засал">
                <ScrollView>
                  <TabScreen1/>
                </ScrollView>
              </Tab>
              <Tab heading="Ерөнхий мэс засал">
                <ScrollView>
                  <TabScreen2/>
                </ScrollView>
              </Tab>
              <Tab heading="Өвдөлтийн менежмент">
                <ScrollView>
                  <TabScreen3/>
                </ScrollView>
              </Tab>
              <Tab heading="Эрчимт эмчилгээний тасаг">
                <ScrollView>
                  <TabScreen4/>
                </ScrollView>
              </Tab>
              <Tab heading="Зүрх судас">
                <ScrollView>
                  <TabScreen5/>
                </ScrollView>
              </Tab>
              <Tab heading="Хоол боловсруулах замын эмгэг">
                <ScrollView>
                  <TabScreen6/>
                </ScrollView>
              </Tab>
              <Tab heading="Бөөрний эмгэг судлал">
                <ScrollView>
                  <TabScreen7/>
                </ScrollView>
              </Tab>
              <Tab heading="Дотоод шүүрлийн эмгэг судлал">
                <ScrollView>
                  <TabScreen8/>
                </ScrollView>
              </Tab>
              <Tab heading="Мэдрэл">
                <ScrollView>
                  <TabScreen9/>
                </ScrollView>
              </Tab>
              <Tab heading="Арьс харшил">
                <ScrollView>
                  <TabScreen10/>
                </ScrollView>
              </Tab>
              <Tab heading="Нүд">
                <ScrollView>
                  <TabScreen11/>
                </ScrollView>
              </Tab>
              <Tab heading="Чих, хамар, хоолой">
                <ScrollView>
                  <TabScreen12/>
                </ScrollView>
              </Tab>
              <Tab heading="Сэргээн засах уламжлалт эмчилгээний тасаг">
                <ScrollView>
                  <TabScreen13/>
                </ScrollView>
              </Tab>
              <Tab heading="Урьдчилсан сэргийлэх тасаг">
                <ScrollView>
                  <TabScreen14/>
                </ScrollView>
              </Tab>
              <Tab heading="Дүрс оношилгоо">
                <ScrollView>
                  <TabScreen15/>
                </ScrollView>
              </Tab>
              <Tab heading="Дурангийн тасаг">
                <ScrollView>
                  <TabScreen16/>
                </ScrollView>
              </Tab>
              <Tab heading="Лабораторийн тасаг">
                <ScrollView>
                  <TabScreen17/>
                </ScrollView>
              </Tab>
              <Tab heading="Клиникийн эм зүйн тасаг">
                <ScrollView>
                  <TabScreen18/>
                </ScrollView>
              </Tab>
              <Tab heading="Сувилахуйн тусламж үйлчилгээ">
                <ScrollView>
                  <TabScreen19/>
                </ScrollView>
              </Tab>
              <Tab heading="Интернэт, кофе лаунж">
                <ScrollView>
                  <TabScreen20/>
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
             <Text style={title1}>{serviceData[0].title}</Text>
             <Image
                 source={serviceData[0].logo}
                 style={styles.image}
             />
             <Text style={text1}>{serviceData[0].text}</Text>
           </View>
         );
   }
}

class TabScreen1 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[1].title}</Text>
            <Image
                source={serviceData[1].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[1].text}</Text>
          </View>
        );
  }
}

class TabScreen2 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[2].title}</Text>
            <Image
                source={serviceData[2].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[2].text}</Text>
          </View>
        );
  }
}

class TabScreen3 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[3].title}</Text>
            <Image
                source={serviceData[3].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[3].text}</Text>
          </View>
        );
  }
}

class TabScreen4 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[4].title}</Text>
            <Image
                source={serviceData[4].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[4].text}</Text>
          </View>
        );
  }
}

class TabScreen5 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[5].title}</Text>
            <Image
                source={serviceData[5].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[5].text}</Text>
          </View>
        );
  }
}

class TabScreen6 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[6].title}</Text>
            <Image
                source={serviceData[6].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[6].text}</Text>
          </View>
        );
  }
}

class TabScreen7 extends React.Component {
   render() {
         return (
           <View style={styles.container}>
             <Text style={title1}>{serviceData[7].title}</Text>
             <Image
                 source={serviceData[7].logo}
                 style={styles.image}
             />
             <Text style={text1}>{serviceData[7].text}</Text>
           </View>
         );
   }
}

class TabScreen8 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[8].title}</Text>
            <Image
                source={serviceData[8].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[8].text}</Text>
          </View>
        );
  }
}

class TabScreen9 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[9].title}</Text>
            <Image
                source={serviceData[9].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[9].text}</Text>
          </View>
        );
  }
}

class TabScreen10 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[10].title}</Text>
            <Image
                source={serviceData[10].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[10].text}</Text>
          </View>
        );
  }
}

class TabScreen11 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[11].title}</Text>
            <Image
                source={serviceData[11].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[11].text}</Text>
          </View>
        );
  }
}

class TabScreen12 extends React.Component {
  render() {
        return (
          <View style={styles.container}>
            <Text style={title1}>{serviceData[12].title}</Text>
            <Image
                source={serviceData[12].logo}
                style={styles.image}
            />
            <Text style={text1}>{serviceData[12].text}</Text>
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
