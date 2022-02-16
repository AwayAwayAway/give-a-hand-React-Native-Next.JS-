import CategoryScreen from "../screens/CategoryScreen";
import TopicDetailsScreen from "../screens/TopicDetailsScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TopicListScreen from "../screens/TopicListScreen";
import UserTopicScreen from "../screens/UserTopicScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import EditTopicScreen from "../screens/EditTopicScreen";

const Stack = createNativeStackNavigator();

const MyTopicNavigation = () => (
  <Stack.Navigator initialRouteName="My Topics">
    <Stack.Screen name='My Topics' component={UserTopicScreen} options={{
      headerStyle: {backgroundColor: 'rgb(47,143,134)'},
      headerTintColor: '#fff',
    }}/>
    <Stack.Screen name='My Details' component={TopicDetailsScreen} options={{
      headerStyle: {backgroundColor: 'rgb(47,143,134)'},
      headerTintColor: '#fff',
    }}
    />
    <Stack.Screen name='Edit Topic' component={EditTopicScreen} options={{
      headerStyle: {backgroundColor: 'rgb(47,143,134)'},
      headerTintColor: '#fff',
    }}
    />
  </Stack.Navigator>
);

export default MyTopicNavigation;