import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const SearchBar = ({
    onSearchTextChange
}) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.searchIcon}>
                <Icon
                    name='search'
                    size={20}
                    color='#7e8a9a'
                />
            </View>
            <TextInput
                style={Styles.placeholder}
                placeholderTextColor='#7e8a9a'
                placeholder='Food name'
                onChangeText={(text) => onSearchTextChange(text)} />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        height: 45,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 5
    },
    searchIcon: {
        height: '100%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    placeholder: {
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        width: '70%',
        color: '#7e8a9a'
    }
});

export default SearchBar;