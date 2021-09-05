import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';

const Header = ({ navigation }) => {
    const routeToSearch = () => {
        navigation.navigate('검색');
    };
    const routeToCart = () => {
        navigation.navigate('장바구니');
    }

    return(
        <View style={style.headerStyle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{width: 90}} resizeMode="contain" source={require('../src/header_logo.png')} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={routeToSearch}>
                    <Image style={{width: 24, height: 24, marginRight: 6}} source={require('../src/header_search.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={routeToCart}>
                    <Image style={{width: 24, height: 24, marginLeft: 6}} source={require('../src/header_cart.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#FFFFFF',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        ...Platform.select({
            ios: {
                height: 100,
                paddingTop: 30,
            },
        }),
    },
});

export default Header;