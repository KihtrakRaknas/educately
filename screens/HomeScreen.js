import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ClassButton from '../components/ClassButton';
import TiltCard from '../components/TiltCard';
import ProgressBar from 'react-native-progress/Bar';
import { AppearanceProvider, useColorScheme ,Appearance} from 'react-native-appearance';
import {themeB, themeF} from '../themeStyles'

export default class HomeScreen extends React.Component {
    componentDidMount(){
        this.subscription = Appearance.addChangeListener(({ colorScheme }) => {
            console.log(colorScheme)
            this.setState({})
        });
    }
    componentWillUnmount(){
        this.subscription.remove()
    }
    render(){
        let colorScheme = Appearance.getColorScheme()
        return (
            <ScrollView style={[themeB(colorScheme),styles.container]}>
                <TiltCard>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 40, textAlign:"center"}}>Welcome back!</Text>
                    <Text style={{ color: 'white' , fontSize: 30, textAlign:"center"}}>Insert Name Here</Text>
                </TiltCard>
                <TiltCard>
                    <View style={{flexDirection:'row-reverse'}}>
                        <View style={{padding:5, paddingRight:20, justifyContent:'center'}}>
                            <Text style={{fontSize:40, color:"white", fontWeight:"bold"}}>97</Text>
                        </View>
                        <View style={{marginHorizontal:10, flex:1}}>
                            <Text style={{ color: 'white', fontSize: 25, marginBottom:10}}>Points Earned:</Text>
                            <ProgressBar progress={0.3} width={null} borderWidth={2}/>
                            <Text style={{ color: 'white', fontSize: 20}}>Level: 5</Text>
                        </View>
                    </View>
                </TiltCard>
                <Text style={[themeF(colorScheme),{ fontSize: 25, marginBottom:10, marginTop:20, paddingHorizontal:10, textAlign:"center"}]}>Suggested for you:</Text>
                <ClassButton name="Chemistry" progress="Not Started"/>
                <StatusBar style="auto" />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10
    }
});