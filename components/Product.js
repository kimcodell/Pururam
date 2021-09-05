import React from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const transformPrice = (price) => {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

const Product = ({id, name, price, image}) => {

    return (
        <View style={style.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image 
                    source={{uri: image}}
                    accessibilityLabel={`상품명 ${name}의 이미지`}
                    style={style.image}
                />
                <Text style={style.productName} numberOfLines={2} textBreakStrategy='simple'>{ name }</Text>
                <Text style={style.price}>{transformPrice(price)}원</Text>
            </TouchableOpacity>
        </View>
    );
};

const width = Dimensions.get('screen').width - 40;

const style = StyleSheet.create({
    container: {
        width: width * 0.29,
        marginVertical: 8,
        marginHorizontal: width * 0.02,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '100%',
        aspectRatio: 1/1,
    },
    productName: {
        fontSize: 12,
        color: '#353535',
        paddingVertical: 6,
        paddingLeft: 4,
        // height: 80,
        // minHeight: 42,
        // maxHeight: 45,
        // overflow: 'hidden',
    },
    price: {
        fontSize: 13,
        paddingLeft: 4,
        fontWeight: '600',
        color: '#353535',
    },
});

export default Product;