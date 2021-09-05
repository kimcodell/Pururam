import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import BottomTab from './BottomTab';
import Header from './Header';

const Drawer = createDrawerNavigator();

const DrawerCategory = () => {
    return (
        <Drawer.Navigator
            initialRouteName="홈"
            drawerContent={(props) => <DrawerContent {...props}/>}
            screenOptions={{
                header: (props) => <Header {...props}/>,
                drawerType: "front",
                swipeEnabled: false,
                drawerStyle: {
                    width: '77%',
                },
            }}
        >   
            <Drawer.Screen name="BottomTab" component={BottomTab}/>
        </Drawer.Navigator>
    );
};

export default DrawerCategory;
