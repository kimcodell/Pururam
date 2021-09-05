import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

import SearchTerm from '../components/SearchTerm';


const Search = () => {
    const recommendationList = ['비건', '지성', '수분크림', '앰플', '세럼'];
    const [text, setText] = useState('');

    const typeValue = (text) => {
        setText(text);
    };

    const search = () => {
        if(!text) {
            Alert.alert(
                '',
                '검색어를 입력하세요.',
                [
                    {text: '확인'},
                ],
                {cancelable: true},
            );
        }
        console.log(text);
    };

    return (
        <SafeAreaView> 
            <View style={{height: '100%', backgroundColor: '#FFFFFF'}}>

                <View style={{padding: 20}}>
                    <Text style={style.title}>무엇을 찾으시나요?</Text>

                    <View style={style.searchInputContainer}>
                        <TextInput style={style.searchInput} onChangeText={typeValue} placeholder='검색어를 입력하세요.' placeholderTextColor='#B5B5B5'/>
                        <TouchableOpacity onPress={search}>
                            <Image style={{width: 25, height: 25}} source={require('../src/header_search.png')}/>
                        </TouchableOpacity>
                    </View>

                    <Text style={style.subTitle}>추천 검색어</Text>
                    <View style={style.recommendationListContainer}>
                        {recommendationList.map((value, index) => (<SearchTerm key={index} term={value}/>))}
                    </View>
                </View>

                <ImageBackground
                    style={{width: '100%', aspectRatio: 3/2, position: 'absolute', bottom: 0}}
                    source={require('../src/search_picture.png')}
                />
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    title: {
        color: '#428982',
        fontSize: 26,
        fontWeight: '700',
    }, 
    subTitle: {
        color: '#353535',
        fontSize: 16,
        fontWeight: '700',
    },
    recommendationListContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 12,
    },
    searchInputContainer: {
        width: '88%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 40,
        paddingBottom: 2,
        borderBottomWidth: 3,
        borderBottomColor: '#353535',
    }, 
    searchInput: {
        width: '80%',
        fontSize: 18,
        color: '#000',
        padding: 0,
        flexGrow: 1,
    },
});

export default Search;