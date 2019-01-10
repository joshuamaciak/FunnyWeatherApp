import React, {Component} from 'react';
import { View, Text } from 'react-native';
import CompleteWeatherUpdate from '../model/CompleteWeatherUpdate';
interface CurrentWeatherProps { 
    weatherUpdate: CompleteWeatherUpdate;
}
export default class CurrentWeather extends Component<CurrentWeatherProps> {

    render() {
        return (
            <View>
                <Text>Current Weather</Text>
                <Text>Temperature: {this.props.weatherUpdate.current.temperature}</Text>
                <Text>Precipitation chance: {this.props.weatherUpdate.current.precipitationProbability*100}%</Text>
                <Text>Precipitation type: {this.props.weatherUpdate.current.precipitationType}</Text>
                <Text>Funny: {this.props.weatherUpdate.current.phrase}</Text>
            </View>
        )
    }
}