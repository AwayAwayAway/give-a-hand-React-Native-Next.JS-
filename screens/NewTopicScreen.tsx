import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView, ScrollView,
  StyleSheet, Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {useAppDispatch} from "../store";
import * as yup from "yup";
import {Formik} from "formik";
import {Input} from "react-native-elements/dist/input/Input";
import {Button} from "react-native-elements/dist/buttons/Button";
import {Picker} from "@react-native-picker/picker";
import {Tooltip} from "react-native-elements/dist/tooltip/Tooltip";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const NewTopicScreen: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();
  const initialValues = {title: '', topic: '', section: '', description: '', contact: ''};
  const validationSchema = yup.object().shape({
    login: yup.string().required('Required').email('Enter correct email'),
    password: yup.string().required('Required')
  });

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >{({handleChange, handleBlur, handleSubmit, values, errors}) => (
      <ScrollView>
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.form}>
              <Text style={[styles.label, styles.card, {marginTop: 10}]}>Choose Topic</Text>
              <View style={[styles.picker, styles.card, {marginBottom: 15}]}>
                <Picker
                  selectedValue={values.topic}
                  onValueChange={handleChange('topic')}>
                  <Picker.Item label="Front-end" value="FE"/>
                  <Picker.Item label="Back-end" value="BE"/>
                  <Picker.Item label="UI/UX Design" value="UI"/>
                  <Picker.Item label="Dev-ops" value="DO"/>
                </Picker>
              </View>
              <Input
                label="Title"
                labelStyle={styles.label}
                inputContainerStyle={styles.picker}
                inputStyle={styles.input}
                onChangeText={handleChange('title')}
                errorMessage={errors.title}
                errorStyle={styles.error}
                value={values.title}
              />
              <Input
                label="Section"
                labelStyle={styles.label}
                inputContainerStyle={styles.picker}
                inputStyle={styles.input}
                onChangeText={handleChange('section')}
                errorMessage={errors.section}
                errorStyle={styles.error}
                value={values.section}
              />
              <View style={[styles.card, styles.tooltip]}>
                <Text style={styles.label}>Contact Info</Text>
                <Tooltip
                  popover={<Text>You can share you Skype or Telegram</Text>}
                  width={200}
                  height={80}
                  backgroundColor={'rgb(173,150,150)'}
                >
                  <MaterialCommunityIcons name={'account-question'} size={20} style={styles.card}/>
                </Tooltip>
              </View>
              <Input
                labelStyle={styles.label}
                inputContainerStyle={styles.picker}
                inputStyle={styles.input}
                onChangeText={handleChange('contact')}
                errorMessage={errors.contact}
                errorStyle={styles.error}
                value={values.contact}
              />
              <Input
                label="Description"
                labelStyle={styles.label}
                inputContainerStyle={styles.picker}
                inputStyle={styles.input}
                onChangeText={handleChange('description')}
                errorMessage={errors.description}
                errorStyle={styles.error}
                value={values.description}
                multiline
                numberOfLines={3}
              />
              <View>
                <Button title="Confirm" buttonStyle={[styles.button, styles.card]} onPress={() => handleSubmit()}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    )}
    </Formik>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  card: {
    marginHorizontal: 10
  },
  picker: {
    borderStyle: "solid",
    borderColor: '#2a3dc0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'normal',
  },
  tooltip: {
    flexDirection: 'row'
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
  },
  input: {
    paddingVertical: 10,
  }
});

export default NewTopicScreen