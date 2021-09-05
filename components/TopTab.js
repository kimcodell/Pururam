import React, {useEffect} from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../pages/Home';
import Best from '../pages/Best';
import ForEnv from '../pages/ForEnv';
import TodayEnv from '../pages/TodayEnv';
import TopTabCategory from './TopTabCategory';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('screen').width;

const TopTab = ({ navigation }) => {

    useEffect(() => {
        navigation.addListener('tabPress', (e) => {
            navigation.navigate('홈');
            // e.preventDefault();
        });
    }, [navigation]);

    return (
        <Tab.Navigator
            initialRouteName="홈"
            backBehavior='history'
            sceneContainerStyle={{
                // paddingHorizontal: 20,  //수정 필요
                backgroundColor: "#FFFFFF",
            }}
            screenOptions={{
                // tabBarStyle: {height: 48},
                tabBarIndicatorStyle: {backgroundColor: "#000000"},
                tabBarLabelStyle: { 
                    color: '#353535',
                    fontWeight: '700',
                    fontSize: width > 370 ? 16 : 14,
                    margin: 0
                },
            }}
        >
            <Tab.Screen name="홈" component={Home} />
            <Tab.Screen name="베스트" component={Best} />
            {/* <Tab.Screen name="베스트" component={TopTabCategory} /> */}
            <Tab.Screen name="환경을 위한" component={ForEnv} />
            <Tab.Screen name="오늘의 환경" component={TodayEnv} />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({

});

export default TopTab;