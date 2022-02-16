import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import LoginNavigation from "./navigation/LoginNavigation";
import TabNavigation from "./navigation/TabNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from "./store";
import {useToast} from "native-base";
import {exceptionActions} from "./store/exception/exception-slice";
import jwt_decode from "jwt-decode";
import {UserModel} from "./shared/models/user/user-model";
import {userActions} from "./store/user/user-slice";

const GiveAHand = () => {
  const [isLogged, setIsLogged] = useState(false);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.loginState.isLoading);
  const responseStatus = useAppSelector((state) => state.exceptionState.error);
  const user = useAppSelector((state) => state.userState.user);

  useEffect(() => {
    const login = async () => {
      try {
        const value = await AsyncStorage.getItem('isLogged');

        if (value === 'true' && user.id !== null) {
          setIsLogged(true);
        }

        if (value === 'true' && user.id === null) {
          const token = await AsyncStorage.getItem('token').then((value) => {
            if (value !== null) {
              return JSON.parse(value);
            }
          });

          const user: UserModel = jwt_decode(token.data.token);

          dispatch(userActions.setUser({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            roles: user.roles,
            id: user.id
          }));

          setIsLogged(true);
        }
      } catch (e) {
        console.log(e);
      }
    }

    login();
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