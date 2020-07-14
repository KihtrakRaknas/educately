import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import ClassButton from '../components/ClassButton';
import TiltCard from '../components/TiltCard';
import ProgressBar from 'react-native-progress/Bar';
import HTML from 'react-native-render-html';
import YoutubePlayer from 'react-native-youtube-iframe';
import AsyncStorage from '@react-native-community/async-storage';
import {Appearance} from 'react-native-appearance';
import {themeB, themeF} from '../themeStyles'

export default class LessonViewerScreen extends React.Component {
    constructor(props){
        super(props);
        console.log("title"+this.props.route.params.title)
        this.props.navigation.setOptions({ title: this.props.route.params.title})
    }
    state={
        lesson:null
    }

    componentDidMount(){
        this.subscription = Appearance.addChangeListener(({ colorScheme }) => {
            this.setState({});
        });
        AsyncStorage.getItem('lessonRes'+this.props.route.params.lessonID).then((lesson)=>{
            if(lesson)
                this.setState({lesson:JSON.parse(lesson)})
        })
        fetch('http://www.educately.co/mobile_app_api.php?data=id&id='+this.props.route.params.lessonID).then(res=>res.json()).then(res=>{
            res[0]["post_content"] = res[0]["post_content"].replace(/\[embed\].*v=.*\[\/embed\]/g,(str)=>{
                console.log(str)
                let id = str.substring(str.indexOf("v=")+"v=".length,str.indexOf("[/embed]"))
                return `<yt id=${id}></yt>`
            })
            res[0]["post_content"] = res[0]["post_content"].replace(/\[embed\].*\[\/embed\]/g,(str)=>{
                console.log(str)
                let url = str.substring(str.indexOf("[embed]")+"[embed]".length,str.indexOf("[/embed]"))
                return `<iframe src=${url}></iframe>`
            })
            res[0]["post_content"]=res[0]["post_content"].split("\n").map((item)=>{console.log(item+": "+item.match(/<.*>.*<\/.*>/g));return item.match(/<.*>.*<\/.*>/g)&&item.match(/<.*>.*<\/.*>/g).length>0?item:`<p>${item}</p>`}).join("")
            console.log(res[0]["post_content"])
            this.setState({lesson:res[0]})
            AsyncStorage.setItem('lessonRes'+this.props.route.params.lessonID, JSON.stringify(res[0]))
        })

    }

    componentWillUnmount(){
        this.subscription.remove()
    }

    render(){
        let colorScheme = Appearance.getColorScheme();
        if(this.state.lesson==null)
            return (
                <View style={[themeB(colorScheme),{      
                    flex: 1,
                    padding:10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}>
                    <ActivityIndicator size="large" />
                    <Text style={{paddingTop:10}}>Retrieving {this.props.route.params.title}</Text>
                </View>
            )
        console.log(this.state.lesson.post_content)
        return (
            <ScrollView style={themeB(colorScheme)}>
                <HTML html={this.state.lesson.post_content} imagesMaxWidth={Dimensions.get('window').width} tagsStyles={{p:[themeF(colorScheme),{fontSize:20, paddingLeft:10, paddingRight:10}]}} renderers={{
                    yt: (htmlAttribs) => {console.log(JSON.stringify(htmlAttribs));return   (<YoutubePlayer
                        height={Dimensions.get('window').width/16*9}
                        width={Dimensions.get('window').width}
                          videoId={htmlAttribs.id}
                          play={true}
                          initialPlayerParams={{
                              cc_lang_pref: "us",
                              showClosedCaptions:true,
                              modestbranding: true,
                              //color:"white",
                              rel:false,
                          }} 
                      />)}
                }}/>
                <View style={{height:40}}/>
                <StatusBar style="auto" />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});