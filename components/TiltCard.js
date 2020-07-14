import React from 'react';
import { View } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Tilt from '../components/Tilt'
import { LinearGradient } from 'expo-linear-gradient';

export default class TiltCard extends React.Component {
    render(){
        return (
            <Tilt>
                <TouchableScale friction={90} tension={100} activeScale={0.90} style={{marginBottom:10}}>
                    <LinearGradient colors= {['#c9e265', '#38b6ff']} start= {[1, 1]} end= {[0, 0]} style={{borderRadius:5}}>    
                        <View style={{paddingVertical:10}}>
                            {this.props.children}
                        </View>
                    </LinearGradient>
                </TouchableScale>
            </Tilt> 
        )   
    }
}
