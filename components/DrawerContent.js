import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Platform, TouchableOpacity } from 'react-native';

const productTypeList = ['에센스/세럼/앰플', '마스크팩', '토너/미스트', '로션/크림/오일', '클렌징', '선케어'];
const skinTypeList = ['전체', '지성', '건성', '복합성', '여드름', '아토피', '민감성', '중성'];

const DrawerContent = ({ navigation }) => {
    const [categoryList, setCategoryList] = useState(productTypeList);
    const [tab, setTab] = useState('product');

    const changeTabToProduct = () => {
        setTab('product');
        setCategoryList(productTypeList);
    };
    const changeTabToSkin = () => {
        setTab('skin');
        setCategoryList(skinTypeList);
    };

    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Image style={{marginLeft: 28}}source={require('../src/drawer_logo.png')}/>
                <View style={style.tabContainer}>
                    <View style={[style.tabItem, {borderBottomColor: tab === 'product' ? '#FFFFFF' : '#428982'}]}>
                        <TouchableOpacity style={style.tabButton} onPress={changeTabToProduct} activeOpacity={0.4}>
                            <Text style={style.tabText}>품목</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.tabItem, {borderBottomColor: tab === 'skin' ? '#FFFFFF' : '#428982'}]}>
                        <TouchableOpacity style={style.tabButton} onPress={changeTabToSkin} activeOpacity={0.4}>
                            <Text style={style.tabText}>피부타입</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={style.listContainer}>
                {categoryList.map((item) => (
                    <TouchableOpacity 
                        key={item}
                        activeOpacity={0.55} 
                        style={{
                            marginBottom: 5,
                            height: 42,
                            justifyContent: 'center',
                        }} 
                        /* 
                        이동 로직 추가
                        onPress={() => {
                            navigation.navigate('', {
                                product: tab === 'product' ? item : '전체',
                                skin: tab === 'skin' ? item : '전체',
                            });
                        }}
                        */
                    >
                        <Text style={style.text}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        
    },
    headerContainer: {
        height: 100,
        backgroundColor: '#428982',
        justifyContent: 'center',
        // position: 'relative',
        ...Platform.select({
            ios: {
                height: 120,
            },
        }),
    },
    tabContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 32, 
    },
    tabItem: {
        width: '50%',
        borderBottomWidth: 2.8,
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '100%',
    },
    tabText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '700',
    },


    listContainer: {
        padding: 30,
    },
    text: {
        fontSize: 17,
    },

});

export default DrawerContent;