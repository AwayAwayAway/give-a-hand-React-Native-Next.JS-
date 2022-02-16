import {ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import {categoryList} from "../shared/values/category/category-list";

const CategoryScreen: React.FC<any> = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/category_background.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        {categoryList.map(item => (
          <CategoryItem
            key={item.id}
            id={item.id}
            title={item.title}
            style={item.style}
            navigation={navigation}
          />
        ))}
      </SafeAreaView>
    </ImageBackground>
  )
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between"
  }
});