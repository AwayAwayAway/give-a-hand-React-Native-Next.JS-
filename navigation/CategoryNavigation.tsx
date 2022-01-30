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
    <Stack.Screen name='TopicDetails' component={TopicDetailsScreen} options={{
        headerStyle: { backgroundColor: 'rgb(47,143,134)' },
        headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='Front-end Topics' component={TopicListScreen} options={{
        headerStyle: { backgroundColor: 'rgb(105,32,206)' },
        headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='Back-end Topics' component={TopicListScreen} options={{
        headerStyle: { backgroundColor: 'rgb(239,7,43)' },
        headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='UI/UX Topics' component={TopicListScreen} options={{
        headerStyle: { backgroundColor: 'rgb(51,187,22)' },
        headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='Dev-Ops Topics' component={TopicListScreen} options={{
        headerStyle: { backgroundColor: 'rgb(215,199,17)' },
        headerTintColor: '#fff',
    }}/>
  </Stack.Navigator>
);

export default CategoryNavigation;