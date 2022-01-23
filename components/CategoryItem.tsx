import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const CategoryItem: React.FC<any> = (props) => {
  const handleNavigation = () => {
    props.navigation.navigate(props.id)
  }

  return (
    <TouchableOpacity style={[styles.container, props.style]} activeOpacity={0.7} onPress={handleNavigation}>
      <View style={styles.topic}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: '15%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  topic: {
    elevation: 40,
    shadowColor: '#363434',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})