import React from "react";
import {
  ImageBackground, Keyboard, ScrollView,
  StyleSheet, Text, TouchableWithoutFeedback, View,
} from "react-native";
import {useAppDispatch, useAppSelector} from "../store";
import {Formik} from "formik";
import {initialValues} from "../shared/values/topic/initial-values";
import {topicValidationSchema} from "../shared/values/topic/form-validation";
import {Select, KeyboardAvoidingView, Box, Flex, Button, Input, TextArea} from "native-base";
import {topicsAction} from "../store/topics/topic-slice";

const NewTopicScreen: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userState.user);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={topicValidationSchema}
      onSubmit={(values) => {
        dispatch(topicsAction.sendTopic({
          topic: {
            ...values,
            author: `${user.firstName} ${user.lastName}`,
            authorId: user.id
          },
          type: 'new'
        }))
      }}
    >{({handleChange, handleBlur, handleSubmit, values, errors, setFieldValue}) => (
      <ImageBackground source={require('../assets/new_topic.jpg')} style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <KeyboardAvoidingView behavior='height' style={{padding: 10}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View>
                <Text>Choose Topic</Text>
                <Select
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

                <Text style={{marginTop: 20}}>Title</Text>
                <Input
                  onChangeText={handleChange('title')}
                  placeholder='Enter Title'
                  borderColor={'rgb(82,14,14)'}
                  borderWidth={1.5}
                  placeholderTextColor={'rgb(82,14,14)'}
                  mt={2}
                />

                <Text style={{marginTop: 20}}>Contact</Text>
                <Input
                  onChangeText={handleChange('contact')}
                  placeholder='Enter your contact'
                  borderColor={'rgb(82,14,14)'}
                  borderWidth={1.5}
                  placeholderTextColor={'rgb(82,14,14)'}
                  mt={2}
                />

                <Text style={{marginTop: 20}}>Description</Text>
                <TextArea
                  onChangeText={handleChange('description')}
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
        </ScrollView>
      </ImageBackground>
    )}
    </Formik>
  )
};

const styles = StyleSheet.create({});

export default NewTopicScreen