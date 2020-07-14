import React from 'react';
import { View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { ListItem, withTheme } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from '@react-navigation/native';


export default class ClassButton extends React.Component {
    render(){
        return (
            <ListItem
                Component={TouchableScale}
                friction={1}
                tension={100}
                activeScale={0.90} //
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                leftAvatar={{ rounded: true, source: { uri: "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/" } }}
                title={this.props.name}
                titleStyle={{ color: 'white', fontWeight: 'bold' }}
                subtitleStyle={{ color: 'white' }}
                subtitle={this.props.progress}
                chevron={{ color: 'white' }}
                containerStyle={{borderRadius:5}}
                onPress={()=>{
                    console.log(this.props.courseID)
                    if(this.props.courseID)
                        this.props.navigation.navigate('Sections', { title:this.props.name, courseID: this.props.courseID})
                    else if(this.props.sectionID)
                        this.props.navigation.navigate('SectionItems', { title:this.props.name, sectionID: this.props.sectionID})
                    else if(this.props.lessonID)  
                        this.props.navigation.navigate('LessonViewer', { title:this.props.name, lessonID: this.props.lessonID})
                }}
            />
        )   
    }
}
