import React from "react";
import TopicItem from "./TopicItem.";
import {DUM_DO_TOPICS} from "../values/DUM_DO_TOPICS";

const DOTopicScreen: React.FC<any> = ({navigation}) => {
  return <TopicItem data={DUM_DO_TOPICS} navigation={navigation} />
};

export default DOTopicScreen;