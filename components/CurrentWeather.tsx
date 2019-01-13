import React, {Component} from 'react';
import { View, Text } from 'react-native';
import CurrentWeatherUpdate from '../model/CurrentWeatherUpdate';
interface CurrentWeatherProps { 
    currentWeatherUpdate: CurrentWeatherUpdate;
}
export default class CurrentWeather extends Component<CurrentWeatherProps> {

    render() {
        return (
            <View>
                <Text>Current Weather</Text>
                <Text>Temperature: {this.props.currentWeatherUpdate.temperature}</Text>
                <Text>Precipitation chance: {this.props.currentWeatherUpdate.precipitationProbability*100}%</Text>
                <Text>Precipitation type: {this.props.currentWeatherUpdate.precipitationType}</Text>
                <Text>Funny: {this.props.currentWeatherUpdate.phrase}</Text>
            </View>
        )
    }
}