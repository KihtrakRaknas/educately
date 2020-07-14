import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import ClassButton from '../components/ClassButton';
import TiltCard from '../components/TiltCard';
import ProgressBar from 'react-native-progress/Bar';
import AsyncStorage from '@react-native-community/async-storage';
import {Appearance} from 'react-native-appearance';
import {themeB, themeF} from '../themeStyles'

export default class CoursesScreen extends React.Component {
    state={
        classes:null
    }

    componentDidMount(){
        this.subscription = Appearance.addChangeListener(({ colorScheme }) => {
            this.setState({});
        });

        AsyncStorage.getItem('courseNames').then((courseNames)=>{
            if(courseNames)
                this.setState({classes:JSON.parse(courseNames)})
        })
        fetch('http://www.educately.co/mobile_app_api.php?data=sections').then(res=>{console.log("res: "+JSON.stringify(res));return res.json()}).then(res=>{
            let courseIDs=new Set();
            for(let course of res)
                courseIDs.add(course["section_course_id"])
            let courseNames=[]
            for(let courseID of courseIDs)
                courseNames.push(fetch('http://www.educately.co/mobile_app_api.php?data=id&id='+courseID).then(res=>res.json()).then(res=>{
                    /*if(res[0]["post_status"]=="trash")
                        return null*/
                    return {name: res[0]['post_title'], id:courseID}
                }))
            Promise.all(courseNames).then(courseNames=>{
                courseNames = courseNames.filter(e=>e!=null);
                console.log("done")
                console.log(courseNames)
                this.setState({classes:courseNames})
                AsyncStorage.setItem('courseNames', JSON.stringify(courseNames))
            })
            AsyncStorage.setItem('sectionsRes', JSON.stringify(res))
        })
    }

    componentWillUnmount(){
        this.subscription.remove()
    }

    render(){
        let colorScheme = Appearance.getColorScheme();
        if(this.state.classes==null)
            return (
                <View style={[themeB(colorScheme),{      
                    flex: 1,
                    padding:10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}>
                    <ActivityIndicator size="large" />
                    <Text style={{paddingTop:10}}>Retrieving a List of all courses</Text>
                </View>
            )
        return (
            <View style={[themeB(colorScheme),styles.container]}>
                <FlatList
                    style={themeB(colorScheme)}
                    data={this.state.classes}
                    renderItem={({ item }) => (
                        <View style={{margin:10}}><ClassButton name={item.name} progress="IDK" navigation={this.props.navigation} courseID={item.id}/></View>
                    )}
                    keyExtractor={(item) => item.id}
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
    }
});