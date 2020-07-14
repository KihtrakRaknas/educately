import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import ClassButton from '../components/ClassButton';
import TiltCard from '../components/TiltCard';
import ProgressBar from 'react-native-progress/Bar';
import AsyncStorage from '@react-native-community/async-storage';
import {Appearance} from 'react-native-appearance';
import {themeB, themeF} from '../themeStyles'

export default class SectionItemsScreen extends React.Component {
    constructor(props){
        super(props);
        console.log("title"+this.props.route.params.title)
        this.props.navigation.setOptions({ title: this.props.route.params.title})
    }
    state={
        sectionItems:null
    }

    componentDidMount(){
        this.subscription = Appearance.addChangeListener(({ colorScheme }) => {
            this.setState({});
        });
        AsyncStorage.getItem('sectionItems'+this.props.route.params.sectionID).then((sectionItems)=>{
            if(sectionItems)
                this.setState({sectionItems:JSON.parse(sectionItems)})
        })
        fetch('http://www.educately.co/mobile_app_api.php?data=section_items&id='+this.props.route.params.sectionID).then(res=>res.json()).then(res=>{
            res.sort((item1,item2)=>item1.item_order-item2.item_order)
            console.log(res)
            let sectionItems=[]
            for(let item of res)
                sectionItems.push(fetch('http://www.educately.co/mobile_app_api.php?data=id&id='+item.item_id).then(res=>res.json()).then(res=>{return res[0]}))
            Promise.all(sectionItems).then((sectionItems)=>{
                console.log(sectionItems)
                this.setState({sectionItems})
                AsyncStorage.setItem('sectionItems'+this.props.route.params.sectionID, JSON.stringify(sectionItems))
            })
        })

    }
    componentWillUnmount(){
        this.subscription.remove()
    }

    render(){
        let colorScheme = Appearance.getColorScheme();
        if(this.state.sectionItems==null)
            return (
                <View style={[themeB(colorScheme),{      
                    flex: 1,
                    padding:10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}>
                    <ActivityIndicator size="large" />
                    <Text style={{paddingTop:10}}>Retrieving the items in {this.props.route.params.title}</Text>
                </View>
            )
        return (
            <View style={[themeB(colorScheme),styles.container]}>
                <FlatList
                    style={themeB(colorScheme)}
                    data={this.state.sectionItems}
                    renderItem={({ item }) => (
                        <View style={{margin:10}}><ClassButton name={item.post_title} progress={item.post_type.substring(3).charAt(0).toUpperCase() + item.post_type.substring(3).slice(1)} navigation={this.props.navigation} lessonID={item.ID}/></View>
                    )}
                    keyExtractor={(item) => item.ID}
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