import React from "react";
import {FlatList, TouchableOpacity} from "react-native";
import {ListItem} from "react-native-elements";
import {Icon} from "react-native-elements/dist/icons/Icon";
import {useAppDispatch} from "../store";
import {TopicsModel} from "../shared/models/topics/topics-model";
import moment from "moment";

type TopicProps = {
  data: TopicsModel[],
  navigation: any,
}

const TopicItem: React.FC<TopicProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleTopicSelection = (id: string) => {
    props.navigation.navigate("TopicDetails");
  };
  // @ts-ignore
  return <FlatList data={props.data} keyExtractor={item => item.id} renderItem={(item: {item: TopicsModel}) => (
    <TouchableOpacity onPress={() => handleTopicSelection(item.item.section)}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={{color: 'red'}}>
            {item.item.title}
          </ListItem.Title>
          <ListItem.Subtitle>{`created by: ${item.item.author}`}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title right style={{color: 'green'}}>
            {moment(item.item.updatedAt).format('MM/DD/YYYY')}
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