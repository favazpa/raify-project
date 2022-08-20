import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import CustomHeader from "./src/components/header";
import SearchBar from "./src/components/search-bar";
import foodDetails from "./src/constants/food-details.json";
import FoodCard from "./src/components/food-card";

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <CustomHeader />
      <SearchBar />
      <View style={Styles.subContainer}>

        <FlatList
          data={foodDetails}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => '' + index}
          style={{ paddingHorizontal: 5 }}
          numColumns={2}
          renderItem={({ item, index }) => (
            <FoodCard item={item} />
          )}
          ListHeaderComponent={<Text style={Styles.food}>Foods</Text>}
          ListFooterComponent={<View style={{ height: 50 }} />}
        />
      </View>
    </View>
  );

};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  subContainer: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    flex: 1,
    padding: 10,
    marginHorizontal: 10
  },
  food: {
    color: '#30384d',
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
    fontFamily: 'Montserrat-Regular'
  },
  listItemCard: {
    marginVertical: 9,
    borderRadius: 8,
    flex: 2,
    maxWidth: '44%',
    marginHorizontal: 10,
    height: 150,
    marginTop: 0,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: 100,
  },
  foodName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#30384d'
  },
  shortText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#7e8a9a'
  }
});

export default HomeScreen;