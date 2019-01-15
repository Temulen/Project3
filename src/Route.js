import React, { Component } from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Main from './Main';
import Index from './Index';
import SideMenu from './Sidemenu';
import Doc from './Doc';
import Room2 from './Room2';
import Room from './Room';
import Meal from './Meal';
import Service from './Service';
import feedBack from './feedBack';
import Incentives from './Incentives';
import Comment from './Comment';
const Drawer = DrawerNavigator(
  {
    Home: {
      screen: Main,
    },
    index: {
      screen: Index,
    },
    Doc: {
      screen: Doc,
    },
    Room2: {
      screen: Room2,
    },
    Room: {
      screen: Room,
    },
    Meal: {
      screen: Meal,
    },
    Service: {
      screen: Service,
    },
    Doc: {
      screen: Doc,
    },
    Feed: {
      screen: feedBack,
    },
    Incentives: {
      screen: Incentives,
    },
    Comment: {
      screen: Comment,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideMenu,
  },
);

// const Root = StackNavigator(
//   {
//     Home: {
//       screen: Main,
//     },
//     Home1: {
//       screen: index,
//     },
//     // Home2: {
//     //   screen: HomeScreen,
//     // },
//     // Home3: {
//     //   screen: HomeScreen,
//     // },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

class Route extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
 }

export default Route;
