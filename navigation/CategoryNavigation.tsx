import CategoryScreen from "../screens/CategoryScreen";
import TopicDetailsScreen from "../screens/TopicDetailsScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TopicListScreen from "../screens/TopicListScreen";

const Stack = createNativeStackNavigator();

const CategoryNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name='Category' component={CategoryScreen} options={{
        headerStyle: { backgroundColor: 'rgb(47,143,134)' },
        headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='TopicDetails' component={TopicDetailsScreen}/>
    <Stack.Screen name='Front-end Topics' component={TopicListScreen}/>
    <Stack.Screen name='Back-end Topics' component={TopicListScreen}/>
    <Stack.Screen name='UI/UX Topics' component={TopicListScreen}/>
    <Stack.Screen name='Dev-Ops Topics' component={TopicListScreen}/>
  </Stack.Navigator>
);

export default CategoryNavigation;