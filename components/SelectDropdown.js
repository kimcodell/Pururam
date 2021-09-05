import React, { useState } from 'react';
import { Image } from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

const selectionList = ['인기상품', '낮은가격', '높은가격', '사용후기', '유통기한'];

const Select = () => {
    const [selectedItem, setSelectedItem] = useState('인기상품');
    const selectOption = (item) => {
        // setSelectedItem(item);
    };

    return (
        <SelectDropdown
            data={selectionList}
            onSelect={selectOption}
            defaultValue={selectionList[0]}
            buttonStyle={{width: 97.25, height: 35, borderRadius: 20, backgroundColor: '#4B4B4B'}}
            buttonTextStyle={{fontSize: 13, color: '#FFFFFF'}}
            rowStyle={{height: 32, borderBottomWidth: 0}}
            rowTextStyle={{fontSize: 13}}
            dropdownStyle={{borderRadius: 10, marginTop: 4}}
            renderDropdownIcon={() => (<Image style={{width: 11, height: 12, marginRight: 5}} resizeMode='contain' source={require('../src/select_dropdown.png')} />)}
        />
    );
};

export default Select;