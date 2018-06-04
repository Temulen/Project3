import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Өрөө
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Room', {  TabId: 0 })}>
              1 ОРТОЙ ӨРӨӨ
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Room', {  TabId: 1 })}>
              2 ОРТОЙ ӨРӨӨ
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Room', {  TabId: 2 })}>
              4 ОРТОЙ ӨРӨӨ
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Room', {  TabId: 3 })}>
              ХАГАС ЛЮКС ӨРӨӨ
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Room', {  TabId: 4 })}>
              БҮТЭН ЛЮКС ӨРӨӨ
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>
              Хоол
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 0 })}>
              Даваа гараг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 1 })}>
              Мягмар гараг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 2 })}>
              Лхагва гараг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 3 })}>
              Пүрэв гараг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 4 })}>
              Баасан гараг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 5 })}>
              Бямба гараг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Meal', {  TabId: 6 })}>
              Ням гараг
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>
              Эмч мэргэжилтнүүд
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 0 })}>
              Эмнэлгийн удирдлагууд
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 1 })}>
              Дүрс оношилгооны тасаг

              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 2 })}>
              Өвдөлтийн менежмент, мэдээгүйжүүлэг эрчимт эмчилгээний тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 3 })}>
              Нуруу нугасны мэс заслын тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 4 })}>
              Ерөнхий мэс заслын тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 5 })}>
              Эмэгтэйчүүдийн тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 6 })}>
              Дотор, уламжлалтын тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 7 })}>
              Клиник лабораторийн тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 8 })}>
              Үе мөчний мэс заслын тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 9 })}>
              Амбулаторийн тасаг
              </Text>
              {/* <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Doc', {  TabId: 10 })}>
              ШҮДНИЙ ТАСАГ
              </Text> */}
            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>
              Эмчилгээ үйлчилгээ
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 0 })}>
              Нуруу нугасны мэс засал
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 1 })}>
              Үений мэс засал
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 2 })}>
              Ерөнхий мэс засал
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 3 })}>
              Өвдөлтийн менежмент
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 4 })}>
              Эрчимт эмчилгээний тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 5 })}>
              Зүрх судас
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 6 })}>
              Хоол боловсруулах замын эмгэг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 7 })}>
              Бөөрний эмгэг судлал
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 8 })}>
              Дотоод шүүрлийн эмгэг судлал
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 0 })}>
              Мэдрэл
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 10 })}>
              Арьс харшил
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 11 })}>
              Нүд
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 12 })}>
              Чих, хамар, хоолой
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 13 })}>
              Сэргээн засах уламжлалт эмчилгээний тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 14 })}>
              Урьдчилсан сэргийлэх тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 15 })}>
              Дүрс оношилгоо
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 16 })}>
              Дурангийн тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 17 })}>
              Лабораторийн тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 18 })}>
              Клиникийн эм зүйн тасаг
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 19 })}>
              Сувилахуйн тусламж үйлчилгээ
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Service', {  TabId: 20 })}>
              Интернэт, кофе лаунж
              </Text>
            </View>
          </View>

        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={{color: '#fff', fontSize: 20}}>Grandmed Hospital</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
export default SideMenu;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10,
    fontSize: 15
    // color: '#fff'
  },
  navSectionStyle: {
    // backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    padding: 20,
    backgroundColor: '#00b0bd',
    color: '#fff',
    fontSize: 20
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#ed1b24'
  }
});
