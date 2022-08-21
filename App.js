import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, TouchableOpacity, ImageBackground, RefreshControl } from "react-native";
import CustomHeader from "./src/components/header";
import SearchBar from "./src/components/search-bar";
import foodDetails from "./src/constants/food-details.json";
import FoodCard from "./src/components/food-card";

const HomeScreen = () => {
  const [foodList, setFoodList] = useState(foodDetails);
  const [searchedText, setSearchedText] = useState('');
  const [searchedFoodList, setSearchedFoodList] = useState(foodDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    if (loading) {
      setFoodList(foodDetails);
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (searchedText?.length) {
      setLoading(true);
      const searchedFoodResult = foodDetails?.filter(function (item) {
        const searchedName = `${item?.Ingredient ?? ''}`?.toUpperCase();
        const searchedTag = `${item?.ShortText ?? ''}`?.toUpperCase();
        const textSearched = searchedText?.toUpperCase();
        return (
          searchedName?.indexOf(textSearched) > -1 ||
          searchedTag?.indexOf(textSearched) > -1
        );
      });
      setSearchedFoodList(searchedFoodResult);
    } else setSearchedFoodList(foodDetails);
  }, [searchedText]);

  useEffect(() => {
    setFoodList(searchedFoodList);
    setLoading(false);
  }, [searchedFoodList]);

  const handleRefresh = () => {
    setLoading(true);
  };

  const onSearchTextChange = (text) => {
    setSearchedText(text);
  };

  return (
    <View style={Styles.container}>
      <CustomHeader />
      <SearchBar onSearchTextChange={(text) => onSearchTextChange(text)} />
      <View style={Styles.subContainer}>
        <FlatList
          refreshControl={
            <RefreshControl
              colors={["#9Bd35A", "#689F38"]}
              refreshing={loading}
              onRefresh={handleRefresh} />
          }
          data={foodList}
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