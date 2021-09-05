import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, BackHandler } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';

const Dresser = ({navigation, route}) => {
    
    // useEffect(() => {
    //     const backAction = () => {
    //         navigation.navigate('홈');
    //         return true;
    //     };
      
    //     const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
      
    //     return () => backHandler.remove();
    // }, []);

    // useBackHandler(() => {
    //     if (route.name === '나만의 화장대') {
    //         navigation.navigate('홈');
    //         return true;
    //     }
    //     return false;
    // });

    return (
        <View style={style.container}>
            <Text>나만의 화장대</Text>
            <Text style={style.text}>아직 준비중입니다!</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default Dresser;