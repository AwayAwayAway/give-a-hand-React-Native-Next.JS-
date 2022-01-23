import React from "react";
import {DUM_FE_TOPICS} from "../values/DUM_FE_TOPICS";
import TopicItem from "./TopicItem.";

const FETopicScreen: React.FC<any> = ({navigation}) => {
  return <TopicItem data={DUM_FE_TOPICS} navigation={navigation} />
};

export default FETopicScreen;