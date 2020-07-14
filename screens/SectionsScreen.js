import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import ClassButton from '../components/ClassButton';
import TiltCard from '../components/TiltCard';
import ProgressBar from 'react-native-progress/Bar';
import AsyncStorage from '@react-native-community/async-storage';
import {Appearance} from 'react-native-appearance';
import {themeB, themeF} from '../themeStyles'


export default class SectionsScreen extends React.Component {
    constructor(props){
        super(props);
        console.log("title"+this.props.route.params.title)
        this.props.navigation.setOptions({ title: this.props.route.params.title})
    }
    state={
        sections:null
    }

    componentDidMount(){
        this.subscription = Appearance.addChangeListener(({ colorScheme }) => {
            this.setState({});
        });
        AsyncStorage.getItem('sectionsRes').then((sectionsRes)=>{
            if(sectionsRes)
                this.parseRes(JSON.parse(sectionsRes));
        })
        fetch('http://www.educately.co/mobile_app_api.php?data=sections').then(res=>res.json()).then(res=>{
            this.parseRes(res);
            AsyncStorage.setItem('sectionsRes', JSON.stringify(res))
        })

    }

    componentWillUnmount(){
        this.subscription.remove()
    }

    parseRes=(res)=>{
        let sections=[];
        for(let course of res){
            console.log(course["section_course_id"] +"-"+ JSON.stringify(this.props.route.params))
            if(course["section_course_id"]==this.props.route.params.courseID)
                sections.push(course)
        }
        sections.sort((item1,item2)=>item1.section_order-item2.section_order)
        console.log(sections)
        this.setState({sections})
    }

    render(){
        let colorScheme = Appearance.getColorScheme();
        if(this.state.sections==null)
            return (
                <View style={[themeB(colorScheme),{      
                    flex: 1,
                    padding:10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}>
                    <ActivityIndicator size="large" />
                    <Text style={{paddingTop:10}}>Retrieving the sections in {this.props.route.params.title}</Text>
                </View>
            )
        return (
            <View style={[themeB(colorScheme),styles.container]}>
                <FlatList
                    data={this.state.sections}
                    style={themeB(colorScheme)}
                    renderItem={({ item }) => (
                        <View style={{margin:10}}><ClassButton name={item.section_name} progress={item.section_description} navigation={this.props.navigation} sectionID={item.section_id}/></View>
                    )}
                    keyExtractor={(item) => item.section_id}
                    //ItemSeparatorComponent={({ highlighted }) => (<View style={{height:20}}></View>)}
                />
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});