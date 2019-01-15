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

class HttpStatus {
  public static INTERNAL_SERVER_ERROR = 500;
  public static TOO_MANY_REQUESTS = 429;
}

interface Props {}
class AppState {
  weatherUpdate: CompleteWeatherUpdate;
  error: string;
  constructor(weatherUpdate: CompleteWeatherUpdate, error: string) {
    this.weatherUpdate = weatherUpdate;
    this.error = error;
  }
  
} 
export default class App extends Component<Props, AppState> {
  private weatherService: WeatherService;
  private static LATITUDE  = 42.0610758;
  private static LONGITUDE = -80.1578465;

  constructor(props: Props) {
    super(props);
    this.weatherService = WeatherService.getInstance();
    this.state = new AppState(CompleteWeatherUpdate.empty(), '');

  }

  componentWillMount() {
    this.refreshWeather();
  }

  private refreshWeather() {
    this.weatherService.getWeatherUpdate(App.LATITUDE, App.LONGITUDE)
    .then(response => {
      if (!CompleteWeatherUpdate.isInstance(response.data)) {
        this.setState(new AppState(CompleteWeatherUpdate.empty(), 'Invalid response from api'));
        return;
      }
      this.setState(new AppState(response.data, ''));
    }).catch(error => {
      let errorMessage = '';
      if (error.response) {
        switch(error.response.status) {
          case HttpStatus.TOO_MANY_REQUESTS:
            errorMessage = 'Rate limit reached';
            break;
          case HttpStatus.INTERNAL_SERVER_ERROR:
            errorMessage = 'Internal server error';
            break;
          default:
            errorMessage = `Http Status:${error.response.status}`;
            break;
        }
      } else {
        errorMessage = error.toString();
      }
      this.setState(new AppState(CompleteWeatherUpdate.empty(), errorMessage));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Refresh Weather" 
          onPress={() => {this.refreshWeather()}}/>
        <CurrentWeather currentWeatherUpdate={this.state.weatherUpdate.current}/>
        <Text>{(this.state.error !== '') ? 'Error:' : ''}{this.state.error}</Text>
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
