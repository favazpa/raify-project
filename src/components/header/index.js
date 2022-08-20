import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const CustomHeader = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.searchText}>Search</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderBottomWidth: 4,
        borderBottomColor: '#30384d',
        justifyContent: 'center',
        marginBottom: 5,
        paddingHorizontal: 20
    },
    searchText: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
        fontSize: 19,
        color: '#30384d'
    }
});

export default CustomHeader;