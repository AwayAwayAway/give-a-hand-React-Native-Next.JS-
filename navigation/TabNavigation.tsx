import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryNavigation from "./CategoryNavigation";
import NewTopicScreen from "../screens/NewTopicScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator screenOptions={{
    tabBarActiveTintColor: '#f30202',
    tabBarLabelStyle: styles.label,
    tabBarButton:  (props) => <TouchableOpacity {...props} activeOpacity={0.8}/>
  }}
  >
    <Tab.Screen name='Home' component={CategoryNavigation} options={{
      headerShown: false,
      tabBarIcon: ({color}) => (<MaterialCommunityIcons name='home' size={25} color={color} />),
    }}
    />
    <Tab.Screen name='New Topic' component={NewTopicScreen} options={{
      headerStyle: { backgroundColor: 'rgb(252,134,134)' },
      headerTintColor: '#fff',
      tabBarIcon: ({color}) => (<MaterialCommunityIcons name='new-box' size={25} color={color}/>),
    }}/>
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 10,
    paddingBottom: 5
  }
})

export default TabNavigation;