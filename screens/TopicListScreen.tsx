import React, {useEffect} from "react";
import TopicItem from "../components/TopicItem.";
import {useAppDispatch, useAppSelector} from "../store";
import {topicsAction} from "../store/topics/topic-slice";
import {TopicsModel} from "../shared/models/topics/topics-model";

const TopicListScreen: React.FC<any> = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const frontList = useAppSelector((state) => state.topicState.frontTopic);
  const backList = useAppSelector((state) => state.topicState.backTopic);
  const uiList = useAppSelector((state) => state.topicState.uiTopic);
  const devList = useAppSelector((state) => state.topicState.devTopic);
  let currentList: TopicsModel[] = [];
  let currentCategory: string;

  switch (route.name) {
    case 'Front-end Topics':
      currentList = frontList;
      currentCategory = 'fe';
      break;
    case 'Back-end Topics':
      currentList = backList;
      currentCategory = 'be';
      break;
    case 'UI/UX Topics':
      currentList = uiList;
      currentCategory = 'ui';
      break;
    case 'Dev-Ops Topics':
      currentList = devList;
      currentCategory = 'dev';
      break;
  }

  useEffect(() => {
    dispatch(topicsAction.getTopicList({type: currentCategory}))
  }, [frontList, backList, uiList, devList, dispatch])

  return <TopicItem data={currentList} navigation={navigation}/>
};

export default TopicListScreen;