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
import SpaceShip from './components/spaceship'
import Alien from './components/alien'
import Fireball from './components/fireball'
import Ambusher from './components/ambusher'

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/Starsbackground.gif')}
        style={styles.container}>
          <SpaceShip style={{flex:1}}>
          </SpaceShip>
          <Fireball style={{flex:1}}>
          </Fireball>
          <Alien style={{flex:1}}>
          </Alien>
          <Ambusher>
          </Ambusher>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
  },
});
