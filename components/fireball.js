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

export default class Fireball extends React.Component {
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
          <Animated.View
            style={{
              marginTop : this.animatedValue.interpolate({
                inputRange: valueIntervals,
                outputRange: [0, 10, 0, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }),
              opacity : this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
                  
              }),
              top: this.animatedValue.interpolate({
                  inputRange: valueIntervals,
                  outputRange: [15, 15, 15, 15, 15, 15, 265, 265, 265, 265, 265, 255, 200, 200, 200, 200, 200, 200, 15, 15, 15]
                  
              }),
              left: this.animatedValue.interpolate({
                inputRange: valueIntervals,
                outputRange: [0, 0, 0, 100, 200, 200, 200, 0, 120, 220, 220, -200, -200, -100, -70, 0, 0, 0, 0, 0, 0]
              }),
            }}>
            <Image
              source={require('../assets/thrust.gif')}
              style={{ height: 24, width: 24 }}
            />
          </Animated.View>
    );
  }
}

