import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import React from "react";
import * as yup from "yup";
import {Formik} from "formik";
import {Input} from "react-native-elements/dist/input/Input";
import {Icon} from "react-native-elements/dist/icons/Icon";
import {Button} from "react-native-elements/dist/buttons/Button";
import {useAppDispatch} from "../store";
import {appActions} from "../store/app-slice";

const LoginScreen: React.FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const initialValues = {login: '', password: ''};
  const validationSchema = yup.object().shape({
    login: yup.string().required('Required').email('Enter correct email'),
    password: yup.string().required('Required')
  });

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (values.login === 'admin@admin.com' && values.password === 'admin') {
          dispatch(appActions.setLogin(true));
        }
      }}
    >{({handleChange, handleBlur, handleSubmit, values, errors}) => (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={require('../assets/login_background.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.form}>
              <View>
                <Input
                  placeholder='email@example.com'
                  label="Email"
                  onChangeText={handleChange('login')}
                  onBlur={handleBlur('login')}
                  errorMessage={errors.login}
                  errorStyle={styles.error}
                  value={values.login}
                  leftIcon={<Icon name='email'/>}
                />
              </View>
              <View>
                <Input
                  placeholder='Enter password'
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  errorMessage={errors.password}
                  errorStyle={styles.error}
                  value={values.password}
                  leftIcon={<Icon name='lock'/>}
                />
              </View>
              <View>
                <Button title="Sign in" buttonStyle={styles.button} onPress={() => handleSubmit()} />
              </View>
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
  error: {
    justifyContent: 'flex-end',
    color: 'red',
    textAlign: 'right'
  }
});