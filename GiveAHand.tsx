import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useAppSelector} from "./store";
import LoginNavigation from "./navigation/LoginNavigation";
import TabNavigation from "./navigation/TabNavigation";


const GiveAHand = () => {
  const isLogin = useAppSelector((state) => state.appState.isLogin);

  return (
    <NavigationContainer>
      {isLogin ? <TabNavigation/> : <LoginNavigation/>}
    </NavigationContainer>
  )
};

export default GiveAHand;