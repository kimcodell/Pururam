import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SearchTerm = ({ term }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{'#' + term}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        borderColor: '#428982',
        borderWidth: 2,
        borderRadius: 50,
        margin: 5,
        padding: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    text: {
        color: '#428982',
        fontSize: 16,
    },
});

export default SearchTerm;

