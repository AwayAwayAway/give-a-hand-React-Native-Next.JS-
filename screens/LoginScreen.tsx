import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import {Input} from "react-native-elements/dist/input/Input";
import {Icon} from "react-native-elements/dist/icons/Icon";
import {Button} from "react-native-elements/dist/buttons/Button";
import {useAppDispatch, useAppSelector} from "../store";
import {loginActions} from "../store/login/login-slice";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {initialValues} from "../shared/values/login/initial-values";
import {signInSchema, signUpSchema} from "../shared/values/login/form-validation";

const LoginScreen: React.FC<any> = () => {
  const [isSignIn, setSignIn] = useState(false);
  const isLoading = useAppSelector((state) => state.loginState.isLoading);
  const responseStatus = useAppSelector((state) => state.exceptionState.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (responseStatus.status === 'success') {
      setSignIn(!isSignIn);
    }
  }, [responseStatus])

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={isSignIn ? signUpSchema : signInSchema}
      onSubmit={(values) => {
        dispatch(loginActions.login({user: values, type: !isSignIn ? 'signIn' : 'signUp'}))
      }}
    >{({
         handleChange,
         handleBlur,
         handleSubmit,
         values,
         errors,
         setErrors,
         touched
       }) => (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/login_background.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.form}>
              <View>
                <Input
                  placeholder='email@email.com'
                  label="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errorMessage={errors?.email && touched?.email ? errors.email : undefined}
                  errorStyle={errors?.email && touched?.email ? styles.error : undefined}
                  value={values.email}
                  leftIcon={<Icon name='email'/>}
                />
              </View>
              {isSignIn && <View>
								<Input
									placeholder='Jon'
									label="First Name"
									onChangeText={handleChange('firstName')}
									onBlur={handleBlur('firstName')}
									errorMessage={errors?.firstName && touched?.firstName ? errors.firstName : undefined}
									errorStyle={errors?.firstName && touched?.firstName ? styles.error : undefined}
									value={values.firstName}
									leftIcon={<MaterialCommunityIcons name='smart-card' size={20}/>}
								/>
							</View>}
              {isSignIn && <View>
								<Input
									placeholder='Doe'
									label="Last Name"
									onChangeText={handleChange('lastName')}
									onBlur={handleBlur('lastName')}
									errorMessage={errors?.lastName && touched?.lastName ? errors.lastName : undefined}
									errorStyle={errors?.lastName && touched?.lastName ? styles.error : undefined}
									value={values.lastName}
									leftIcon={<MaterialCommunityIcons name='smart-card' size={20}/>}
								/>
							</View>}
              <View>
                <Input
                  placeholder='Enter password'
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  errorMessage={errors?.password && touched?.password ? errors.password : undefined}
                  errorStyle={errors?.password && touched?.password ? styles.error : undefined}
                  value={values.password}
                  leftIcon={<Icon name='lock'/>}
                />
              </View>
              {isSignIn && <View>
								<Input
									placeholder='Confirm password'
									label="Confirm password"
									onChangeText={handleChange('confirmPassword')}
									onBlur={handleBlur('confirmPassword')}
									secureTextEntry={true}
									errorMessage={errors?.confirmPassword && touched?.confirmPassword ? errors.confirmPassword : undefined}
									errorStyle={errors?.confirmPassword && touched?.confirmPassword ? styles.error : undefined}
									value={values.confirmPassword}
									leftIcon={<Icon name='lock'/>}
								/>
							</View>}
              <View>
                <Button title={!isSignIn ? "Sign in" : "Sign Up"} buttonStyle={styles.button}
                        onPress={() => handleSubmit()} loading={isLoading}/>
              </View>
              {isSignIn && <View>
								<Button
									title="Go back"
									buttonStyle={[styles.button, styles.register]}
									onPress={() => {
                    setSignIn(!isSignIn);
                    setErrors({});
                  }}
								/>
							</View>}
              {!isSignIn && <View>
								<Button
									title="Register"
									buttonStyle={[styles.button, styles.register]}
									onPress={() => {
                    setSignIn(!isSignIn);
                    setErrors({});
                  }}
								/>
							</View>
              }
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )}
    </Formik>
  )
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgb(241,131,72)',
    borderRadius: 5,
    marginTop: 10,
  },
  register: {
    backgroundColor: 'rgb(72,100,241)',
  },
  error: {
    justifyContent: 'flex-end',
    color: 'red',
    textAlign: 'right'
  }
});