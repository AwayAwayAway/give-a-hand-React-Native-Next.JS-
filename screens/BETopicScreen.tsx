import React from "react";
import TopicItem from "./TopicItem.";
import {DUM_BE_TOPICS} from "../values/DUM_BE_TOPICS";

const BETopicScreen: React.FC<any> = ({navigation}) => {

  return <TopicItem data={DUM_BE_TOPICS} navigation={navigation} />
};

export default BETopicScreen;