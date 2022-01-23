import React from "react";
import TopicItem from "./TopicItem.";
import {DUM_UI_TOPICS} from "../values/DUM_UI_TOPICS";

const UITopicScreen: React.FC<any> = ({navigation}) => {
  return <TopicItem data={DUM_UI_TOPICS} navigation={navigation} />
};

export default UITopicScreen;