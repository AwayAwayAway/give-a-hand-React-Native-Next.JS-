import React from "react";
import {FlatList, TouchableOpacity} from "react-native";
import {DUM_FE_TOPICS, TopicValueType} from "../values/DUM_FE_TOPICS";
import {ListItem} from "react-native-elements";
import {Icon} from "react-native-elements/dist/icons/Icon";
import {useAppDispatch} from "../store";

type TopicProps = {
  data: TopicValueType[],
  navigation: any,
}

const TopicItem: React.FC<TopicProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleTopicSelection = (id: string) => {
    props.navigation.navigate("TopicDetails");
  };

  return <FlatList data={props.data} keyExtractor={item => item.id} renderItem={(item: any) => (
    <TouchableOpacity onPress={() => handleTopicSelection(item.item.id)}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{color: 'red'}}>
            {item.item.title}
          </ListItem.Title>
          <ListItem.Subtitle>{item.item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title right style={{color: 'green'}}>
            {item.item.time}
          </ListItem.Title>
          <ListItem.Subtitle right>
            <Icon name={item.item.status ? 'check' : 'schedule'}/>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  )}
  />
};

export default TopicItem;