import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const skinTypeList = ['전체', '지성', '건성', '복합성', '여드름', '아토피', '민감성', '중성'];

const TopTabCategory = ({ subCategoryList }) => {
    const [skinSelect, setSkinSelect] = useState(skinTypeList[0]);
    const [productSelect, setProductSelect] = useState(subCategoryList[0]);
    
    const changeSkinSelect = (value) => () => {
        setSkinSelect(value);
    };

    const changeProductSelect = (value) => () => {
        setProductSelect(value);
    };

    return (
        <View>
            <ScrollView
                horizontal={true}
                style={{backgroundColor: '#59A7A7'}}
                showsHorizontalScrollIndicator={false}
            >
                <View style={style.skinSelectContainer}>
                    {skinTypeList.map((value) => (
                        <View 
                            key={value} 
                            style={[
                                {marginHorizontal: 19, paddingVertical: 5, borderBottomWidth: 2},
                                {
                                    borderBottomColor: skinSelect === value ? '#FFFFFF' : '#59A7A7',
                                }
                            ]}
                        >
                            <Text 
                                onPress={changeSkinSelect(value)} 
                                style={[
                                    style.skinSelectText,
                                    {
                                        fontWeight: skinSelect === value ? '700' : '500',
                                    },
                                ]}
                            >
                                {value}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={style.productSelectContainer}>
                    {subCategoryList.map((value) => (
                        <View key={value} style={{paddingHorizontal: 9}}>
                            <Text 
                                onPress={changeProductSelect(value)} 
                                style={[
                                    style.productSelectText, 
                                    {
                                        fontWeight: productSelect === value ? '800' : '500',
                                        color: productSelect === value ? '#000000' : '#B5B5B5'
                                    },
                                ]} 
                            >
                                {value}
                            </Text>
                        </View>
                    ))}
                    
                </View>
            </ScrollView>
        </View>        
    );
};

const style = StyleSheet.create({
    skinSelectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 9,
        paddingVertical: 13,

        // borderWidth: 1,
    },
    skinSelectText: {
        fontSize: 17,
        color: '#FFFFFF',
    },
    productSelectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 18,

        // borderWidth:1,
    },
    // productSelectView: {
    //     borderWidth: 1,
    //     borderColor: ,
    //     borderRadius: ,
    // },
    productSelectText: {
        fontSize: 14,
        color: '#B5B5B5',
    },
});

export default TopTabCategory;