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

export default class SpaceShip extends React.Component {
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
                  top : this.animatedValue.interpolate({
                    inputRange: valueIntervals,
                    outputRange: [10, 0, -10, 10, -10, 100, 200, 250, 250, 250, 250, 270, 240, 200, 150, 0, 0, 0, 0, 0, 0]
                  }),
                  left: this.animatedValue.interpolate({
                    inputRange: valueIntervals,
                    outputRange: [10, 50, 100, 180, 20, 50, 100, 120, 180, 100, 50, 0, 0, 0, 0, 100, 120, 100, 80, 50, 0]
                  }),
                  opacity : this.animatedValue.interpolate({
                    inputRange: valueIntervals,
                    outputRange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
                  })
                }}>
                <Image
                  source={require('../assets/trasparent-with-thrusts.gif')}
                  style={{ height: 77, width: 106 }}
                />
              </Animated.View>
          </View>
          
    );
  }
}

