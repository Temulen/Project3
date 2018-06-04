import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { PanoramaView } from 'react-native-360';
import { VideoView } from 'react-native-360';
export default class Room2 extends Component {
  onImageLoaded() {
    alert('success!')
  }

  onImageLoadingFailed() {
    alert('oh noes!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Room TExt </Text>
        </View>
            <View style={styles.PanoramaContainer}>
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
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  textContainer: {
    alignItems: 'center'
  },
  PanoramaContainer: {
    padding: 100,
    flex: 1
  },
  panorama: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
});
