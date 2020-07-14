import React from 'react';
import { View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }

export default class Tilt extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
          gyro: {}
        }
    
        Accelerometer.setUpdateInterval(16);
    }

    componentDidMount(){
        this._subscription = Accelerometer.addListener(accelerometerData => {
            this.setState({
                gyro: accelerometerData
            });
        });
    }

    componentWillUnmount(){
        this._subscription && this._subscription.remove();
        this._subscription = null;
    }

    render(){
        const { x, y, z } = this.state.gyro;
        //console.log(round(x)+" "+round(y)+" "+round(z))
        const styles = {
          transform: [
            {perspective: 300 },
            {rotateX: `${round(y)*5}deg` },
            {rotateY: `${round(x)*5}deg` },
          ]
        }
        return (
            <View style={styles}>
                {this.props.children}
            </View>
        )   
    }
}
