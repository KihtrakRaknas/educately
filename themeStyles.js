import { StyleSheet} from 'react-native';
const themeStyles = StyleSheet.create({
    darkB:{
        backgroundColor: "#000000",
        color:"white"
    },
    lightB:{
        backgroundColor: '#fff',
        color:"black"
    },
    darkF:{
        color:"white"
    },
    lightF:{
        color:"black"
    }
});

function themeB(colorScheme){
    return colorScheme=='dark'?themeStyles.darkB:themeStyles.lightB;
}

function themeF(colorScheme){
    return colorScheme=='dark'?themeStyles.darkF:themeStyles.lightF;
}

export {themeStyles, themeB, themeF};