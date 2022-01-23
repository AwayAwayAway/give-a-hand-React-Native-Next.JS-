import CategoryScreen from "../screens/CategoryScreen";
import TopicDetailsScreen from "../screens/TopicDetailsScreen";
import FETopicScreen from "../screens/FETopicScreen";
import BETopicScreen from "../screens/BETopicScreen";
import UITopicScreen from "../screens/UITopicScreen";
import DOTopicScreen from "../screens/DOTopicScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CategoryNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name='Category' component={CategoryScreen} options={{
        headerStyle: { backgroundColor: 'rgb(47,143,134)' },
        headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='TopicDetails' component={TopicDetailsScreen}/>
    <Stack.Screen name='Front-end Topics' component={FETopicScreen}/>
    <Stack.Screen name='Back-end Topics' component={BETopicScreen}/>
    <Stack.Screen name='UI/UX Topics' component={UITopicScreen}/>
    <Stack.Screen name='Dev-Ops Topics' component={DOTopicScreen}/>
  </Stack.Navigator>
);

export default CategoryNavigation;