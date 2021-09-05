import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import TopTabCategory from '../components/TopTabCategory';
import Product from '../components/Product';
import Select from '../components/SelectDropdown';

import { productList } from './Best';

const forEnvTypeList = ['에센스/세럼/앰플', '마스크팩', '토너/미스트', '로션/크림/오일', '클렌징', '선케어'];

const ForEnv = () => {
    return (
        <View style={style.container}>
            <TopTabCategory subCategoryList={forEnvTypeList}/>

            <View style={style.middleContainer}>
                <Text style={style.middleText}>{`총 ${productList.length} 건`}</Text>
                <Select/>
            </View>
            <FlatList
                style={{paddingLeft: '1%', marginHorizontal: 20}}
                data={productList}
                renderItem={({item}) => (
                    <Product key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
                )}
                numColumns={3}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        height: '100%',
    },
    middleContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 14,
        marginHorizontal: 20,
    },
    middleText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#353535',
    },
});

export default ForEnv;