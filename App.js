import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import CoursesScreen from "./screens/CoursesScreen";
import SectionsScreen from "./screens/SectionsScreen";
import SectionItemsScreen from "./screens/SectionItemsScreen";
import LessonViewerScreen from "./screens/LessonViewerScreen";
import { Octicons } from '@expo/vector-icons';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const headerProps = (title, navigation) => ({
  //title: title,
  headerStyle: {
    backgroundColor: '#9edeb3',
  },
  headerTintColor: '#fff',

  headerRight: () => Dimensions.get('window').width >= 768?null:(
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Octicons name="three-bars" size={24} color="white" style={{paddingRight:20}}/>
    </TouchableOpacity>
  ),
})

function Home(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={({ navigation })=>headerProps('Home', navigation)}/>
    </Stack.Navigator>
  )
}

function Courses(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={CoursesScreen} options={({ navigation })=>headerProps('Courses', navigation)}/>
      <Stack.Screen name="Sections" component={SectionsScreen} options={({ navigation })=>headerProps('Sections', navigation)}/>
      <Stack.Screen name="SectionItems" component={SectionItemsScreen} options={({ navigation })=>headerProps('SectionItems', navigation)}/>
      <Stack.Screen name="LessonViewer" component={LessonViewerScreen} options={({ navigation })=>headerProps('LessonViewer', navigation)}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Drawer.Navigator initialRouteName="Home" drawerType={Dimensions.get('window').width >= 768 ? 'permanent' : 'front'}>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Courses" component={Courses}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
