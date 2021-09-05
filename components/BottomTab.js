import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dresser from '../pages/Dresser';
import Mypage from '../pages/Mypage';
import TopTab from './TopTab';
import Empty from './TestDrawer';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
    let iconPath;
    const style = {
        width: 20,
        height: 20,
    }

    switch (name) {
        case 'TopTab':
            return <Image style={style} resizeMode='contain' source={require('../src/botnev_home.png')} />
        case '카테고리':
            return <Image style={style} resizeMode='contain' source={require('../src/botnev_category.png')} />
        case '나만의 화장대':
            return <Image style={style} resizeMode='contain' source={require('../src/botnev_leaf.png')} />
        case '마이페이지':
            return <Image style={style} resizeMode='contain' source={require('../src/botnev_my.png')} />
        default :
            return null;
    }
};

const BottomTab = ({navigation}) => {

    return (
        <Tab.Navigator
            initialRouteName='TopTab'
            backBehavior='history'
            sceneContainerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: '#A0A0A0',
            }}
            screenOptions={({route}) => ({ 
                // tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '700',
                    marginTop: -6,
                    marginBottom: 4,
                },
                tabBarActiveTintColor: '#4A9186',
                tabBarInactiveTintColor: '#353535',
            })}
        >
            <Tab.Screen 
                name="카테고리" 
                component={Empty}
                options={{
                    tabBarButton: (props) => <TouchableOpacity {...props} onPress={navigation.toggleDrawer}/>,
                }}
            />
            <Tab.Screen 
                name="TopTab"
                component={TopTab}
                options={{
                    tabBarLabel: "홈",
                    // tabBarButton: (props) => (
                    //     <TouchableOpacity {...props} activeOpacity={1} onPress={() => navigation.navigate('홈')}/>
                    // ),
                }}
            />
            <Tab.Screen 
                name="나만의 화장대" 
                component={Dresser} 
                options={{
                    sceneContainerStyle: {
                        padding: 20,
                    },
                }}
            />
            <Tab.Screen 
                name="마이페이지" 
                component={Mypage} 
                options={{
                    sceneContainerStyle: {
                        padding: 20,
                    },
                }}
            />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({

});

export default BottomTab;