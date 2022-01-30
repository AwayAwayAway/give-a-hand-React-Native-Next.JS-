import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import LoginNavigation from "./navigation/LoginNavigation";
import TabNavigation from "./navigation/TabNavigation";
import * as SecureStore from 'expo-secure-store';
import {useAppDispatch, useAppSelector} from "./store";
import {useToast} from "native-base";
import {exceptionActions} from "./store/exception/exception-slice";


const GiveAHand = () => {
  const [isLogged, setIsLogged] = useState(false);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.loginState.isLoading);
  const responseStatus = useAppSelector((state) => state.exceptionState.error);

  useEffect(() => {
    const login = async () => {
      await SecureStore.getItemAsync('isLogged').then(data => {
        if (data === 'true') {
          setIsLogged(true);
        }
      });
    }

    login().then(() => {});
  }, [login]);

  useEffect(() => {
    if (responseStatus.status === 'success') {
      toast.show({
        title: "Success",
        status: "success",
        description: "Data was successfully saved.",
        duration: 3000,
        placement: 'top',
        onCloseComplete: () => dispatch(exceptionActions.resetException())
      })
    }

    if (responseStatus.status === 'reject') {
      toast.show({
        title: "Something went wrong",
        status: "error",
        description: responseStatus.message || 'Please create a support ticket from the support page',
        duration: 3000,
        placement: 'top',
        onCloseComplete: () => dispatch(exceptionActions.resetException())
      })
    }
  }, [responseStatus])


  return (
    <NavigationContainer>
      {isLogged ? <TabNavigation/> : <LoginNavigation/>}
    </NavigationContainer>
  )
};

export default GiveAHand;