/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import CurrentWeather from './components/CurrentWeather';
import WeatherService from './service/WeatherService';
import CompleteWeatherUpdate from './model/CompleteWeatherUpdate';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
class AppState {
  weatherUpdate: CompleteWeatherUpdate;
  constructor(weatherUpdate: CompleteWeatherUpdate) {
    this.weatherUpdate = weatherUpdate;
  }
} 
export default class App extends Component<Props, AppState> {
  private weatherService: WeatherService;
  private static LATITUDE  = 42.0610758;
  private static LONGITUDE = -80.1578465;

  constructor(props: Props) {
    super(props);
    this.weatherService = WeatherService.getInstance();
    this.state = new AppState(CompleteWeatherUpdate.empty());

  }

  componentWillMount() {
    this.refreshWeather();
  }

  private refreshWeather() {
    this.weatherService.getWeatherUpdate(App.LATITUDE, App.LONGITUDE)
    .then(response => {
      // TODO: need to check response data to ensure it matches our model
      this.setState(new AppState(response.data));
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Refresh Weather" 
          onPress={() => {this.refreshWeather()}}/>
        <CurrentWeather currentWeatherUpdate={this.state.weatherUpdate.current}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
