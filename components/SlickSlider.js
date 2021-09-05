import React from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import Slick from 'react-native-slick';


const SlickSlider = () => {
    const width = Dimensions.get('screen').width - 40;
    return (
        <Slick
            style={{ maxHeight: width * 0.9, marginTop: 10}}
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={3.2}
            buttonWrapperStyle={{paddingHorizontal: 0}}
            prevButton={<Image style={{width: 40, height: 40, }} source={require('../src/slick_prev.png')}/>}
            nextButton={<Image style={{width: 40, height: 40, }} source={require('../src/slick_next.png')}/>}
            showsPagination={false}
        >
            <View style={{height: width * 0.75}}>
                <Image
                    style={{width: '100%', height: width * 0.75}}
                    resizeMode='contain'
                    source={require('../src/home_main.png')}
                />
            </View>
            <View style={{height: width * 0.75}}>
                <Image
                    style={{width: '100%', height: width * 0.75}}
                    resizeMode='contain'
                    source={require('../src/home_main2.png')}
                />
            </View>
            
            
            
        </Slick>
    );
};

export default SlickSlider;