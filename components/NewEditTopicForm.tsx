import {Text, StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard} from "react-native";
import React from "react";
import {Button, Fab, Icon, Input, KeyboardAvoidingView, Select, TextArea} from "native-base";
import {Formik} from "formik";
import {initialValues} from "../shared/values/topic/initial-values";
import {topicValidationSchema} from "../shared/values/topic/form-validation";
import {topicsAction} from "../store/topics/topic-slice";
import {useAppDispatch, useAppSelector} from "../store";

const NewEditTopicForm: React.FC<any> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userState.user);
  const currentTopic = useAppSelector((state) => state.topicState.currentTopic);

  return (
    <Formik
      enableReinitialize
      initialValues={navigation.route.name === 'New Topic' ? initialValues : currentTopic}
      validationSchema={topicValidationSchema}
      onSubmit={(values) => {
        dispatch(topicsAction.sendTopic({
          topic: {
            ...values,
            author: `${user.firstName} ${user.lastName}`,
            authorId: user.id
          },
          type: navigation.route.name === 'New Topic' ? 'new' : 'edit',
          id: String(navigation.route.params)
        }))
      }}
    >{({handleChange, handleBlur, handleSubmit, values, errors, setFieldValue}) => (
      <ImageBackground source={require('../assets/new_topic.jpg')} style={{width: '100%', height: '100%'}}>
        <KeyboardAvoidingView behavior='height' style={{padding: 10}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
              <Text style={styles.topics}>Choose Topic</Text>
              <Select
                key='u4'
                borderColor={'rgb(82,14,14)'}
                borderWidth={1.5}
                placeholderTextColor={'rgb(82,14,14)'}
                selectedValue={values.section}
                onValueChange={(value) => setFieldValue('section', value)}
                placeholder="Choose Topic"
                mt={2}
              >
                <Select.Item key='fe' label='Front-end Topic' value='fe'/>
                <Select.Item key='be' label='Back-end Topic' value='be'/>
                <Select.Item key='ui' label='UI/UX Topic' value='ui'/>
                <Select.Item key='dev' label='Dev Topic' value='dev'/>
              </Select>

              <Text style={[styles.topics, {marginTop: 20}]}>Title</Text>
              <Input
                key='u1'
                onChangeText={handleChange('title')}
                value={values.title}
                placeholder='Enter Title'
                borderColor={'rgb(82,14,14)'}
                borderWidth={1.5}
                placeholderTextColor={'rgb(82,14,14)'}
                mt={2}
              />

              <Text style={[styles.topics, {marginTop: 20}]}>Contact</Text>
              <Input
                key='u2'
                onChangeText={handleChange('contact')}
                value={values.contact}
                placeholder='Enter your contact'
                borderColor={'rgb(82,14,14)'}
                borderWidth={1.5}
                placeholderTextColor={'rgb(82,14,14)'}
                mt={2}
              />

              <Text style={[styles.topics, {marginTop: 20}]}>Description</Text>
              <TextArea
                key='u3'
                onChangeText={handleChange('description')}
                value={values.description}
                placeholder='Describe your issue'
                totalLines={10}
                borderColor={'rgb(82,14,14)'}
                borderWidth={1.5}
                placeholderTextColor={'rgb(82,14,14)'}
                mt={2}
              />

              <Button
                mt={5}
                onPress={() => {
                  handleSubmit();
                }}
              >
                Confirm
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    )}
    </Formik>
  )
};

const styles = StyleSheet.create({
  topics: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default NewEditTopicForm;
