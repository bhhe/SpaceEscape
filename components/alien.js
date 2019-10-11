import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const valueIntervals = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];

export default class Alien extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate();
  }
  animate() {
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(this.animatedValue, 20000, Easing.linear),     
    ]).start()
  }
  render() {
    return (
          <View>
            <Animated.View
              style={{
                top: this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [-100, -100, -100, -100, -100, -80, -60, -20, 0, 40, 100, 200, 250, 270, 300, 300, 300, 300, 300, 300, 300]
                  
                }),
                opacity : this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
                  
                }),
                left:this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [150, 150, 150, 120, 100, 100, 150, 150, 150, 150, 100, 50, 0, -50, -70, -70, -70, -70, -70, -70, -70]
                  
                }),
              }}>
              <Image
                source={require('../assets/alien-enemy-2-flying.gif')}
                style={{ height: 128, width: 128 }}
              />
            </Animated.View>    
            <Animated.View
              style={{
                top : this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [-20, 20, -20, 20, -20, 0, 0, 0, 0, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20]
                  
                }),
                left: 150,
                opacity : this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [0, 0, 0, 1, 1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  
                }),
              }}>
              <Image
                source={require('../assets/alien-enemy-2-flying.gif')}
                style={{ height: 128, width: 128 }}
              />
            </Animated.View> 
            <Animated.View
              style={{
                marginTop : this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                }),
                opacity : this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  
                }),
                top: 100,
                left:150
              }}>
              <Image
                source={require('../assets/alien-enemy-2-flying.gif')}
                style={{ height: 128, width: 128 }}
              />
            </Animated.View>    
          </View>
    );
  }
}

