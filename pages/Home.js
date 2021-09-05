import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image, FlatList, VirtualizedList, ImageBackground } from 'react-native';

import Product from '../components/Product';
import {productList} from './Best';
import SlickSlider from '../components/SlickSlider';

const Home = ({navigation}) => {
    return (
        <ScrollView style={style.container}>
            <SlickSlider/>
            {/* <ImageBackground style={{width: '100%', aspectRatio: 7/5, marginVertical: 24}} resizeMode='contain' source={require('../src/home_main.png')}/> */}

            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>환경을 위한 제품</Text>
                <Text style={style.sectionSubTitle}>푸르람은 환경을 생각하는 기업들의 제품을 취급합니다.</Text>
                <View style={style.forEnvView}>
                    <View style={{width: '25%'}}>
                        <Image style={style.forEnvImage} source={require('../src/home_forEnvImage1.png')}/>
                        <Text style={style.forEnvText}>동물 실험 반대</Text>
                    </View>
                    <View style={{width: '25%'}}>
                        <Image style={style.forEnvImage} source={require('../src/home_forEnvImage2.png')}/>
                        <Text style={style.forEnvText}>용기</Text>
                    </View>
                    <View style={{width: '25%'}}>
                        <Image style={style.forEnvImage} source={require('../src/home_forEnvImage3.png')}/>
                        <Text style={style.forEnvText}>소재</Text>
                    </View>
                    <View style={{width: '25%'}}>
                        <Image style={style.forEnvImage} source={require('../src/home_forEnvImage4.png')}/>
                        <Text style={style.forEnvText}>성분</Text>
                    </View>
                </View>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{width: '100%', height: 180, backgroundColor: '#F4F4F4', marginTop: 20}}
                >
                    {productList.map((item) => 
                        <Product key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
                    )}
                </ScrollView>
            </View>

            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>오늘의 환경</Text>
                <Text style={style.sectionSubTitle}>환경 관련 기사 및 카드 뉴스 캠페인을 소개합니다.</Text>

                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Image style={{width: '50%', aspectRatio: 1/1, }} resizeMode='contain' source={require('../src/home_news-thumnail.png')}/>
                    <View style={{width: '50%', paddingHorizontal: 10}}>
                        <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10,}}>환경을 위한 한 걸음, 그린카드</Text>
                        <Text style={{fontSize: 12, fontWeight: '200'}}>'그린카드'란 친환경 제품을 구매, 대중교통 이용 등과 같이 지구에 도움이 되는 소비를 하면 에코머니라는 포인트가 지급되는...</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },

    sectionContainer: {
        marginBottom: 30,
    },

    sectionTitle: {
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10,
    }, 

    sectionSubTitle: {
        fontSize: 16,
        color: "#5C5C5C",
        marginBottom: 20,
    },
    forEnvView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    forEnvImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    forEnvText: {
        textAlign: 'center',
        color: '#353535',
        fontSize: 12,
    }
});

export default Home;