import {FlatList, ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import {DUM_CATEGORY_LIST} from "../values/DUM_CATEGORY_LIST";


const CategoryScreen: React.FC<any> = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/category_background.jpg')} style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        {DUM_CATEGORY_LIST.map(item => (
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