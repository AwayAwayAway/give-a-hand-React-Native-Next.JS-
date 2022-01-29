import React from "react";
import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button, Input, Overlay} from "react-native-elements";

const TopicDetailsScreen: React.FC<any> = (props) => {
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleMessage = () => {
    setIsMessage(!isMessage);
  }

  return <View style={styles.wrapper}>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Title</Text>
      <Text>Subtitle</Text>
    </View>
    <View style={styles.topicWrapper}>
      <Text style={styles.topic}>Author:</Text>
      <Text style={styles.topicContent}> Jon Doe</Text>
    </View>
    <View style={styles.topicWrapper}>
      <Text style={styles.topic}>Contact:</Text>
      <Text style={styles.topicContent}> Contact info</Text>
    </View>
    <View>
      <Text style={styles.topic}>Description:</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem consequatur corporis
        dignissimos, ducimus earum eveniet hic iste libero maiores maxime nisi nostrum obcaecati quae quia quibusdam
        quisquam vero? Nemo.</Text>
    </View>
    <Button title="I can Help" onPress={handleMessage} containerStyle={styles.button}/>
    <Overlay isVisible={isMessage} onBackdropPress={handleMessage} overlayStyle={styles.overlay}>
      <Text>Message</Text>
      <Input onChangeText={(value) => setMessage(value)} multiline numberOfLines={4}/>
      <Button title="Send Message" onPress={handleMessage}/>
    </Overlay>
  </View>
};

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '50%',
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  topic: {
    fontWeight: "bold",
    fontSize: 20,
  },
  topicContent: {
    fontSize: 18,
  },
  topicWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: "center"
  },
  titleWrapper: {
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    marginTop: 50
  }
})

export default TopicDetailsScreen;
