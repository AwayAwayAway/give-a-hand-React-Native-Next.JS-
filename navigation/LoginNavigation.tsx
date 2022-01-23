import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import React from "react";
import {StyleSheet} from "react-native";

const Login = createNativeStackNavigator();

const LoginNavigation = () => (
  <Login.Navigator>
    <Login.Screen name='Login' component={LoginScreen} options={{
      headerStyle: styles.loginHeader,
      headerTintColor: '#fff',
    }}
    />
  </Login.Navigator>
)

const styles = StyleSheet.create({
  loginHeader: {
    backgroundColor: 'rgb(126,63,253)',
  }
})

export default LoginNavigation;