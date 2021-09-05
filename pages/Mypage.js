import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Mypage = () => {
    return (
        <View style={style.container}>
            <Text>마이페이지</Text>
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

export default Mypage;