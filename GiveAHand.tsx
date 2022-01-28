import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import LoginNavigation from "./navigation/LoginNavigation";
import TabNavigation from "./navigation/TabNavigation";
import * as SecureStore from 'expo-secure-store';
import {useAppSelector} from "./store";


const GiveAHand = () => {
  const login = useAppSelector((state) => state.loginState.isLoading);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const login = async () => {
      await SecureStore.getItemAsync('isLogged').then(data => {
        console.log(data)
        if (data === 'true') {
          setIsLogged(true);
        }
      });
    }

    login().then(() => {});
  }, [login]);


  return (
    <NavigationContainer>
      {isLogged ? <TabNavigation/> : <LoginNavigation/>}
    </NavigationContainer>
  )
};

export default GiveAHand;