import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import TopTabCategory from '../components/TopTabCategory';
import Product from '../components/Product';
import Select from '../components/SelectDropdown';

export const productList = [
    {
        id: 1,
        name: '물들임 비건 클리어 스킨 아하파하 모공앰플 55ml',
        price: 23800,
        image: 'https://muldream.com/web/product/medium/202008/0518e351f8772f0f108e84213cb4e4d5.jpg',
    }, {
        id: 2,
        name: '물들임 비건 그린 마일드 시카 진정앰플 55ml',
        price: 23800,
        image: 'https://muldream.com/web/product/medium/202008/5e784df8983c5e0dd346d46b5f02e523.jpg',
    }, {
        id: 3,
        name: '물들임 비건 그린 마일드 비타 생기앰플 55ml',
        price: 23800,
        image: 'https://muldream.com/web/product/medium/202008/e224c5a251d7c7b4f8cc76dc04c3ea1a.jpg',
    }, {
        id: 4,
        name: '물들임 비건 그린 마일드 히알루론 수분앰플 55ml',
        price: 23800,
        image: 'https://muldream.com/web/product/medium/202008/aaa42bbbf0d63eb73220038e4c8b4675.jpg',
    }, {
        id: 5,
        name: '물들임 트러블 클리어 아하 파하 앰플',
        price: 44800,
        image: 'https://muldream.com/web/product/medium/20191114/71521ad716bc6e61a1506565f1c0bb4c.jpg',
    }, {
        id: 6,
        name: '클린 페이스 솔리드 미스트 카밍',
        price: 32000,
        image: 'https://skinlaundryshop.com/web/product/small/202105/4f9b5b92d5ca678f5a8ba4a3b55d9879.png',
    }, {
        id: 7,
        name: '클린 페이스 가글 젤 투 폼 클렌저 마일드',
        price: 38000,
        image: 'https://skinlaundryshop.com/web/product/small/202104/0a9eafb92d5fec65a3dd1e6982340439.png',
    }, {
        id: 8,
        name: '클린 페이스 가글 젤 투 폼 클렌저 스트롱',
        price: 38000,
        image: 'https://skinlaundryshop.com/web/product/medium/202104/386a79dafb6455f22963f7052228b5e2.png',
    }, {
        id: 9,
        name: '하이비건 얼스 워터 토너 200ml',
        price: 15000,
        image: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/15ac/ec50a26d7f810babf88d6d945e61e23d84a4c82163d061dc7d663c8b14f3.jpg',
    }, {
        id: 10,
        name: '배드스킨 콜라겐 밤 하이드레이팅 앰플 400ml',
        price: 12900,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015532601ko.jpg?l=ko',
    }, {
        id: 11,
        name: '가히 김고은 멀티밤',
        price: 29400,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/400/10/0000/0015/A00000015499101ko.jpg?l=ko',
    }, {
        id: 12,
        name: '가히 엑스틴C밤',
        price: 37600,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0015/A00000015499801ko.jpg?l=ko',
    }, {
        id: 13,
        name: '넘버즈인 3번 결광가득 에센스 토너 200ml',
        price: 15400,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0015/A00000015094707ko.jpg?l=ko',
    }, {
        id: 14,
        name: '피지오겔 DMT 페이셜 크림 150ml',
        price: 27800,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0001/A00000001288105ko.jpg?l=ko',
    }, {
        id: 15,
        name: '수이스킨 어린 새싹 클린 토너 200ml',
        price: 12000,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0015/A00000015632601ko.jpg?l=ko',
    }, {
        id: 16,
        name: '수이스킨 하얀 자작나무 수액 앰플 35ml',
        price: 14400,
        image: 'https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0015/A00000015632701ko.jpg?l=ko',
    },
];

const productTypeList = ['에센스/세럼/앰플', '마스크팩', '토너/미스트', '로션/크림/오일', '클렌징', '선케어'];

const Best = () => {

    return (
        <View style={style.container}>
            <TopTabCategory subCategoryList={productTypeList} />

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

export default Best;