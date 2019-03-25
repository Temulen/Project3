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

export default class Comment extends Component {
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
        <View style={styles.container}>
        <View style={styles.container1}>
          <View>
            <Image
                source={require('./assets/comment/german.jpg')}
                style={styles.image}
            />
          </View>
          <View style={styles.container2}>
              <Text style={text2}>Намайг Шварц Холгер гэдэг. Би Герман улсын иргэн.</Text>
              <Text style={text1}>Би Гранд Мед эмнэлэгт нуруу нугасны хагалгаанд орсон. Эмнэлгийн тоног төхөөрөмж орчин үеийн, эмчилгээ үйлчилгээ сайн, эмнэлгийн эмч, ажилчдын инээмсэглэн хүндэлж байгаа нь маш сайхан санагдсан.</Text>
          </View>
         </View>

         <View style={styles.container1}>
           <View style={styles.container2}>
               <Text style={text2}>Намайг Пак Ён Хүн гэдэг. Би Монгол дахь БНСУ-ын Элчин сайдын яаманд ажилладаг.</Text>
               <Text style={text1}>Гараа гэмтээгээд Гранд Мед Эмнэлэгт хандан ирсэн. Гранд Мед эмнэлэг олон улсын түвшинд хүрсэн эмнэлэг гэж хэлмээр байна. Хагалгааны дараах биеийн байдал үнэхээр гайхамшигтай сайн байна. Бүр итгэмээргүй. Ямар ч хүндрэл зовиур алга. Гранд Мед эмнэлгийн эмч нартаа баярлалаа.</Text>
           </View>
             <View>
               <Image
                   source={require('./assets/comment/korea.jpg')}
                   style={styles.image}
               />
             </View>
          </View>

          <View style={styles.container1}>
            <View>
            <Image
                source={require('./assets/comment/kazakstan.jpg')}
                style={styles.image}
            />
          </View>
            <View style={styles.container2}>
                <Text style={text2}>Намайг Аманжол гэдэг. Би Казакстан улсын иргэн.
</Text>
                <Text style={text1}>Би нурууны бичил мэс заслын аргыг сонгон хагалгаанд орсон. Хагалгаанд орсон даруйдаа өвдөлт нь үгүй болон эмчилгээндээ сэтгэл хангалуун байна. Гранд Мед эмнэлгийн үйлчилгээ хурдан шуурхай. Эмчилгээ нь их үр дүнтэй.</Text>
            </View>
           </View>

           <View style={styles.container1}>
             <View style={styles.container2}>
                 <Text style={text2}>Намайг Норберт Нон гэдэг. Би Герман улсын иргэн.
</Text>
                 <Text style={text1}>Би Гранд Мед эмнэлэгт үений өвдөгний хагалгаа хийлгэсэн. Надад хэвтэн эмчлүүлэхэд ямар нэгэн хэлний бэрхшээл болон хоолны тал дээр санаа зовох зүйлгүй байлаа. Гранд Мед эмнэлгийн хамт олонд ажлын амжилт хүсье.</Text>
             </View>
               <View>
                 <Image
                     source={require('./assets/comment/norwek.jpg')}
                     style={styles.image}
                 />
               </View>
            </View>

            <View style={styles.container1}>
              <View>
              <Image
                  source={require('./assets/comment/oyun.jpg')}
                  style={styles.image}
              />
            </View>
              <View style={styles.container2}>
                  <Text style={text2}>Миний нэрийг Оюун гэдэг. Би МУИС-д багшаар ажилладаг.
</Text>
                  <Text style={text1}>Гранд Мед эмнэлэгт нугалам хоорондын мөгөөрсөн жийргэвчийг сольж, мэдрэлийн ёзоор чөлөөлөх бичил мэс заслыг хийлгүүлсэн. Ар гэрийнхэндээ ойр, эх орондоо бага зардлаар хагалгаанд орно гэдэг том боломж. Гадагшаа явах шаардлагагүй эх орондоо бүрэн эмчлэгдэх боломж байна гэдгийг хэлмээр байна даа.</Text>
              </View>

             </View>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'stretch',
    // alignSelf: 'flex-end',
    // flexWrap: 'wrap'
  },
  container2: {
    flex: 1,
    alignSelf: 'flex-start',
    flexWrap: 'wrap'
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: '900',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    padding: 20,
    justifyContent: 'center'
  },
  edu: {
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    // padding: 50
  }
})

const text1 = StyleSheet.flatten(styles.text);
const text2 = StyleSheet.flatten(styles.title);
