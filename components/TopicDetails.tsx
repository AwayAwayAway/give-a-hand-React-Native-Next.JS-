import {Text, StyleSheet, View} from "react-native";
import React from "react";
import {Fab, Icon} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type TopicProps = {
  title: string;
  author: string;
  contact: string;
  description: string;
  navigation: any;
}

const TopicDetails: React.FC<TopicProps> = ({title, contact, description, author, navigation}) => {
  return <View style={styles.wrapper}>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.topicWrapper}>
      <Text style={styles.topic}>Author: </Text>
      <Text style={styles.topicContent}>{author}</Text>
    </View>
    <View style={styles.topicWrapper}>
      <Text style={styles.topic}>Contact: </Text>
      <Text style={styles.topicContent}>{contact}</Text>
    </View>
    <View>
      <Text style={styles.topic}>Description: </Text>
      <Text style={styles.topicContent}>{description}</Text>
    </View>

    {navigation.route.name === 'My Details' &&
        <Fab
            onPress={() => navigation.navigation.navigate('Edit Topic', navigation.route.params)}
            renderInPortal={false}
            shadow={2} size="sm"
            icon={<Icon color="white" as={MaterialCommunityIcons} name="pencil" size="sm"/>}
        />
    }
  </View>
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    flex: 1
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

export default TopicDetails;
