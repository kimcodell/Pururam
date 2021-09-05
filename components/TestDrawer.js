//삭제할 파일

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Home from '../pages/Home';
//  import Best from '../pages/Best';

// const Drawer = createDrawerNavigator();

const Empty = ({navigation}) => {
    // const home = () => navigation.navigate('홈');
    // useEffect(() => {
    //     navigation.addListener('focus', () => {
    //         // navigation.goBack();
    //         console.log('hi');
    //     });
    // }, [navigation]);
    // console.log(111, navigation.isFocused);

    return (
        // <Drawer.Navigator
        //     screenOptions={{
        //         drawerPosition: 'right',
        //     }}
        // >
        //     <Drawer.Screen name="best" component={Best}/>
        //     <Drawer.Screen name="home" component={Home}/>
        // </Drawer.Navigator>
        <View></View>
    );
};

export default Empty;