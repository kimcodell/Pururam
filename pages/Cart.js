import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Cart = () => {
    return (
        <View style={style.container}>
            <Text>장바구니</Text>
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

export default Cart;