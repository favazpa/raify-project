import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FoodCard = ({ item }) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => console.log(`pressed ${item.Ingredient}`)}
                style={[
                    Styles.listItemCard,
                ]}
                activeOpacity={0.7}>
                <ImageBackground
                    source={{ uri: item.imageUrl }}
                    style={Styles.imageBackgroundStyle}
                    resizeMode={'cover'}
                    imageStyle={{ borderRadius: 5 }}>
                </ImageBackground>
                <Text style={Styles.foodName}>
                    {item?.Ingredient}
                </Text>
                <Text style={Styles.shortText}>
                    {item?.ShortText}
                </Text>
            </TouchableOpacity>
        </>

    );
};

const Styles = StyleSheet.create({
    listItemCard: {
        marginVertical: 9,
        borderRadius: 8,
        flex: 2,
        maxWidth: '44%',
        marginHorizontal: 10,
        height: 150,
        marginTop: 0,
        marginBottom: 30
    },
    imageBackgroundStyle: {
        width: '100%',
        height: 100,
        marginBottom: 5
    },
    foodName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#30384d',
        fontFamily: 'Montserrat-Regular'
    },
    shortText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#7e8a9a',
        fontFamily: 'Montserrat-Regular'
    }
});

export default FoodCard;